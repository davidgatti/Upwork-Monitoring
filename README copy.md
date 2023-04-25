# Set title

Wrtie a description

## How to run Lambda Locally

```sh
npm install
```

And once you have all the modules installed you can run:

```sh
npm run locally
```

## Understanding Our Files

This list explains in details what each file in the project is for, this way you don't have to guess, you can just read the facts.

- `.github`: this folder contains all the files for GitHub to be using to make the page work how we sy it should.
- `.husky`: this folder contains all the git hooks used to do work before committing code.
- `.payloads`: this folder contains files that mimic the payloads coming to a Lambda, use it to test your code.
- `routing`: this folder is optional, and normally contains different chains based on the request that the lambda gets.
- `.editorconfig`: this file tels your editor how it should work with this repo.
- `.env`: this is where all the environment variables go, and are loaded at startup time.
- `.env.example`: this file contains a template of all the env variables needed for the project to run.
- `.eslintrc.json`: this is were all the ESLint rules are located.
- `.gitignore`: is a list of files nad folder to ignore by git.
- `.loader`: is the file used by the `npm run build` to execute the code as if it was being executed within AWS Lambda. It mimics the environment 1:1.
- `buildspec.yml`: this file contains all the instructions for AWS CodeBuild.
- `index.js`: the initial file that is executed by NodeJS
- `package-lock.json`: this is used by NPM to lock all the modules to a fixed version.
- `package.json`: this file is used by NPM to know how to behave and what to install.
- `README.md`: you are reding it.
