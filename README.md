# Create React App - Shopping Cart 🦃

# run:
### `npm install` 🦉
### `npm start` ⛷

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `npm run build` 🧮

> Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

---
### Deployment Process 
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
#### React Frontend with a Backend API

> seperate backend and frontend

#### Build and deploy frontend on surge
```go
touch .env.development
REACT_APP_API_URL=http://localhost:PORT#
```
```go
touch .env.production
REACT_APP_API_URL=http://coolbackend.herokuapp.com
```
```js
let response = await fetch(`${process.env.REACT_APP_API_URL}/route`)
```
> when you run the start script it will rebuild...hopefully


---
#### Deploy backend to heroku

`heroku apps:create app-name`

`heroku all the same steps`

> test with *httpie* when deployed




