import { writeAllSync } from "https://deno.land/std@0.159.0/streams/conversion.ts";

const hello = {
  text: "Hello",
};

const res = new TextEncoder().encode(JSON.stringify(hello));
writeAllSync(Deno.stdout, res);
