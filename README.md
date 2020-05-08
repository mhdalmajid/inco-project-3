# workshop express.js

#### 1- Setup work environment ( **Optional** )

- initial npm .
- Global vs local installation
- devDependency vs Dependency
- setup eslint and prettier for linting and formatting our code.
- nodemon for restart the server on change.
- use commonjs (import and export instead of Required ) .
  - node version **14**
  - or installing **esm** package
  - other options
- vscode and terminal ( discussion and Tips).
- Extra (not included in workshop):
  - ~~using **Git** version-control system.~~
  - ~~diagram~~
  - ~~sequence diagram~~
  - ~~README.MD~~
  - other suggestion ?

#### 2- setup project

- packages.
- folders, we will use ( Model View Controller ) **MVC** is an application design model.

#### 3- Coding & explanation

- express server.
- using Middleware
- Set view engine
- First Router
- Post/Get
- Request data
- Post vs Get
- Response
- Router vs POST/GET
- handle Error
- Logger

#### 4-MySql Database and mysql.js

- Initial database from mysqljs.
- create DB.
- create Table.

#### 5- View engine

- form page to create new schedule `form.view.pug` .
- index page to display schedules `index.view.pug` .

#### 6 - Routers

- "/form", `form.route.js` display (form page) ( Get request)
- "/create" , `create.route.js` to handle request coming from (form page) (Post request).
- "/displayAll", `displayAll.route.js` (Get request).

### command Lines

initial npm, create package.json file

```bash
npm init
```

### setup eslint and prettier for linting and formatting our code

install eslint and prettier

```bash
npm i eslint
```

eslint initial (answer questions) this will create `.eslintrc.json` file and install required packages

```bash
 eslint --init
```

or install packages manually and create `.eslintrc.json` manually, you will find the file in repo.

```bash
npm i eslint prettier eslint-plugin-prettier eslint-plugin-import eslint-config-prettier eslint-config-airbnb-base
```

#### install nodemon for restart the server on change

install globally

```bash
npm i nodemon -g
```

install locally

```bash
npm i nodemon -D
```

installing **esm** package

```bash
npm i esm
```

install dotenv for `.env` file

```bash
npm i dotenv -D
```

#### install express framework

```bash
npm i express
```

set template engine : pug, ejs , express-handlebars or other options

```js
app.set('view engine', 'yourSelectedTemplate')
```

set view directory

```js
app.set('views', './yourcustomname')
```
