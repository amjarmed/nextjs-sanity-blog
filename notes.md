# Test the ESLint Rule Across Your Project

install as a dev dependency:

```bash

pnpm install eslint --save-dev

```

Verify .eslintrc.json: Ensure that your .eslintrc.json file includes the following rules:

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "next/typescript"
  ],
  "plugins": ["react", "@typescript-eslint"],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "@typescript-eslint/no-unused-vars": ["error"]
  },
  "env": {
    "browser": true,
    "es6": true
  }
}
```

Create an ESLint script in package.json: Add an ESLint script to your package.json if it doesn’t exist already.
This will allow you to run ESLint on all .js, .jsx, .ts, and .tsx files in your project.

```json
{
  "scripts": {
    "lint": "eslint --ext .js,.jsx,.ts,.tsx ./"
  }
}
```

Run ESLint: To test all your project files against the semi rule, simply run the linting script:

```bahs
pnpm run lint

```

## Fix Violations Automatically (Optional)

If you'd like ESLint to automatically fix the issues, including semicolons, you can run it with the --fix flag:

```bash
pnpm run lint -- --fix

```
