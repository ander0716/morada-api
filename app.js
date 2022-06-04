const express = require('express');
const app = express();
const mongo = require('./connection/mongoconn');
app.use(express.json());
app.use(express.urlencoded({ extended: false }))//resuelve caracteres especiales en las urls
const port = 3001;

const usersRoutes = require('./routes/users');
const propertiesRoutes = require('./routes/properties');
app.use('/users', usersRoutes);
app.use('/properties', propertiesRoutes);

app.listen(port, () => {
    console.log('server running');
});