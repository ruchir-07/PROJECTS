
const cluster = (req, res) => {
    try {
        return res.send({
            data:[
                name1 = "Ruhchir",
            ],
            running: "ok"
        })
    } catch (error) {
        return res.status(500).send({
            "error": "This Page Has Error Loading",
            running: "bad"
        })
    }
}

module.exports = cluster