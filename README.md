# NodeJS Mastery

## RESTful API

A RESTful API that listens on a PORT and accepts incoming HTTP requests for POST,
GET, PUT, DELETE and HEAD

Passing env variables to node on execute:
`env NODE_ENV=production node index.js`

Create an SSL cert and key using OpenSSL:
`openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem`

```sh
env NODE_DEBUG=server node index.js
```

### Debugging

```sh
node inspect index-debug.js # Run file in node, stopping on debugger statements.
debug> # debugger prompt
cont # Step through debug statements
repl # Drop into REPL within debugger
ctrl+C; # return to debugger
```
