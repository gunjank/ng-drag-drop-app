// npm install prebuild-install || node-gyp rebuild
// npm install levelup leveldown

var levelup = require('levelup');
var leveldown = require('leveldown');
var encode = require('encoding-down');

// 1) Create our store
var db = levelup(encode(leveldown('./configDb'), { valueEncoding: 'json' }));
var htmlDb = levelup(encode(leveldown('./webDb'), { valueEncoding: 'json' }));


module.exports = {

    isDbOpen: function () {

        if (db.isClosed()) {

            console.log('Database closed , invoking db.open()')
            db.open((err) => {
                if (err) {
                    console.log("Error opening db connection returning false")
                    return false;
                } else {

                    console.log('db.open() Success returning true')
                    return true;
                }
            });
        } else {
            console.log("DB already open, returning true")
            return true;
        }
    },
    save: function (key, value, cb) {

        if (this.isDbOpen()) {

            db.put(key, value, function (err) {
                if (err) {
                    console.log('db.put failed !', err) // some kind of I/O error
                    return cb(err, null)
                }
                else {

                    console.log('db.put success')
                    return cb(null, 'success')
                }


            });
        } else {

            console.log('db not open returning err ')
            return('error',null);
        }
    },

    fetch: function (key, cb) {

        if (this.isDbOpen()) {

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
        } else {
            console.log('db not open returning err ')
            return('error',null);
        }
    },
    // Delete Operation
    remove: function (key) {
        return db.del(key, function (err) {
            if (err)
                console.log('db.del failed', err)
            return

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

    //  batch Update Operation
    batchOperation: function (ops) {

        return db.batch(ops, function (err) {
            if (err) return console.log('db.batch failed!', err)

            console.log('db.batch operation successful!')
            return
        })
    },
    saveHtml: function (key, value, cb) {

        var val = JSON.stringify(value);

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
    fetchHtml: function (key, cb) {

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
            console.log(' value =' + "type " + typeof value + ' :: ', value)

            return cb(null, value);
        });
    }

}

