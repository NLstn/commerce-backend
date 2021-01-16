const mongoose = require('mongoose');
require('dotenv').config();

const app = require('./src/app');

const PORT = process.env.PORT || 5001;
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || 'mongodb://localhost/commerce';

console.log(`Trying to connect to database @ ${MONGO_CONNECTION_STRING}`);

mongoose.connect(MONGO_CONNECTION_STRING, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,
}).then(() => {
    console.log('Connection to database successful');
}).catch((err) => {
    console.error.bind(err, 'error');
});

app.listen(PORT, () => {
    console.log(`Started listening on ${PORT}`);
});
