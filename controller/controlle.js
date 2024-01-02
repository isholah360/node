


const adminPanel =  (req, res) => {

    try {
        res.status(201).json({"message": "this is the admin panel"})
     
    } catch (error) {
      res.status(400).json("Invalid User Credential");
    }
    
  };

  module.exports = { adminPanel,  };
