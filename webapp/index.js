var express = require('express');
var store = require('./datastore');
var bodyParser = require('body-parser');
const allConfig = 'allConfig';
const resultData = () => {
    return {
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
app.listen(app.get('port'));
console.log('Express server started on port %s', app.get('port'));

