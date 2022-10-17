import WaybarJsonOutput from "./WaybarJsonOutput.ts";

const cmd: Deno.RunOptions = {
  cmd: [
    "dnf",
    "check-update",
  ],
  stdout: "piped",
  stderr: "piped",
};

const child = Deno.run(cmd);
const { code } = await child.status();
const decoder = new TextDecoder();

const output = new WaybarJsonOutput("Updates");
switch (code) {
  case 0:
    // System up to date, no output
    output.tooltip = "System up to date";
    output.class = "ok";
    break;
  case 1: {
    // Generic error
    const stderr = await child.stderrOutput();
    output.tooltip = decoder.decode(stderr);
    output.class = "error";
    break;
  }
  case 100: {
    // Updates available
    const stdout = await child.output();
    output.tooltip = decoder.decode(stdout);
    output.class = "update";
    break;
  }
  case 200: {
    // Lock error
    const stderr = await child.stderrOutput();
    output.tooltip = decoder.decode(stderr);
    output.class = "error";
    break;
  }
  default: {
    // Undocumented case
    const stderr = await child.stderrOutput();
    const stdout = await child.output();
    output.tooltip = `${decoder.decode(stderr)}\n${decoder.decode(stdout)}`;
    output.class = "error";
    break;
  }
}

output.repr();
