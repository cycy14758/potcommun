const express = require('express');
const upload=require('../Utils/Multer')
const isAuth=require('../Middelwares/Autho');
const pot = require('../Models/Pot');
const router = express.Router();

// Add new product
router.post("/", upload("pots").single("file"),isAuth, async (req, res) => {
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
router.put("/:id",upload("products").single("file"),isAuth(), async (req, res) => {
    try {
         const result = await Product.updateOne({ _id: req.params.id }, { ...req.body })
            productUpdated = await  Product.findOne({ _id: req.params.id })
             if(req.file)
             { const url = `${req.protocol}://${req.get("host")}/${req.file.path}`
             productUpdated.img =url
              await productUpdated.save()
             }
     if (result.modifiedCount || req.file) {
            return res.send({ msg: "update suuccess", product: productUpdated });
          }
         res.status(400).send({ msg: " aleardy update " })
    }
     catch (error) {
        console.log(error)
        res.status(400).send(error.message)
    }
})
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      result=await pot.findByIdAndRemove(id);
      res.send( result );
    }
     catch (error) {
   
      console.log(error);
    }
  });
  
module.exports = router;