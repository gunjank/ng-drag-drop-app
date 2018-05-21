var express = require('express');
var store = require('./datastore');
var bodyParser = require('body-parser');
const allConfig= 'allConfig';

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

app.get('/config',function(req,res){

    var data = store.fetch(allConfig);

    console.log('Data in DB '+data)

    console.log('Data Retrieved : '+JSON.stringify(data))

    res.status(200).send(data);
        
        

})
app.post('/config',function(req,res){

    var configs = req.body
    console.log('request payload :: '+ JSON.stringify(configs))

    store.save(allConfig,configs)
    console.log('Data Persisted')

    res.status(200).send('Save Suceess') 

})
app.listen(app.get('port'));
console.log('Express server started on port %s', app.get('port'));

