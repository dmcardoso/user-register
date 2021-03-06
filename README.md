<h1 align="center">Welcome to User register 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> Simple user register form

## About

This application is built using **`Node.js`** + **`Typescript`** and **`Postgres`** for the backend and **`React.JS`** + **`Typescript`** for the frontend.

## API Docs

[Postman](https://documenter.getpostman.com/view/5725955/SztK1QQ4?version=latest)

[Swagger](https://app.swaggerhub.com/apis-docs/dmcardoso/UserRegister/1.0.0)

## Install

### Frontend

```sh
cd frontend

yarn install
```

### Backend

```sh
cd backend

yarn install

yarn typeorm migration:run
```

## Configuration

Create a `.env` file in backend folder and **copy/paste** the content of the file `.env.example` in the same folder, change what is necessary to connect into your database and configure a random string on `APP_SECRET` variable.

## Usage

### Frontend

```sh
yarn start
```
### Backend

```sh
yarn dev:server
```

## Author

👤 **Daniel Moreira Cardoso**

* Website: https://github.com/dmcardoso
* Github: [@dmcardoso](https://github.com/dmcardoso)
* LinkedIn: [@dmcardoso](https://linkedin.com/in/dmcardoso)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_