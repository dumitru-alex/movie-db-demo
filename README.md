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
curl http://localhost:<PORT>/api/movies
```
ex:
```
curl http://localhost:7000/api/movies
```

To format the output, use:

```
curl http://localhost:<PORT>/api/movies | node -e "console.log( JSON.stringify( JSON.parse(require('fs').readFileSync(0) ), 0, 2 ))"
```
ex:
```
curl http://localhost:7000/api/movies | node -e "console.log( JSON.stringify( JSON.parse(require('fs').readFileSync(0) ), 0, 2 ))"
```

`POST /movies`

```
curl -X POST -H 'Content-Type: application/json' -d '{
  "movie":{
    "IMDb": "1235",
    "name": "Die Hard 5",
    "plot": "hard to kill 5",
    "type": "movie"
  }
}' http://localhost:<PORT>/movies
```
ex:
```
curl -X POST -H 'Content-Type: application/json' -d '{
  "movie":{
    "IMDb": "1235",
    "name": "Die Hard 5",
    "plot": "hard to kill 5",
    "type": "movie"
  }
}' http://localhost:7000/movies
```

### Comments

`GET /comments`

```
curl http://localhost:<PORT>/api/comments
```
ex:
```
curl http://localhost:7000/api/comments
```

To format the output, use:

```
curl http://localhost:<PORT>/api/comments | node -e "console.log( JSON.stringify( JSON.parse(require('fs').readFileSync(0) ), 0, 2 ))"
```
ex:
```
curl http://localhost:7000/api/comments | node -e "console.log( JSON.stringify( JSON.parse(require('fs').readFileSync(0) ), 0, 2 ))"
```

`POST /comments`

```
curl -X POST -H 'Content-Type: application/json' -d '{
  "comment":{
    "author": "Alex",
    "context": "some comment"
  }
}' http://localhost:<PORT>/api/comments
```
ex:
```
curl -X POST -H 'Content-Type: application/json' -d '{
  "comment":{
    "author": "Alex",
    "context": "some comment"
  }
}' http://localhost:7000/api/comments
```
