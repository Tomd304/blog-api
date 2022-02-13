var express = require("express");
var router = express.Router();
var controller = require("../controllers/post_controller");

router.get("/", controller.get_all_posts);

router.get("/:id", controller.get_post_by_id);

router.post("/", controller.create_post);

router.put("/:id", controller.update_post);

router.post("/:id/comment", controller.create_comment);

module.exports = router;
