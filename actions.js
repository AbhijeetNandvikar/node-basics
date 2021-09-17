import { readFile, writeFile } from "fs/promises";

export const action = async () => {
  console.log("Hello World");
  try {
    const result = await readFile(new URL(`input.html`, import.meta.url), {
      encoding: "utf-8",
    });
    console.log("Read operation is successful");

    const newResult = result.replace("{message}", "Hello World");

    const output = await writeFile(
      new URL("output.html", import.meta.url),
      newResult
    );
    console.log("Write operation is successful");
  } catch (err) {
    console.log("Something went wrong", err);
  }
};
