# preact-bootstrap-template

This template project uses [Preact](https://preactjs.com/) and [Bootstrap 5](https://getbootstrap.com/) and has the following features:

- `preact-cli` as base template
- `bootstrap 5` without plugins or extension (I mean pure bootstrap css)
- `purgecss` to purge unused css (usefull to size down bootstra.css file)

## Get started
First clone this repo (replace myapp with the name of your app):

``` bash
git clone https://github.com/aletome/preact-bootstrap-template.git myapp
cd myapp
```

If you don't want to keep all history of this project, delete .git hidden folder and init your new repo:

``` bash
git init
```

Finally install all dependencies:

``` bash
npm install
```

That's all! You are ready to go!

## CLI Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8085
npm run dev

# build for production with minification and purge of unused css
npm run build

# test the production build locally
npm run serve

# run tests with jest and enzyme
npm run test

# purge css from build folder (it is automatically called from build command)
npm run purgecss
```
