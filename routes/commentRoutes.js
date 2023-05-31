const express = require("express");

const { createComment, getComment, deleteComment, updateComment } = require("../controllers/commentControllers");

const router = express.Router();

router.get("/:id", getComment);
router.delete("/delete/:id", deleteComment);
router.patch("/update/:id", updateComment);
router.post("/create", createComment);

module.exports = router;