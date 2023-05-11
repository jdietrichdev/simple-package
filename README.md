# simple-package

Template repsitory for creating a deployable NPM package

## Getting Started

Guide for getting this template repository set up for usage with your own NPM package

### Repo Setup

1. Use this template repository to create a new repository
1. Clone the new repository to your machine
1. Update the name of the package in `package.json` to reflect the name you would like for your library
1. Run `npm install` in the terminal, this will:
    - Install all necessary dependencies
    - Set up Husky hooks to validate commit messages

#### Additional Configuration Updates (optional)

1. Build configuration using the `tsconfig.*.json` files
    - `tsconfig.base.json` - General build configuration (rules, files, etc)
    - `tsconfig.cjs.json` - Configuration for building package for CommonJS modules
    - `tsconfig.esm.json` - Configuration for building package for ECMAScript modules
1. ESLint configuration using the `.eslintrc` and `.prettierrc` files
1. Unit test configuration
    - Update `.mocharc.json` to update configuration for Mocha
    - Remove `.mochrc.json` and configure another testing framework
1. Release configuration using `release.config.js`
1. Commitlint configuration (used for validating commit messages) using `commitlint.config.js`
1. [Husky](https://typicode.github.io/husky/#/) configuration

### Create NPM Token

In order for the release step to run successfully, you must create a token in NPM that will
allow you to publish the package as part of your release pipeline.

1. If you haven't already, create an [NPM account](https://www.npmjs.com/signup)
1. Ensure that 2FA is only required for authentication
1. Create a new `Automation` access token and copy the value of the token
1. Create a new Actions secret in your repo named `NPM_TOKEN` that contains the token you copied from NPM

Once this has been completed, you should be able to run the release workflow and deploy your package to NPM successfully

### Commit Message Formatting

`semantic-release` uses commit messages to determine if a release is necessary when the pipeline is run.
Therefore, the commit messages need to have a specific structure so that the release process can determine if a new release is required.

The formatting of the commit must follow:

```text
<type>(optional scope): summary
```

#### **Type**

Used to determine if a release is necessary, must be one of the following values:

| Type | Description | Release |
|:----:|:-----------:|:-------:|
|**build**|Changes that affect the build system or external dependencies|No Release|
|**chore**|Automated changes to project|No Release|
|**ci**|Changes to CI configuration files and scripts|No Release|
|**docs**|Changes to documentation|No Release|
|**feat**|Implementation of a new feature|Minor/Feature Release|
|**fix**|Changes that fix bugs|Patch/Fix Release|
|**perf**|Changes to improve performance|Major/Breaking Release|
|**refactor**|Code change that does not fix a bug or add a feature|No Release|
|**test**|Adding or updating tests|No Release|

> *[Updates](https://github.com/semantic-release/semantic-release#commit-message-format) can be made to what types trigger releases in `release.config.js`*

#### **Scope** (optional)

Name of the component affected

#### **Summary**

Brief description of the update made
