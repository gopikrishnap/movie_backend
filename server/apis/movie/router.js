let express=require('express')
let router=express.Router();

let movieController = require('./controller')

router.use('/movieDetails',movieController.moviesdata)


module.exports=router;