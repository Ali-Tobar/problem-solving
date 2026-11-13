# Problem Solving

A portfolio of programming practice focused on problem solving, clear implementation, and steady progress across JavaScript and TypeScript.

## At a glance

| Repository metric | Current total |
|---|---:|
| JavaScript Codewars solutions | 36 |
| — documented as 8 kyu | 35 |
| — documented as 7 kyu | 1 |
| TypeScript Codewars solutions | 1 |
| Total problem solutions | 37 |
| Codewars account rank / completed kata | Not updated yet |

Counts refer to solutions stored in this repository, not Codewars account statistics. Difficulty labels reflect repository documentation and have not been independently verified. The TypeScript `add` example is for checking the development setup and is not counted as a kata.

## Languages and workflow

| Language | Status | Location | How solutions are run |
|---|---|---|---|
| JavaScript | Active; 36 Codewars solutions | [`JavaScript/Codewars/`](./JavaScript/Codewars/) | Open the problem’s `index.html` in a browser; it loads that folder’s JavaScript solution. |
| TypeScript | Active; 1 Codewars solution | [`TypeScript/`](./TypeScript/) | Install dependencies, compile and type-check with `tsc`, and run tests with Node’s built-in test runner. |

## Browse solutions

- [JavaScript Codewars — 8 kyu (35)](./JavaScript/Codewars/8-kyu/)
- [JavaScript Codewars — 7 kyu (1)](./JavaScript/Codewars/7-kyu/)
- [JavaScript practice](./JavaScript/Practice/) — no practice entries yet.
- [TypeScript Codewars — 8 kyu (1)](./TypeScript/src/codewars/8-kyu/)
- [TypeScript project](./TypeScript/) — independent source and test setup.

## JavaScript solutions

### Codewars — 7 kyu

| # | Kata |
|---:|---|
| 01 | [Vowel Count](./JavaScript/Codewars/7-kyu/01-%20Vowel%20Count/) |

### Codewars — 8 kyu

