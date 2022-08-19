const router = require("express").Router();
const {
  createpost,
  updatepost,
  deletepost,
  likepost,
  getpost,
  timelinepost,
} = require("../controllers/postController");

router.post("/", createpost);
router.put("/:id", updatepost);
router.delete("/:id", deletepost);
router.put("/:id/like", likepost);
router.get("/:id", getpost);
router.get("/timeline/all", timelinepost);

module.exports = router;
