# simple-package

Template repsitory for creating a deployable NPM package

## Getting Started

Guide for getting this template repository set up for usage with your own NPM package

### Repo Setup

1. Use this template repository to create a new repository
1. Clone the new repository to your machine
1. Update the name of the package in `package.json` to reflect the name you would like for your library

#### Additional Configuration Updates (optional)

1. Build configuration using the `tsconfig.*.json` files
    - `tsconfig.base.json` - General build configuration (rules, files, etc)
    - `tsconfig.cjs.json` - Configuration for building package for CommonJS modules
    - `tsconfig.esm.json` - Configuration for building package for ECMAScript modules
1. ESLint configuration using the `.eslintrc` and `.prettierrc` files
1. Unit test configuration
    - Update `.mocharc.json` to update configuration for Mocha
    - Remove `.mochrc.json` and configure another testing framework
