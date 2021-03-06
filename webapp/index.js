var express = require('express');
//var store = require('./datastore');
var fs = require('fs');
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
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(__dirname + '/dist/ng-drag-drop-app'));
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
// support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));

app.set('port', process.env.PORT || 3000);



// GET Enpoint for storing configs
app.get('/config', function (req, res) {


    fs.readFile('myjsonfile.json', function (err, content) {
        let result = {};
        if (err) {
            result.error = err;
            result.message = "Error while Fetching record";
            res.status(500).send(result);
        } else{
            var parseJson = JSON.parse(content);
       
            result.data = parseJson;
            result.message = "Success while Fetching record";
            res.status(200).send(result);
        }
    })




})

// POST endpoint for saving configs
app.post('/config', function (req, res) {

    var json = req.body;
    var jsonString = JSON.stringify(req.body);

    // console.log('request payload :: ' + JSON.stringify(configs))
    fs.writeFile('myjsonfile.json', jsonString, 'utf8', () => {
        let result = {};
        result.data = json;
        result.message = "Success while Saving record";
        res.status(200).send(result);
    });


});

// GET Enpoint for storing html
app.get('/view/:id', function (req, res) {

    var id = req.params.id
    console.log("id in the path variable " + id);
    if (id != null && typeof id != undefined) {

        // store.fetchHtml(id, (err, value) => {
        //     if (value) {
        //         let result = resultData();
        //         result.id = id;
        //         result.message = "Retrieved Html from database";
        //         result.data = value;
        //         console.log("Data retrieved from database returning 200 OK");
        //         res.status(200).send(value)
        //     }
        //     else {

        //         let result = resultData();
        //         result.message = "Error retreiving Html from database";
        //         result.error=err;
        //         console.log("Error in storing data in database returning 500");
        //         res.status(500).send(result);
        //     }

        // });
    } else {

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
    console.log('request payload :: ' + req.body.html);
    // let key = store.saveHtml(id, payLoad, (err, value) => {
    //     if (value) {
    //         console.log("Data Persist " + value)
    //         let result = resultData();
    //         result.id=value;
    //         result.data = "success";
    //         result.message = "Success while Saving record";
    //         res.status(200).send(result);

    //     } else {
    //         console.log('Error  in DB ' + err)
    //         let result = resultData();
    //         result.error = err;
    //         result.message = "Error while Saving record";
    //         res.status(500).send(result);
    //     }
    // });

});
app.listen(app.get('port'));
console.log('Express server started on port %s', app.get('port'));

