const express = require("express")
const router = express.Router()
const DB = require("../Models/employee")


router.post('/employee', async (req, res) => {
    try {
         let doc = await DB.create({
            // user_id: req.body.User_ID,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            mobileNumber: req.body.mobileNumber,
            address: req.body.address,
            department: req.body.department,
        })
        res.status(201).send(doc)
    } catch (Error) {
        res.send(Error)
    }
})

router.get('/employeedetails', async (req, res) => {
    try {
        let employeeDetails = await DB.find();
        res.status(200).send(employeeDetails)
    } catch (Error) {
        res.status(500).send(Error)
    }
})

router.delete('/:id', (req, res) => {
    try {
        DB.findByIdAndDelete(req.params.id, function (err, docs) {
            if (err) {
            res.status(500).send(err)
            } else {
                res.status(200).send('Successfully Deleted')
        }
        })
    } catch (Error) {
        res.status(500).send(Error)
    }
})


router.put('/:id', (req, res) => {
    try {
        DB.findByIdAndUpdate(req.params.id, { ...req.body }, { returnDocument: 'after' }, function (err, docs) {
            if (err) {
            res.status(500).send(err)
            } else {
                res.status(200).send(docs)
        }
        })
    } catch (Error) {
        res.status(500).send(Error)
    }
})

module.exports = router