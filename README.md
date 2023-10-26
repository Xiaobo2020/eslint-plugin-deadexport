# eslint-plugin-deadexport

Find out the dead export variables

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-deadexport`:

```sh
npm install eslint-plugin-deadexport --save-dev
```

## Usage

Add `deadexport` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["deadexport"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "deadexport/no-unused-exported-vars": "error"
  }
}
```

## Rules

<!-- begin auto-generated rules list -->

TODO: Run eslint-doc-generator to generate the rules list.

<!-- end auto-generated rules list -->
