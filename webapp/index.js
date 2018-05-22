var express = require('express');
var store = require('./datastore');
var bodyParser = require('body-parser');
const uuid = require('uuid/v1');
const allConfig = 'allConfig';
const resultData = () => {
    return {
        "id": null,
        "message": "",
        "data": null,
        "error": null
    }
}


var app = express(); // better instead
// server.configure(function(){
//   //server.use('/media', express.static(__dirname + '/media'));
//   server.use(express.static(__dirname + '/dist/ng-drag-drop-app'));
// });

app.use(express.static(__dirname + '/dist/ng-drag-drop-app'));

app.use(bodyParser.json());
// support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));

app.set('port', process.env.PORT || 3000);



// GET Enpoint for storing configs
app.get('/config', function (req, res) {

    store.fetch(allConfig, (err, value) => {

        if (value) {
            console.log('Data in DB ' + value);
            console.log('Data Retrieved : ' + JSON.stringify(value));

            let result = resultData();
            result.data = value;
            result.message = "Success while Fetching record";
            res.status(200).send(result);
        } else {
            console.log('Error  in DB ' + err)
            let result = resultData();
            result.error = err;
            result.message = "Error while Fetching record";
            res.status(500).send(result);
        }
    });



})

// POST endpoint for saving configs
app.post('/config', function (req, res) {

    var configs = req.body
    console.log('request payload :: ' + JSON.stringify(configs))

    store.save(allConfig, configs, (err, value) => {
        if (value) {
            console.log("Data Persist " + value)
            let result = resultData();
            result.data = value;
            result.message = "Success while Saving record";
            res.status(200).send(result);

        } else {
            console.log('Error  in DB ' + err)
            let result = resultData();
            result.error = err;
            result.message = "Error while Saving record";
            res.status(500).send(result);
        }
    });

});

// GET Enpoint for storing html
app.get('/view/:id', function (req, res) {

    var id = req.params.id
    console.log("id in the path variable " + id);
    if (id != null && typeof id != undefined) {

        store.fetchHtml(id, (err, value) => {
            if (value) {
                let result = resultData();
                result.id = id;
                result.message = "Retrieved Html from database";
                result.data = value;
                console.log("Data retrieved from database returning 200 OK");
                res.status(200).send(value)
            }
            else {

                let result = resultData();
                result.message = "Error retreiving Html from database";
                result.error=err;
                console.log("Error in storing data in database returning 500");
                res.status(500).send(result);
            }

        });
    }else {

        let result = resultData();
        result.message = "Id empty returning error";
        console.log("Data stored in database returning 500 OK");
        res.status(500).send(result);
    }
    


});
// POST endpoint for saving views
app.post('/view', function (req, res) {

    var payLoad = req.body
    var id = uuid();
    console.log("UUId for the Payload " + id);
    console.log('request payload :: ' + req.body);
    let key = store.saveHtml(id, payLoad, (err, value) => {
        if (value) {
            console.log("Data Persist " + value)
            let result = resultData();
            result.id=value;
            result.data = "success";
            result.message = "Success while Saving record";
            res.status(200).send(result);

        } else {
            console.log('Error  in DB ' + err)
            let result = resultData();
            result.error = err;
            result.message = "Error while Saving record";
            res.status(500).send(result);
        }
    });

});
app.listen(app.get('port'));
console.log('Express server started on port %s', app.get('port'));

