const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/morada_db';

const main = async () => {
    await mongoose.connect(url);
    console.log('Connection succes with mongo');
}
main().catch(error => console.log('error connecting with mongo', error));

