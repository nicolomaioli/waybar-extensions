import { writeAllSync } from "https://deno.land/std@0.159.0/streams/conversion.ts";

export default class WaybarJsonOutput {
  text: string;
  alt?: string;
  tooltip?: string;
  class?: string;
  percentage?: number;

  constructor(text?: string) {
    this.text = text ? text : "";
  }

  repr() {
    const serialized = JSON.stringify(this);
    const encoded = new TextEncoder().encode(serialized);
    writeAllSync(Deno.stdout, encoded);
  }
}
