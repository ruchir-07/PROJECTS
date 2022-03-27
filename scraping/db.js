const mongoose = require('mongoose')


const bond = (URI) => {
    try {
        mongoose.connect(URI, () => {
            console.log("Connection to database made successfully ")
        })
    } catch (error) {
        console.log(err)
        bond()
    }
}
  

module.exports = bond
// module.exports = mongoose.model("Kitten", KittySchema);