
let express = require('express');
let router = express.Router();

let movieRouter = require('../server/apis/movie/router');



router.use('/movie',movieRouter)




module.exports= router;