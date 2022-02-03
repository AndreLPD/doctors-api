const doctorsControllers = require('../controllers/Doctors/doctorsControllers');
const profileDoctor = require('../controllers/Doctors/profileDoctor');
const express = require('express');
const router = express.Router();

//doctorsControllers Crud
router.post("/saveDoctor", doctorsControllers.store);
router.get("/listDoctors", doctorsControllers.list);
router.get("/findDoctor/:id", doctorsControllers.find);
router.put("/updateDoctor/:id", doctorsControllers.update);
router.delete("/deleteDoctor/:id", doctorsControllers.delete);

//profileDoctors
router.post("/profileDoctor", profileDoctor.profile);

module.exports = router;