exports.myFunction = (req, res) => {
    
    res.status(200).send( "Hello" + req.body.name);
};