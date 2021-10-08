const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./server/db.js');
const checkMillion = require('./server/checkMillionDollarIdea')


module.exports = app;

// My solution starts here

const PORT = process.env.PORT || 4001;

app.use(cors());


app.use(bodyParser());

const apiRouter = require('./server/api');
const checkMillionDollarIdea = require('./server/checkMillionDollarIdea');

app.param('model', (req, res, next, id) => {
  if (id === 'meetings' && req.method !== 'DELETE') {
    req.body = db.createMeeting();
    req.id = id;
    modelId = id;
    next();
  } else if (id === 'meetings' && req.method === 'DELETE') {
    req.id = id;
    next();
  } else if (id === 'minions' && db.findDataArrayByName(id) !== null && Object.keys(req.body) !== undefined) { 
    req.id = id; 
    modelId = id;
    next();
  } else if (id === 'ideas' && db.findDataArrayByName(id) !== null && Object.keys(req.body) !== undefined)  {
    req.id = id;
    modelId = id;
    next();
  } else {
    res.status(404).send();
  }

});

app.param('id', (req, res, next, id) => {
  const numberId = Number(id);
  const result = db.getFromDatabaseById(modelId, id);
  if(typeof numberId === 'number' && result) {  
    req.id2 = id;
    next();
  } else {
    res.status(404).send();
  }
})

app.get('/api/:model', (req, res, next) => {
  const getAllModels = db.getAllFromDatabase(req.id);
  res.status(200).send(getAllModels);
})

app.get('/api/:model/:id', (req, res, next) => {
  const getById = db.getFromDatabaseById(req.id, req.id2);
  res.status(200).send(getById);
})

app.post('/api/:model', checkMillion, (req, res, next) => {
  const newPost = req.body;
  db.addToDatabase(req.id, newPost);
  res.status(201).send(newPost);
  }
)

app.put('/api/:model/:id', (req, res, next) => {
  const updatePost = req.body;
  db.updateInstanceInDatabase(req.id, updatePost);
  res.status(200).send(updatePost);
})

app.delete('/api/:model/:id', (req, res, next) => {
  const deletePost = req.id2;
  db.deleteFromDatabasebyId(req.id, deletePost);
  res.status(204).send(deletePost);
})

app.delete('/api/meetings', (req, res, next) => {
  db.deleteAllFromDatabase('meetings');
  res.status(204).send();
})

//My code finishes here

// This conditional is here for testing purposes:
if (!module.parent) { 
  // Add your code to start the server listening at PORT below:
app.listen(PORT, 
  console.log('Server listening on port 4001')
);
}


