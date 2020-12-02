## Pre-reqs

1. MongoDB Atlas connection

- fill in the following details in a .env file:

```
OMDB_API_KEY=''
ATLAS_USER=''
ATLAS_PWD=''
ATLAS_CLUSTER=''
ATLAS_DB=''
```

In Atlas, when you create a cluster and try to connect to it, you will be presented with a link resembling the one below. Use this as reference to fill in the environment variables
`mongodb+srv://<ATLAS_USER>:<ATLAS_PWD>@<ATLAS_CLUSTER>/<ATLAS_DB>?retryWrites=true&w=majority`

## Live app:

http://moviedb-alex-demo.herokuapp.com

## Build & Start

### Install dependencies

`yarn install`

### Build

`yarn build`

### Start

`yarn start`

To start in watch mode, use:

`yarn start:dev`

## Naive tests (cURL)

### Movies

`GET /movies`

```
curl http://<HOST>:<PORT>/api/v1/movies
```

ex:

```
curl http://localhost:7000/api/v1/movies
```

To format the output, use:

```
curl http://<HOST>:<PORT>/api/v1/movies | node -e "console.log( JSON.stringify( JSON.parse(require('fs').readFileSync(0) ), 0, 2 ))"
```

ex:

```
curl http://localhost:7000/api/v1/movies | node -e "console.log( JSON.stringify( JSON.parse(require('fs').readFileSync(0) ), 0, 2 ))"
```

`POST /movies`

- `IMDb` is mandatory.
- `IMDb` format is usually _ttxxxxxx_ (i.e. tt10048342)
- All other properties are optional and will be fetched from http://www.omdbapi.com/

```
curl -X POST -H 'Content-Type: application/json' -d '{
  "movie":{
    "IMDb": "",
    "Title": "",
    "Plot": "",
    "Type": "",
    "Genre: ""
  }
}' http://<HOST>:<PORT>/api/v1/movies
```

ex:

```
curl -X POST -H 'Content-Type: application/json' -d '{
  "movie":{
    "IMDb": "tt1235",
    "Title": "Die Hard 5",
    "Plot": "hard to kill 5",
    "Type": "movie",
    "Genre: "Action"
  }
}' http://localhost:7000/api/v1/movies
```

### Comments

`GET /comments`

```
curl http://<HOST>:<PORT>/api/v1/comments
```

ex:

```
curl http://localhost:7000/api/v1/comments
```

To format the output, use:

```
curl http://<HOST>:<PORT>/api/v1/comments | node -e "console.log( JSON.stringify( JSON.parse(require('fs').readFileSync(0) ), 0, 2 ))"
```

ex:

```
curl http://localhost:7000/api/v1/comments | node -e "console.log( JSON.stringify( JSON.parse(require('fs').readFileSync(0) ), 0, 2 ))"
```

`POST /comments`

```
curl -X POST -H 'Content-Type: application/json' -d '{
  "comment":{
    "author": "",
    "context": ""
  }
}' http://<HOST>:<PORT>/api/v1/comments
```

ex:

```
curl -X POST -H 'Content-Type: application/json' -d '{
  "comment":{
    "author": "Alex",
    "context": "some comment"
  }
}' http://localhost:7000/api/v1/comments
```

## Next steps

- add FILTERING / SORTING / PAGING
- role base Authorization
- add SSL/TLS layer
