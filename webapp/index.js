var express = require('express');

var app = express(); // better instead
// server.configure(function(){
//   //server.use('/media', express.static(__dirname + '/media'));
//   server.use(express.static(__dirname + '/dist/ng-drag-drop-app'));
// });

app.use(express.static(__dirname + '/dist/ng-drag-drop-app'));
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'));
console.log('Express server started on port %s', app.get('port'));