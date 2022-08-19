const router = require("express").Router();
const {
  updateuser,
  deleteuser,
  getuser,
  follow,
  unfollow,
} = require("../controllers/userController");

router.put("/:id", updateuser);
router.delete("/:id", deleteuser);
router.get("/:id", getuser);
router.put("/:id/follow", follow);
router.put("/:id/unfollow", unfollow);

module.exports = router;
