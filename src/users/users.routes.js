const { json } = require('express');
const express = require('express');
const router = express.Router();
//const {getUsers} = require('./users.controller');

const controller = require('./users.controller');

router.get('/', (req, res) => {

  try {
    let users = controller.getUsers();
    res.status(200);
    res.send(users);

  } catch (error) {
    console.error(error);
    res.sendStatus(500);

  }

});

router.get('/:id', (req, res) => {
  let id = req.params.id;

  try {
    let user = controller.getUserId(id);
    res.status(200);
    res.send(user);

  } catch (error) {
    console.error(error);
    res.sendStatus(500);

  }

});

router.post('/new', (req, res) => {
  
  try {
    //console.log("body " + JSON.stringify(req.body));
    let cuerpo=
      {
          username:req.body.name,
          fullname:req.body.email,
          email: req.body.fullname,
          password: req.body.password
      }
    //let body = req.body;
    //JSON.stringify
    console.log("body " + JSON.stringify(cuerpo));
    controller.postUser(cuerpo);
    res.status(200);
    res.send(cuerpo);
  }
  catch (error) {
    console.error(error);
    res.sendStatus(500);
  }

});


module.exports = { router }; //exporto una instancia de Router, no express