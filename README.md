<div align="center">

# Problem Solving

**A growing collection of Codewars kata solutions and programming practice.**

JavaScript · TypeScript · Problem solving fundamentals

</div>

---

## Overview

This repository documents my ongoing practice with programming challenges. It contains browser-based JavaScript solutions organized by Codewars difficulty, along with a small TypeScript project that demonstrates a typed solution and a test workflow.

The focus is on keeping solutions easy to find, inspect, and run. Counts below describe the contents of this repository; they are not Codewars account statistics.

## Repository snapshot

| Language | 7 kyu | 8 kyu | Total |
|---|---:|---:|---:|
| JavaScript | 3 | 35 | 38 |
| TypeScript | — | 1 | 1 |
| **All solutions** | **3** | **36** | **39** |

## Featured: latest JavaScript solutions

| Kata | What it practices | Difficulty | Source |
|---|---|---:|---|
| [Highest and Lowest](./JavaScript/Codewars/7-kyu/02-%20Highest%20and%20Lowest/) | Parsing numeric input and finding minimum/maximum values | 7 kyu | [`script.js`](./JavaScript/Codewars/7-kyu/02-%20Highest%20and%20Lowest/script.js) |
| [Square Every Digit](./JavaScript/Codewars/7-kyu/03-%20Square%20Every%20Digit/) | Converting and transforming digits, then composing a result | 7 kyu | [`script.js`](./JavaScript/Codewars/7-kyu/03-%20Square%20Every%20Digit/script.js) |

## Solution catalogue

- [JavaScript — Codewars 7 kyu](./JavaScript/Codewars/7-kyu/) · 3 solutions
- [JavaScript — Codewars 8 kyu](./JavaScript/Codewars/8-kyu/) · 35 solutions
- [TypeScript — Codewars 8 kyu](./TypeScript/src/codewars/8-kyu/) · 1 solution
- [JavaScript practice](./JavaScript/Practice/)

Each JavaScript kata is stored in its own numbered folder, generally with an `index.html` page and a JavaScript source file. TypeScript source, tests, and project configuration are kept separately under [`TypeScript/`](./TypeScript/).

## Running the TypeScript project

Requirements: Node.js 20.13 or newer and npm.

```bash
cd TypeScript
npm install
npm run build      # Compile source and tests
npm run typecheck  # Run TypeScript checks without emitting files
npm test           # Build, then run tests with Node's test runner
```

The TypeScript kata source is [`even-or-odd.ts`](./TypeScript/src/codewars/8-kyu/even-or-odd.ts), with its test at [`even-or-odd.test.ts`](./TypeScript/tests/codewars/8-kyu/even-or-odd.test.ts). The separate example under `TypeScript/src/practice/` is for setup practice and is not counted as a Codewars solution.

## Repository structure

```text
problem-solving/
├── JavaScript/
│   ├── Codewars/
│   │   ├── 7-kyu/                 # 3 kata solutions
│   │   └── 8-kyu/                 # 35 kata solutions
│   └── Practice/
├── TypeScript/
│   ├── src/codewars/8-kyu/        # Codewars solution
│   ├── src/practice/              # Setup example
│   └── tests/                     # Node.js test files
└── README.md
```

## Notes

- Kata difficulty labels follow the folder organization in this repository.
- JavaScript solutions use the existing HTML-and-script format and can be opened in a browser.
- This repository is a work in progress; new solutions and improvements will be added over time.
