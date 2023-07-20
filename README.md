# 🚀 Incognito Url Maker Backend

This repository contains the backend code for the project. It serves as the server-side implementation of the application, providing API endpoints

## Tech Stack Used

**Server:** Node, Express.js, MongoDB (Mongoose), cors, dotenv.

## Project Structure

app.js: This is the entry point of the application, where the Express app is created and configured. It includes the necessary middleware, API routes, and sets up the MongoDB connection.

Routers/IncognitoRouter.js: This file contains the route handlers for the "Incognito" API.

## Installation

Install my-project with npm

```bash
  git clone https://github.com/JoelDeonDsouza/Incognito_Url_Maker_Backend.git
```

## .env (Added your MongoDB connection string)

```
MONGODB_URL = //! Add your mongodb connection string //
```

## Run Locally

Go to the project directory

```bash
  cd project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

## API Reference

#### Get Request

```http
  GET http://localhost:6000/incognito/:incog
```

#### Get item

```http
  POST http://localhost:6000/incognito/create
```

## Example of Post Request rendering

```
{
    "savedIncog": {
        "masked": "joeldeon",
        "originUrl": "https://www.youtube.com/",
        "_id": "64b8e819a054c840b82689cc",
        "createdAt": "2023-07-20T07:54:01.555Z",
        "updatedAt": "2023-07-20T07:54:01.555Z",
        "__v": 0
    },
    "maskedUrl": "http://localhost:6000/incognito/joeldeon"
}

```
