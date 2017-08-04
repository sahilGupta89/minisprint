exports.addNewLinking = function (token, callback) {
    let cursor = db.collection('linedAccount').find({
        linkingKey: req.body.token
    });
    cursor.toArray(function (err, result) {
        if (err) {
            callback(err, null)
            cursor.close()
        } else {
            if (result.length > 0) {
                callback(1, null)
                cursor.close()
            } else {
                //insert entry
                db.collection('linkedAccount').insert({
                    linkingKey: token
                }, function (err, inserted) {
                    callback(null, inserted)
                    cursor.close()
                })
            }
        }
    })
}