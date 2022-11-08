SRC_DIR=src
OUT_DIR=bin
EXECUTABLES=$(patsubst $(SRC_DIR)/%.ts,$(OUT_DIR)/%,$(wildcard src/*.ts))

bin/%: src/%.ts
	deno compile -A --output $@ $<

all: $(EXECUTABLES)

clean:
	rm -f $(OUT_DIR)/*

.PHONY: all clean
