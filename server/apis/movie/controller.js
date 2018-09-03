

let movieCollectionDetails = require('./model')

let moviesdata= (req,res)=>{
    console.log(req.body);
    movieCollectionDetails.find(req.body.search)

   
    .then(
        (response)=>{
            res.status(200).json({ status : true , message :"Success fully register" , addDetails:response})
        }
    )
    .catch(
        (error)=>{

            res.status(500).json({ status : false , message :"Error while Searching , please again"   })
        }
    )

}



module.exports = {
    moviesdata
}