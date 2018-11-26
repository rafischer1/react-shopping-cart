## Deployment Process 🛰
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
### React Frontend with a Backend API 🚏

> seperate backend and frontend

#### Build and deploy frontend on surge 🛸
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

#### for production env run:
`npm build`

`cd into the *build* folder`
> now you have static files in the production build so you can __surge.sh__ that
---
### Deploy backend to heroku 🗺

`heroku apps:create app-name`

`heroku all the same steps`

> test with *httpie* when deployed

```js
//CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})
```
