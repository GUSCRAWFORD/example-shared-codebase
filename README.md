# Shared Code-base Supporting More Than One Project
## Set-up Example
 1. Clone
 2. In a command-prompt or terminal run:
```
cd ex
yarn install
yarn run install-children
```

### Run Angular Example
The angular project is a fairly out-of-the box result of `ng create ex-angular` CLI.
In a command-prompt or terminal, run:
```
cd ex-angular
ng serve --open
```

### Run React Example
The react project is a fairly out-of-the box result of `create-react-app ex-react`.
In a command-prompt or terminal, run:
```
cd ex-react
yarn run build-ex-universal #See Appendix 1.1 if you use npm
yarn start
```
Running `build-ex-universal` script will compile the TypeScript in ex-universal and output the js in a location importable from the react project without monkeying with the ex-react's webpack configs

## What Concepts are Proofed?
* Universal TypeScript service declaration
  * Bare-bones solutions for importing
  * into an Angular application as a singleton
  * into a React application a Component property

# Appendix
1. I'd reccommend yarn for speed, but you can substitute npm (be sure to run `npm i` in the child project folders)
  1. Run `npm run build-for-ex-react` from ex-universal once before running react project