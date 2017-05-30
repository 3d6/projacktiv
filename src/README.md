For the original notes from @angular/cli see below.

The following commands were executed to generate the project and it's components:

```bash
$ npm install -g @angular/cli
$ ng new --style less --routing angular4-example
$ cd angular4-example
$ ng g module shared
$ ng g service shared/api --module=shared
$ ng g module field --routing=true
$ ng g class field/field
$ ng g service field/field --module=field
$ ng g component field/field --module=field
$ ng g component field/field-list --module=field
$ ng g component field/field-detail --module=field
$ npm install --save bootstrap
$ npm install --save jquery
```

For running the app use:

```bash
$ ng serve
```

# FieldmanagementAngular4

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Pug

Eine Sache habe ich nicht mehr geschafft: Was ist mit Pug (Jade)?

Das wird noch nicht nativ unterstuetzt, will das Angular-Team aber noch einbauen so wie es heute mit Less schon ist.
Bis dahin gibt es aber einen Workaround, der maximal wenig invasiv ist:

Ihr oeffnet zweite Konsole (neben der, in der „ng serve“ schon rennt), und macht:

$ npm install -g pug pug-cli
$ cd fieldmanagement-angular4
$ pug src --watch --pretty

Dann laeuft der Watcher und macht aus jeder .pug-Datei eine entsprechende .html, im selben Ordner wie die Pug.
