"use strict";
let Models = require("../models"); // matches index.js

const getComments = (res) => {
  // finds all users
  Models.Comment.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getComments,
};
