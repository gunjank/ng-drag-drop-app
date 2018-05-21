// npm install prebuild-install || node-gyp rebuild
// npm install levelup leveldown

var levelup = require('levelup')
var leveldown = require('leveldown')
var encode = require('encoding-down')

// 1) Create our store
var db = levelup(encode(leveldown('./db'),{ valueEncoding: 'json' }))

module.exports = {
 
    save: function(key, value){
        
        db.put(key,function(err){
            if (err) return console.log('db.put failed !', err) // some kind of I/O error

    })
},

 fetch : function(key){

  return  db.get(key,function(err,value){

        if(err){
            if(err.notFound){
                return console.log('data not present for :' +key); 
                 
            }
         return console.log('db.get failed', err)
        }

         console.log(' key=' +key )
         console.log(' value =' +typeof value+' :: ',value )
         return value;
    })
   
},

 remove: function(key){
  return  db.del(key,function(err){
         if(err)
            return console.log('db.del failed', err)
         
    })
},

// ops is an array
// ops 
/*var ops = [
    { type: 'del', key: 'father' },
    { type: 'put', key: 'name', value: 'Yuri Irsenovich Kim' },
    { type: 'put', key: 'dob', value: '16 February 1941' },
    { type: 'put', key: 'spouse', value: 'Kim Young-sook' },
    { type: 'put', key: 'occupation', value: 'Clown' }
  ] */

 batchOperation: function(ops) {
    
    return db.batch(ops, function (err) {
        if (err) return console.log('db.batch failed!', err)
        
        console.log('db.batch operation successful!')
        return
      })
}

}

