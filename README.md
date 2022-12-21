# eslint-plugin-function-argument-newline

Enforce line breaks between arguments of a function declaration/call or arrow function

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-function-argument-newline`:

```sh
npm install eslint-plugin-function-argument-newline --save-dev
```

## Usage

Add `function-argument-newline` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "function-argument-newline"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "function-argument-newline/function-argument-newline": "error"
    }
}
```

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


