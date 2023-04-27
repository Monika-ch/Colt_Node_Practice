import { franc } from "franc";
import langs from "langs";
import colors from "colors";

const input = process.argv[2];
const langCode = franc(input);
const error = colors.red(
  "SORRY, COULDN'T FIGURE IT OUT! TRY AGAIN WITH MORE SAMPLE TEXT!"
);
if (langCode === "und") {
  console.log(error);
} else {
  const language = langs.where("3", langCode);
  if (language) {
    console.log(colors.green(`Our best guess is: ${language.name}!`));
  } else {
    console.log(error);
  }
}
