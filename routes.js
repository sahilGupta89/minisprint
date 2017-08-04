let mongo = require('./mongo');
let needle = require('needle');
exports.linkAccount = function (req, res) {
    // Get the documents collection 
    let token = req.body.token ? req.body.token : '';
    if (token) {
        mongo.addNewLinking(token, function (err, result) {
            if (err) {
                if (err == 1) {
                    res.send('Already Exist')
                } else {
                    res.send(err)
                }
            } else {
                res.send({
                    message: 'success',
                    status: 200
                })
            }
        })
    } else {
        res.send({
            message: 'Please provide token',
            status: 400
        })
    }
}

exports.addCourses = function (req, res) {
    let options = {
        JSON: true,
        headers: {
            'Authorization': 'Bearer lcxrsyc1DpYO3wJnC3ZHbrVWqimz3mRuB7CM82OIhPHGqacJlGTn3MwF3wzGEcq4',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    needle.get('http://canvas.differ.chat/api/v1/courses', options, function (err, result, body) {
        // console.log('response', err, body)
        res.send({
            message: 'success',
            status: 200,
            data: body
        })
    })
}