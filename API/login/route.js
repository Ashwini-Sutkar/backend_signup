const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.post("/", controller.add);
router.get("/", controller.findAll);
router.get("/:id", controller.findById);
router.put("/:id", controller.updateById);
router.delete("/:id", controller.deleteById);

router.post("/login", controller.login);
module.exports = router;
