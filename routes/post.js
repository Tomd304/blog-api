var express = require("express");
var router = express.Router();
var controller = require("../controllers/post_controller");
var verify = require("./verifyToken");

router.get("/", controller.get_all_posts);

router.get("/:id", controller.get_post_by_id);

router.post("/", verify, controller.create_post);

router.put("/:id", verify, controller.update_post);

router.post("/:id/comment", verify, controller.create_comment);

module.exports = router;
