module.exports = {
    port : 3000,
    jwt : {
        secret : 'movie@123#',
        options : { expiresIn : 60 * 60 * 24 * 1 } // 1 Day 
    },
    db : {
        uri : "mongodb://localhost:27017/moviesearch"
    }
}