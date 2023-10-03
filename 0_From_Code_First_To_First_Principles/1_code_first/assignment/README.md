# Code-First

## How to run the project? (WIP)

- Install the npm dependencies from the terminal:

```
npm install
```

- Replace the contents of the .env file with the .env.example file's contents.

- Have Docker installed and running in the background. If you do not have Docker installed, you can check how to do so in their [official docs](https://docs.docker.com/get-docker/).

- In a new terminal tab, run the following terminal command for starting the Postgres database Docker container, and leave that tab open:

```bash
npm run docker:database-start

# Run this other command from a different terminal once you want to stop the database container
npm run docker:database-stop
```

## Requirements:

### Web Server

Use Express.js for setting up a basic server, and any database (relational or noSQL), and optionally use an ORM, such as Prisma.

### Database Structure

User model:

- id (auto incremented)
- email (unique)
- username (unique)
- firstName
- lastName
- password (this should be assigned at random)

All fields are required


### Endpoints

#### Create User — POST /users/new { email, username, firstName, lastName }

Accepts a POST to /users/new { email, username, firstName, lastName }

If the username was taken, return a 409 status code & JSON that looks like

```js
{ error: 'UsernameAlreadyTaken', data: undefined, success: false }
```

If the email was used, return a 409 status code & JSON that looks like

```js
{ error: 'EmailAlreadyInUse', data: undefined, success: false }
```

If there was a validation error, return a 400 status code & JSON that looks like

```js
{ error: 'ValidationError', data: undefined, success: false }
```

Otherwise, return a 201 status code & JSON that looks like

```js
{ error: undefined, data: { id, email, username, firstName, lastName }, success: true }
```

#### Edit User — POST /users/edit/:userId { email, username, firstName, lastName }

Accepts a POST to /users/edit/:userId { email, username, firstName, lastName }

If the userId was not found, return a 404 status code & JSON that looks like

```js
{ error: 'UserNotFound', data: undefined, success: false }
```

If the username was taken, return a 409 status code & JSON that looks like

```js
{ error: 'UsernameAlreadyTaken', data: undefined, success: false }
```

If the email was used, return a 409 status code & JSON that looks like

```js
{ error: 'EmailAlreadyInUse', data: undefined, success: false }
```

If there was a validation error, return a 400 status code & JSON that looks like

```js
{ error: 'ValidationError', data: undefined, success: false }
```

Otherwise, return a 200 status code & JSON that looks like

```js
{ error: undefined, data: { id, email, username, firstName, lastName }, success: true }
```

#### Get User — GET /users?email=someuser@gmail.com

Accepts a GET to /users?email=someuser@gmail.com

If the userId was not found, return a 404 status code & JSON that looks like

```js
{ error: ''UserNotFound', data: undefined, success: false }
```

Otherwise, return a 200 status code & JSON that looks like

```js
{ error: undefined, data: { id, email, username, firstName, lastName }, success: true } 
```



> This is where you'll write your code-first implementation of the User Story from DDDForum. You can [see the assignment page for more details](https://www.essentialist.dev/products/the-software-essentialist/categories/2153149734/posts/2168948146).
