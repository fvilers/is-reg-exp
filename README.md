# @fvilers/is-reg-exp

A TypeScript type guard that validates if the given value is a RegExp

## Installation

```
npm install @fvilers/is-reg-exp
```

or

```
yarn add @fvilers/is-reg-exp
```

## Usage

```ts
import isRegExp from "@fvilers/is-reg-exp";

const variable: any = /This is a regexp/;

if (isRegExp(variable)) {
  // From here, variable is strongly typed as a string
  console.log(
    "Variable is a reg exp that",
    variable.test("This is a regexp") ? "matches" : "does not  match",
    "the provided string"
  );
} else {
  console.log("Variable is not a reg exp");
}
```

It will output:

```
Variable is a reg exp that matches the provided string
```
