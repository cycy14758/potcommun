const express = require('express');
const upload=require('../Utils/Multer')
const isAuth=require('../Middelwares/Autho');
const pot = require('../Models/Pot');
const router = express.Router();

// Add new product
router.post("/", upload("pots").single("file"), async (req, res) => {
    try {
        const url =` ${req.protocol}://${req.get("host")}/${req.file.path}`
        // Create a new product instance using the request body
        const newPot = new pot(req.body);
        newPot.img=url
        // Save the new product to the database
        const savedPot= await newPot.save();

        // Send a success response with the saved product
        res.send(  savedPot);  
    } catch (error) {
        // Handle errors and send an error response to the client
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
})
//get
router.get('/', async (req, res) => {
    try {
      const pots= await pot.find();
      res.send(pots);
    } catch (error) {
     console.log(error);
    }
  });
//put
  router.put('/:id', upload("pots").single("file"), async (req, res) => {
    try {     
       const updatepot= await pot.findByIdAndUpdate(req.params.id, {...req.body});
       if (req.file){
        const url =` ${req.protocol}://${req.get("host")}/${req.file.path}`
        updatepot.img=url
       }
       res.send(updatepot);
     } 
     catch (error) {
    console.log(error);
     }
   });
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      result=await pot.findByIdAndRemove(id);
      res.send( result );
    } catch (error) {
   
      console.log(error);
    }
  });
  
module.exports = router;