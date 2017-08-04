exports.insertDocuments = function () {
    // Get the documents collection 
    let collection = db.collection('testcol');
    // Insert some documents 
    collection.insertMany([
        { a: 1 }, { a: 2 }, { a: 3 }
    ], function (err, result) {
        // assert.equal(err, null);
        // assert.equal(3, result.result.n);
        // assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the document collection");
        // callback(result);
    });
    console.log('db', db)
}