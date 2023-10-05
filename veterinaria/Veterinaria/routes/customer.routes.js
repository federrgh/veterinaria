const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");

router.get("/", customerController.list);
router.post('/add', customerController.save); 
<<<<<<< HEAD:veterinaria/Veterinaria/routes/customer.routes.js
=======
router.get("/delete/:id", customerController.delete);
>>>>>>> 454dc7dc16e5fa090de64f476c2a61427997e007:Veterinaria/routes/customer.routes.js

module.exports = router;
