const franc = require("franc");
const langs = require("langs");
const colors = require("colors");

// // LEVEL-1 passing a single language

// const langCode = franc("এটি একটি ভাষা একক IBM স্ক্রিপ্ট");
// let language = langs.where("3", langCode);
// console.log(language.name);

// // LEVEL-2 passing an array of languages

// const langCode1 = franc("Alle menslike wesens word vry");
// const langCode2 = franc("Alle menneske er fødde til fridom");
// const langCode3 = franc("এটি একটি ভাষা একক IBM স্ক্রিপ্ট");
// const langCode4 = franc("Considerando ser essencial que os direitos humanos");
// const langCodes = [langCode1, langCode2, langCode3, langCode4];
// let languages = langCodes.map((l) => langs.where("3", l));
// console.log(languages.map((lang) => lang.name));

// // LEVEL-3 passing a single language argument from command line instead of hardcoded string here

const input = process.argv[2];
const langCode = franc(input);
if (langCode === "und") {
  console.log(
    "SORRY, COULDN'T FIGURE IT OUT! TRY AGAIN WITH MORE SAMPLE TEXT".red
  );
} else {
  const language = langs.where("3", langCode);
  console.log(`Our best guess is: ${language.name}`.green);
}
