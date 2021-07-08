const express = require('express');
const router = express.Router();
//const {getUsers} = require('./users.controller');

const controller = require('./users.controller');

router.get('/', (req, res) => {

  try {
    //let users = controller.getUsers();
    controller.getUsers().then((users) => {
      res.status(200);
      res.send(users);
    }).catch((error) => {
      res.sendStatus(500);
    });

  } catch (error) {
    console.error(error);
    res.sendStatus(500);

  }

});

router.get('/param/:id', (req, res) => {
  let id = req.params.id;

  try {
    //let user = controller.getUserId(id);
    controller.getUserId(id).then((user) => {
      res.status(200);
      res.send(user);
    }).catch((error) => {
      res.sendStatus(500);
    });

  } catch (error) {
    console.error(error);
    res.sendStatus(500);

  }

});

router.post('/new', (req,res) => {
  let body =
  {
  /*   username: 'celes2',
    fullname: 'celeste vocos',
    email: 'celeste2@gmail.com',
    password: '1111' */

    username:req.body.name,
    fullname:req.body.email,
    email: req.body.fullname,
    password: req.body.password
  }

  try {

    // console.log("body " + JSON.stringify(cuerpo));
    controller.postUser(body).then((user) => {
      res.status(201);
      res.send(user);
    }).catch((error) => {
      res.sendStatus(500);
    });
  }
  catch (error) {
    console.error(error);
    res.sendStatus(500);
  }

});


module.exports = {router}; //exporto una instancia de Router, no express