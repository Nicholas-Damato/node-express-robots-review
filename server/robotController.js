let robotArr = require('../src/robot_data.json')

// module.exports = (req, res) => {
//     res.status(200).send(robotArr)
// }

module.exports = {
    getRobots: (req, res) => {
        res.status(200).send(robotArr)
    },
    deleteRobots: (req, res) => {
        const { id } = req.params // req.params.id <==== samething

        robotArr = robotArr.filter(robotObj => robotObj.id !== +id)

        res.status(200).send(robotArr)
    }
}