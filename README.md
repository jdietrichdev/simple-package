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
    - `tsconfig.json` - General build configuration (rules, files, etc)
    - `config/tsconfig.cjs.json` - Configuration for building package for CommonJS modules
    - `config/tsconfig.esm.json` - Configuration for building package for ECMAScript modules
1. ESLint configuration using the `config/.eslintrc` file
1. Unit test configuration
    - Update `config/.mocharc.json` to update configuration for Mocha
    - Remove `config/.mochrc.json` and configure another testing framework
1. Release configuration using `release.config.js`
1. Commitlint configuration (used for validating commit messages) using `config/commitlint.config.js`
1. [Husky](https://typicode.github.io/husky/#/) configuration

#### Create NPM Token

In order for the release step to run successfully, you must create a token in NPM that will
allow you to publish the package as part of your release pipeline.

1. If you haven't already, create an [NPM account](https://www.npmjs.com/signup)
1. Ensure that 2FA is only required for authentication
1. Create a new `Automation` access token and copy the value of the token
1. Create a new Actions secret in your repo named `NPM_TOKEN` that contains the token you copied from NPM

#### GitHub Configuration

------

There are a number of configurations within your GitHub project that are needed to help facilitate the secure release of your package

##### Public Repositories

With a public reposoitory, there is the possibility that you could have unexpected contributors making changes to your project.
Therefore, there are a number of things that you can configure within the project to help keep your package secure and protected:

- **Branch Protections** - You should enable branch protections on your `main` branch to ensure that users cannot push directly to the branch triggering a release
- **Environment Configuration** - You can configure an environment for your project to help restrict a workflow to only run under certain conditions (branch = `main)
- **Semantic Release Updates** - With branch protections enabled, semantic-release will be unable to push updates to your main branch by default, there are two options for this
  - Have semantic-release push updates to a branch which you can then merge into main after the pipeline has completed successfully
  - Create a personal access token with admin rights to your project and add the token as a secret in your environment configuration, preventing that token from being used in other workflows

You can also choose to not turn on additional protections, which will prevent semantic-release from having issues with pushing updates as part of the release process,
but that is not recommended as it leaves you open to malicious users.

##### Private Repositories

With private repositories, there is less risk of unexpected users making changes as all contributors have to be explicitly defined.
That being said, adding protections defined in the `Public Repositories` section will help increase the security of your repository.

------

Once these steps have been completed, you should be able to run the release workflow and deploy your package to NPM successfully

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
