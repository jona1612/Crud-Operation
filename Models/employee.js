const mongoose = require("mongoose")
const employeeSchema = new mongoose.Schema({
    // user_ID: String,
    firstName: String,
    lastName: String,
    mobileNumber: Number,
    address: String,
    department: String,
    created_at: {
        type: Date,
        default: Date.now()
    },

})

module.exports = mongoose.model("employee", employeeSchema);