# pattern-grab

> 🤛🏻 Regular Expression Data Grabber

![Github Workflow](https://github.com/hmmhmmhm/pattern-grab/actions/workflows/test.yml/badge.svg)
![GitHub License](https://img.shields.io/github/license/hmmhmmhm/pattern-grab)
![Jest Coverage](https://raw.githubusercontent.com/hmmhmmhm/pattern-grab/main/badges/badge-lines.svg)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
![NPM Version](https://img.shields.io/npm/v/pattern-grab.svg?label=version)
![jsDelivr](https://badgen.net/jsdelivr/v/npm/pattern-grab)

Pattern-grab simplifies the process of parsing string patterns using regular expressions.

<br />

## 📦 Usage (ES5+)

```bash
npm i pattern-grab
```

```ts
import patternGrab from 'pattern-grab'

// Data
const regex = /<[^>]*>/gm
const string = `<span>Yup This is a <b>Test</b> Yea <img src="/blabla.png" /> Its Ok?</span>`

// Pattern Grab
const { data, positions } = patternGrab({ regex, string })


// The HTML tag strings are grabbed.
data === [
  "<span>",
  "Yup This is a ",
  "<b>",
  "Test",
  "</b>",
  " Yea ",
  '<img src="/blabla.png" />',
  " Its Ok?",
  "</span>",
];

// Actually matched elements position are grabbed.
positions === [0, 2, 4, 6, 8]

// It is easy to handle because it is placed with other strings.
data.forEach((element, index) => {
  if(positions.includes(element)){
    // HTML Tag
  } else {
    // Plain text
  }
})
```

<br />

## 📄 License

MIT Licensed.

