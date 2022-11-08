# waybar-extensions

A collection of `deno` scripts for [Waybar](https://github.com/Alexays/Waybar).
This repo is only really meant for personal use but I thought to leave it public
in case anyone would like to reference it.

- `hello`: reference script, prints "Hello World".
- `dnf`: run `dnf check-update`, open a terminal to update on click.

## Build

Compile as:

```sh
deno compile -A --output ./bin/{file}
```

Note that using `deno run` in the `exec` portion of a Waybar Custom Module does
not work (best guess is they don't spawn in a shell).

The `./ref` folder includes a `json` fragment to copy over to Waybar config, and
a `css` fragment for Waybar style.
