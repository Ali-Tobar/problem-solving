# Problem Solving

A growing collection of programming problem solutions and notes. JavaScript and TypeScript are maintained in separate environments, with this repository documenting my progress across both languages.

## Progress dashboard

| Metric | Current status |
|---|---:|
| JavaScript problems in this repository | 35 |
| TypeScript Codewars problems in this repository | 0 |
| Total problems in this repository | 35 |
| Codewars completed kata | Not updated yet |
| Current Codewars rank | Not updated yet |

The 35 JavaScript folders are documented in the existing project README history as **8 kyu**; this is repository documentation, not an independent verification of each kata on Codewars. Repository folder counts are separate from Codewars account statistics.

## Languages and execution

| Language | Status | Problems | Location | Execution approach |
|---|---|---:|---|---|
| JavaScript | Active | 35 | [`JavaScript/Codewars/8-kyu/`](./JavaScript/Codewars/8-kyu/) | Each problem retains its HTML page and JavaScript file; open the problem HTML file in a browser. |
| TypeScript | Active environment; no Codewars solutions yet | 0 | [`TypeScript/`](./TypeScript/) | Compile `.ts` source and tests with `tsc`; run compiled tests with Node’s built-in test runner. |

## Navigate by category

- [JavaScript — Codewars — 8 kyu (35 problems)](./JavaScript/Codewars/8-kyu/)
- [JavaScript — Codewars — 7 kyu (empty)](./JavaScript/Codewars/7-kyu/)
- [JavaScript — Practice (empty)](./JavaScript/Practice/)
- [TypeScript environment](./TypeScript/) — independent practice, source, and test setup.

## Repository structure

```text
problem-solving/
├── JavaScript/
│   ├── Codewars/
│   │   ├── 8-kyu/  # 35 problem folders; HTML + JavaScript
│   │   └── 7-kyu/  # currently empty (.gitkeep)
│   └── Practice/   # currently empty (.gitkeep)
├── TypeScript/
│   ├── src/
│   │   ├── practice/add.ts
│   │   └── codewars/7-kyu/.gitkeep
│   ├── tests/
│   │   ├── practice/add.test.ts
│   │   └── codewars/7-kyu/.gitkeep
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   └── tsconfig.json
└── README.md
```

Some JavaScript folders use `main.js` instead of `script.js`; problem 29 keeps its original nested `index/` directory. The index below links to each actual problem folder.

## TypeScript environment

The TypeScript project is independent of the existing HTML + JavaScript exercises. It uses CommonJS modules, strict TypeScript checking, and Node.js 20.13 or newer. TypeScript source and tests compile to the ignored `TypeScript/dist/` directory. Dependencies are installed locally under `TypeScript/`; the JavaScript workflow does not use them.

From the repository root, install the project dependencies and run the available commands:

```sh
cd TypeScript
npm install
npm run build      # compile src/ and tests/ into dist/
npm run typecheck  # check types without emitting files
npm test           # build, then run compiled tests with node --test
```

The example under `src/practice/` and its matching test demonstrate the setup. This is a practice example, not a Codewars solution; TypeScript Codewars problem count remains 0.

## JavaScript problem index

These entries reflect the current folder names and locations. Difficulty is recorded as documented in the existing project materials.

