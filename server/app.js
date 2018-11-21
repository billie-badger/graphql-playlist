const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Allow cross-origin requrests
app.use(cors());

// Connect to mlab
// Make sure to replace db strongs with user info
mongoose.connect('mongodb://will:will1234@ds113063.mlab.com:13063/gql-badger');
mongoose.connection.once('open', () => {
  console.log('Connected to DB');
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Now listening to requests on port 4000')
})