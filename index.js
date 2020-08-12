const express = require('express')
const app = express()
const port = 3000

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

// Array of users
const mock = [
    {
        id: 1,
        name: "Andy Nieves",
        age: 30,
        username: "andi"
    },
    {
        id: 2,
        name: "Dennis Olamit",
        age: 30,
        username: "dennis"
    },
    {
        id: 3,
        name: "Bulbulino Bayagbag",
        age: 40,
        username: "bulbulino_cute01"
    }
];

// req = request;
// res = response;
app.get('/api/v1/users', (req, res) => {
  res.send(mock);
});

app.get('/api/v1/user/:id', (req, res) => {
    const { id } = req.params;
    const user = mock.find(data => data.id === +id);
    res.send(user);
});

app.post('/api/v1/user', (req, res) => {
    const { body } = req;
    mock.push(body);
    res.send(mock);
});

app.delete('/api/v1/user/:id', (req, res) => {
    const { id } = req.params;
    const users = mock.filter(data => data.id !== +id);
    res.send(users);
});

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`)
})