| # | Problem folder / documented name | Difficulty |
|---:|---|---|
| 01 | [01- Even Odd](./JavaScript/Codewars/8-kyu/01-%20Even%20Odd/) | Documented as 8 kyu |
| 02 | [02- Sum Of Positives](./JavaScript/Codewars/8-kyu/02-%20Sum%20Of%20Positives/) | Documented as 8 kyu |
| 03 | [03- Sum-Without-The-Highest-And-The-Lowest-Number](./JavaScript/Codewars/8-kyu/03-%20Sum-Without-The-Highest-And-The-Lowest-Number/) | Documented as 8 kyu |
| 04 | [04- String-repeat](./JavaScript/Codewars/8-kyu/04-%20String-repeat/) | Documented as 8 kyu |
| 05 | [05- Convert-number-to-reversed-array](./JavaScript/Codewars/8-kyu/05-%20Convert-number-to-reversed-array/) | Documented as 8 kyu |
| 06 | [06- Counting sheep](./JavaScript/Codewars/8-kyu/06-%20Counting%20sheep/) | Documented as 8 kyu |
| 07 | [07- Get opposite](./JavaScript/Codewars/8-kyu/07-%20Get%20opposite/) | Documented as 8 kyu |
| 08 | [08- Returning negative](./JavaScript/Codewars/8-kyu/08-%20Returning%20negative/) | Documented as 8 kyu |
| 09 | [09- Jenny's secret](./JavaScript/Codewars/8-kyu/09-%20Jenny%27s%20secret/) | Documented as 8 kyu |
| 10 | [10- A Needle In The HayStack](./JavaScript/Codewars/8-kyu/10-%20A%20Needle%20In%20The%20HayStack/) | Documented as 8 kyu |
| 11 | [11- Count-of-positives-sum-of-negatives](./JavaScript/Codewars/8-kyu/11-%20Count-of-positives-sum-of-negatives/) | Documented as 8 kyu |
| 12 | [12- Double Char](./JavaScript/Codewars/8-kyu/12-%20Double%20Char/) | Documented as 8 kyu |
| 13 | [13-basic-mathematical-operations](./JavaScript/Codewars/8-kyu/13-basic-mathematical-operations/) | Documented as 8 kyu |
| 14 | [14- To-Square-Root-Or-Not-To-Square-Root](./JavaScript/Codewars/8-kyu/14-%20To-Square-Root-Or-Not-To-Square-Root/) | Documented as 8 kyu |
| 15 | [15- Count By X](./JavaScript/Codewars/8-kyu/15-%20Count%20By%20X/) | Documented as 8 kyu |
| 16 | [16- Remove-String-Spaces](./JavaScript/Codewars/8-kyu/16-%20Remove-String-Spaces/) | Documented as 8 kyu |
| 17 | [17- Invert-Values](./JavaScript/Codewars/8-kyu/17-%20Invert-Values/) | Documented as 8 kyu |
| 18 | [18- Convert-boolean-values-to-strings-'Yes'-or-'No'](./JavaScript/Codewars/8-kyu/18-%20Convert-boolean-values-to-strings-%27Yes%27-or-%27No%27/) | Documented as 8 kyu |
| 19 | [19- Reversing-Words-in-a-String](./JavaScript/Codewars/8-kyu/19-%20Reversing-Words-in-a-String/) | Documented as 8 kyu |
| 20 | [20- Keep Hydrated](./JavaScript/Codewars/8-kyu/20-%20Keep%20Hydrated/) | Documented as 8 kyu |
| 21 | [21- Convert a Number to a String](./JavaScript/Codewars/8-kyu/21-%20Convert%20a%20Number%20to%20a%20String/) | Documented as 8 kyu |
| 22 | [22- Calculate average](./JavaScript/Codewars/8-kyu/22-%20Calculate%20average/) | Documented as 8 kyu |
| 23 | [23- Convert a String to a Number](./JavaScript/Codewars/8-kyu/23-%20Convert%20a%20String%20to%20a%20Number/) | Documented as 8 kyu |
| 24 | [24- Count The Monkeys](./JavaScript/Codewars/8-kyu/24-%20Count%20The%20Monkeys/) | Documented as 8 kyu |
| 25 | [25- Welcome](./JavaScript/Codewars/8-kyu/25-%20Welcome/) | Documented as 8 kyu |
| 26 | [26- Sentence Smash](./JavaScript/Codewars/8-kyu/26-%20Sentence%20Smash/) | Documented as 8 kyu |
| 27 | [27- Switch It Up](./JavaScript/Codewars/8-kyu/27-%20Switch%20It%20Up/) | Documented as 8 kyu |
| 28 | [28- Do I Get A Bonus](./JavaScript/Codewars/8-kyu/28-%20Do%20I%20Get%20A%20Bonus/) | Documented as 8 kyu |
| 29 | [29- Exclamation marks](./JavaScript/Codewars/8-kyu/29-%20Exclamation%20marks/) | Documented as 8 kyu |
| 30 | [30- Are You Playing Banjo](./JavaScript/Codewars/8-kyu/30-%20Are%20You%20Playing%20Banjo/) | Documented as 8 kyu |
| 31 | [31- Removing Elements](./JavaScript/Codewars/8-kyu/31-%20Removing%20Elements/) | Documented as 8 kyu |
| 32 | [32- Unfinished Loop](./JavaScript/Codewars/8-kyu/32-%20Unfinished%20Loop/) | Documented as 8 kyu |
| 33 | [33- Transportation On Vacation](./JavaScript/Codewars/8-kyu/33-%20Transportation%20On%20Vacation/) | Documented as 8 kyu |
| 34 | [34- Exclusive Xor Operator](./JavaScript/Codewars/8-kyu/34-%20Exclusive%20Xor%20Operator/) | Documented as 8 kyu |
| 35 | [35- Find the first non consecutive number](./JavaScript/Codewars/8-kyu/35-%20Find%20the%20first%20non%20consecutive%20number/) | Documented as 8 kyu |

## Adding a problem

### JavaScript

1. Create a folder under the appropriate category, such as `JavaScript/Codewars/7-kyu/` for a 7 kyu kata, or `JavaScript/Practice/` for general practice. Keep folder naming consistent with the existing numbered problem folders.
2. Preserve the current HTML + JavaScript approach for JavaScript problems. Include an HTML page and the JavaScript source file, and make sure the page references the correct script path. Existing solutions use either `script.js` or `main.js`; choose a consistent filename for new work.
3. Add the problem to the relevant README index with its actual folder path and documented details. Keep repository counts in the dashboard up to date.

### TypeScript

Create the solution under `TypeScript/src/practice/` or the appropriate Codewars difficulty folder, and add a matching test under `TypeScript/tests/`. From `TypeScript/`, run `npm test` to compile and execute the tests, or use `npm run typecheck` for a no-output type check. Keep TypeScript-specific files and dependencies inside `TypeScript/`, and update the problem index and counts when adding an actual problem. The current example is practice-only and does not count as a Codewars kata.

## Roadmap

- [x] Reorganize the existing JavaScript problems.
- [x] Preserve the original problem files and Git history.
- [x] Build a professional README dashboard.
- [x] Set up an independent TypeScript environment.
- [ ] Start adding TypeScript problem solutions.
- [ ] Expand problem difficulty levels over time.
