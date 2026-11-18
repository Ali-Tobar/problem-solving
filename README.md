# Problem Solving

A collection of programming practice and Codewars kata solutions, primarily in JavaScript, with a separate TypeScript project.

## Repository at a glance

| Metric | Count |
|---|---:|
| JavaScript Codewars solutions | 38 |
| — 8 kyu | 35 |
| — 7 kyu | 3 |
| TypeScript Codewars solutions | 1 |
| **Total Codewars solutions** | **39** |

These figures count solutions stored in this repository, not the total kata completed on Codewars. The TypeScript practice example is not included in the totals.

## Latest JavaScript kata

| # | Kata | Difficulty | Solution folder |
|---:|---|---|---|
| 02 | [Highest and Lowest](./JavaScript/Codewars/7-kyu/02-%20Highest%20and%20Lowest/) | 7 kyu | [`script.js`](./JavaScript/Codewars/7-kyu/02-%20Highest%20and%20Lowest/script.js) |
| 03 | [Square Every Digit](./JavaScript/Codewars/7-kyu/03-%20Square%20Every%20Digit/) | 7 kyu | [`script.js`](./JavaScript/Codewars/7-kyu/03-%20Square%20Every%20Digit/script.js) |

## Browse solutions

- [JavaScript Codewars — 7 kyu (3 solutions)](./JavaScript/Codewars/7-kyu/)
- [JavaScript Codewars — 8 kyu (35 solutions)](./JavaScript/Codewars/8-kyu/)
- [TypeScript Codewars — 8 kyu (1 solution)](./TypeScript/src/codewars/8-kyu/)
- [JavaScript practice](./JavaScript/Practice/)
- [TypeScript project](./TypeScript/)

## Running the solutions

JavaScript kata folders contain an `index.html` page and a JavaScript source file. Open the page in a browser to view the solution. Source files are named `script.js` or `main.js`, depending on the kata.

The TypeScript project is independent of the JavaScript exercises. From the repository root, run:

```sh
cd TypeScript
npm install
npm run build      # compile source and tests
npm run typecheck  # check types without emitting files
npm test           # build, then run the compiled tests
```

## Repository layout

```text
problem-solving/
├── JavaScript/
│   ├── Codewars/
│   │   ├── 7-kyu/  # 3 solutions
│   │   └── 8-kyu/  # 35 solutions
│   └── Practice/
├── TypeScript/
│   ├── src/codewars/8-kyu/  # 1 Codewars solution
│   ├── src/practice/        # setup example
│   └── tests/
└── README.md
```
