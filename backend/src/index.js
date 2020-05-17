const express = require('express');
const bodyParser = require('body-parser');
const drawerRoutes = require('./routes/draw.routes');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
    cors({
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    })
);
app.use(drawerRoutes);

require('./controllers/person.controller')(app);

app.listen(3002);