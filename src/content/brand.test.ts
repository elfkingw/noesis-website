import { readFileSync, readdirSync } from "fs";
import path from "path";
import { describe, expect, it } from "vitest";
import { brand } from "./site";

describe("brand naming", () => {
  it("exports the exact product name", () => {
    expect(brand.full).toBe("新致新知 Noesis AI");
    expect(brand.zh).toBe("新致新知");
  });

  it("never uses the forbidden alias in content sources", () => {
    const forbidden = ["新致", "灵智"].join("");
    const root = path.join(__dirname);
    const files = readdirSync(root).filter(
      (f) => f.endsWith(".ts") && !f.endsWith(".test.ts"),
    );
    for (const file of files) {
      const text = readFileSync(path.join(root, file), "utf8");
      expect(text.includes(forbidden), file).toBe(false);
    }
  });
});
