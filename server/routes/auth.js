const router = require("express").Router();
const { Registre ,Login } = require("../controllers/authConttroller")

router.post("/registre", Registre);
router.post("/login", Login);


module.exports = router;
