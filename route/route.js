const express =  require( "express")
const router = express.Router()
const {adminPanel} =require("../controller/controlle")

router.get( "/admin",  adminPanel)

module.exports = router