const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const math = require('@missao/math')
const utils = require('@missao/utils');
const health = require('./api/health/router');

const run = () => {
    console.log(`Hello ${process.env.name},\n Welcome to Bazel !`)
    console.log(`secrets: ${process.env.secret}`)
    console.log(`add: ${math.add(1,2)}`)
    console.log(`sub: ${math.subtract(1,2)}`)
    console.log(`concat: ${utils.concat(['a', 'b', 'c', 'd', 'e'])}`)
}

const app = express();
const port = process.env.port
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use((req, res, next) => { res.type('json'); next(); });

app.use(health.path, health.router);


run();

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})