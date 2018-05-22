// npm install prebuild-install || node-gyp rebuild
// npm install levelup leveldown

const levelup = require('levelup');
const leveldown = require('leveldown');
const encode = require('encoding-down');
var escape_html_entities = require('escape-html-in-json');

// 1) Create our store
const db = levelup(encode(leveldown('./configDb'), { valueEncoding: 'json' }));
const htmlDb = levelup(encode(leveldown('./webDb'), { valueEncoding: 'json' }));


module.exports = {

    save: function (key, value, cb) {

        db.put(key, value, function (err) {
            if (err) {
                console.log('db.put failed !', err) // some kind of I/O error
                return cb(err, null)
            }
            else {

                console.log('db.put success')
                return cb(null, 'success')
            }


        })
    },

    fetch: function (key, cb) {

        db.get(key, function (err, value) {

            if (err) {
                if (err.notFound) {
                    console.log('data not present for :' + key);
                    return cb(err, null);

                }
                console.log('db.get failed', err)
                return cb(err, null);
            }

            console.log(' key=' + key)
            console.log(' value =' + typeof value + ' :: ', value)
            return cb(null, value);
        });

    },

    remove: function (key) {
        return db.del(key, function (err) {
            if (err)
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

    batchOperation: function (ops) {

        return db.batch(ops, function (err) {
            if (err) return console.log('db.batch failed!', err)

            console.log('db.batch operation successful!')
            return
        })
    },
    saveHtml: function(key,value,cb){

       var val =JSON.stringify(value, escape_html_entities);
        
        htmlDb.put(key, val, function (err) {
            if (err) {
                console.log('htmlDb.put failed !', err) // some kind of I/O error
                return cb(err, null)
            }
            else {

                console.log('htmlDb.put success')
                return cb(null, key)
            }


        });
    },
    fetchHtml: function(key,cb){
       
        htmlDb.get(key, function (err, value) {

            if (err) {
                if (err.notFound) {
                    console.log('data not present for :' + key);
                    return cb(err, null);

                }
                console.log('db.get failed', err)
                return cb(err, null);
            }

            console.log(' key=' + key)
            console.log(' value =' + "type "+typeof value + ' :: ', value)
            var val = JSON.parse(val);
            console.log('JSON Parsed value =' + typeof value + ' :: ', value)
            return cb(null, val);
        });
    }

}

