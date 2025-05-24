let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.commentsController.getComments(req, res);
});

router.post("/create", (req, res) => {
  Controllers.commentsController.createComment(req, res);
});

router.put("/:id", (req, res) => {
  Controllers.commentsController.updateComment(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.commentsController.deleteComment(req, res);
});

module.exports = router;
