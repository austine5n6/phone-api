const db = require("../models")
const Phone = db.phone;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    //create a Phone
    const phone = {
        name: req.body.name,
        size: req.body.size,
        yearProduced: req.body.yearProduced,
        internalStorage: req.body.internalStorage,
        ramSize: req.body.ramSize,
     
    };

    // Save Phone in the database
    return Phone.create({
        name: phone.name,
        size: phone.size,
        yearProduced: phone.yearProduced,
        internalStorage: phone.internalStorage,
        ramSize: phone.ramSize
    }).then( data => {
        res.send(data)
    }).catch (err => {
        res.status(500).send({
            message: err.message || "Some error occured while creating the Phone"
        });
    })

};


exports.getAll = (req, res) => {
    return Phone.findAll()
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(505).send({
            message: err.message || "Error occured while trying to find Phones!"
        })
    })
}

 