| # | Kata |
|---:|---|
| 01 | [Even or Odd](./JavaScript/Codewars/8-kyu/01-%20Even%20Odd/) |
| 02 | [Sum of Positives](./JavaScript/Codewars/8-kyu/02-%20Sum%20Of%20Positives/) |
| 03 | [Sum Without the Highest and Lowest Number](./JavaScript/Codewars/8-kyu/03-%20Sum-Without-The-Highest-And-The-Lowest-Number/) |
| 04 | [String Repeat](./JavaScript/Codewars/8-kyu/04-%20String-repeat/) |
| 05 | [Convert Number to Reversed Array](./JavaScript/Codewars/8-kyu/05-%20Convert-number-to-reversed-array/) |
| 06 | [Counting Sheep](./JavaScript/Codewars/8-kyu/06-%20Counting%20sheep/) |
| 07 | [Get Opposite](./JavaScript/Codewars/8-kyu/07-%20Get%20opposite/) |
| 08 | [Returning Negative](./JavaScript/Codewars/8-kyu/08-%20Returning%20negative/) |
| 09 | [Jenny's Secret Message](./JavaScript/Codewars/8-kyu/09-%20Jenny%27s%20secret/) |
| 10 | [A Needle in the Haystack](./JavaScript/Codewars/8-kyu/10-%20A%20Needle%20In%20The%20HayStack/) |
| 11 | [Count Positives and Sum Negatives](./JavaScript/Codewars/8-kyu/11-%20Count-of-positives-sum-of-negatives/) |
| 12 | [Double Char](./JavaScript/Codewars/8-kyu/12-%20Double%20Char/) |
| 13 | [Basic Mathematical Operations](./JavaScript/Codewars/8-kyu/13-basic-mathematical-operations/) |
| 14 | [To Square(root) or Not to Square(root)](./JavaScript/Codewars/8-kyu/14-%20To-Square-Root-Or-Not-To-Square-Root/) |
| 15 | [Count by X](./JavaScript/Codewars/8-kyu/15-%20Count%20By%20X/) |
| 16 | [Remove String Spaces](./JavaScript/Codewars/8-kyu/16-%20Remove-String-Spaces/) |
| 17 | [Invert Values](./JavaScript/Codewars/8-kyu/17-%20Invert-Values/) |
| 18 | [Convert Boolean Values to 'Yes' or 'No'](./JavaScript/Codewars/8-kyu/18-%20Convert-boolean-values-to-strings-%27Yes%27-or-%27No%27/) |
| 19 | [Reversing Words in a String](./JavaScript/Codewars/8-kyu/19-%20Reversing-Words-in-a-String/) |
| 20 | [Keep Hydrated](./JavaScript/Codewars/8-kyu/20-%20Keep%20Hydrated/) |
| 21 | [Convert a Number to a String](./JavaScript/Codewars/8-kyu/21-%20Convert%20a%20Number%20to%20a%20String/) |
| 22 | [Calculate Average](./JavaScript/Codewars/8-kyu/22-%20Calculate%20average/) |
| 23 | [Convert a String to a Number](./JavaScript/Codewars/8-kyu/23-%20Convert%20a%20String%20to%20a%20Number/) |
| 24 | [Count the Monkeys](./JavaScript/Codewars/8-kyu/24-%20Count%20The%20Monkeys/) |
| 25 | [Welcome](./JavaScript/Codewars/8-kyu/25-%20Welcome/) |
| 26 | [Sentence Smash](./JavaScript/Codewars/8-kyu/26-%20Sentence%20Smash/) |
| 27 | [Switch It Up](./JavaScript/Codewars/8-kyu/27-%20Switch%20It%20Up/) |
| 28 | [Do I Get a Bonus?](./JavaScript/Codewars/8-kyu/28-%20Do%20I%20Get%20A%20Bonus/) |
| 29 | [Remove an Exclamation Mark from the End of a String](./JavaScript/Codewars/8-kyu/29-%20Exclamation%20marks/) |
| 30 | [Are You Playing Banjo?](./JavaScript/Codewars/8-kyu/30-%20Are%20You%20Playing%20Banjo/) |
| 31 | [Removing Elements](./JavaScript/Codewars/8-kyu/31-%20Removing%20Elements/) |
| 32 | [Unfinished Loop — Bug Fixing #1](./JavaScript/Codewars/8-kyu/32-%20Unfinished%20Loop/) |
| 33 | [Transportation on Vacation](./JavaScript/Codewars/8-kyu/33-%20Transportation%20On%20Vacation/) |
| 34 | [Exclusive OR (XOR) Logical Operator](./JavaScript/Codewars/8-kyu/34-%20Exclusive%20Xor%20Operator/) |
| 35 | [Find the First Non-Consecutive Number](./JavaScript/Codewars/8-kyu/35-%20Find%20the%20first%20non%20consecutive%20number/) |

## TypeScript setup

TypeScript is maintained as a separate Node.js project under `TypeScript/`; it does not change the HTML + JavaScript workflow. Source files live in `src/`, tests live in `tests/`, and compiled output goes to the ignored `dist/` directory.

From the repository root, run:

```sh
cd TypeScript
npm install
npm run build      # compile source and tests
npm run typecheck  # strict type check without output
npm test           # build, then run all compiled tests recursively
```

The sample under `src/practice/` verifies the setup only. It is not a Codewars solution.

### Codewars solutions

| # | Kata | Difficulty | Solution | Tests |
|---:|---|---|---|---|
| 01 | Even or Odd | 8 kyu | [Source](./TypeScript/src/codewars/8-kyu/even-or-odd.ts) | [Tests](./TypeScript/tests/codewars/8-kyu/even-or-odd.test.ts) |

## Adding a solution

1. Create a consistently named problem folder under the matching JavaScript kyu directory, with an `index.html` and JavaScript file.
2. Test the solution and confirm the HTML page references the correct script file.
3. Add the kata to the appropriate table above using a link to the actual folder, then update the repository counts.
4. Review and publish only the intended changes:

   ```sh
   git status
   git add "path/to/problem" README.md
   git commit -m "Add kata name solution"
   git push
   ```

For TypeScript, add the solution under `TypeScript/src/codewars/<level>/` and a matching test under `TypeScript/tests/codewars/<level>/`. Run `npm run typecheck` and `npm test` from `TypeScript/` before committing.

## Repository layout

```text
problem-solving/
├── JavaScript/
│   ├── Codewars/
│   │   ├── 7-kyu/  # 1 solution
│   │   └── 8-kyu/  # 35 solutions
│   └── Practice/   # ready for future practice
├── TypeScript/
│   ├── src/
│   │   ├── codewars/8-kyu/  # Even or Odd
│   │   └── practice/       # setup example
│   ├── tests/
│   │   ├── codewars/8-kyu/  # Even or Odd tests
│   │   └── practice/       # setup tests
│   ├── package.json
│   └── tsconfig.json
└── README.md
```
