// npm install prebuild-install || node-gyp rebuild
// npm install levelup leveldown

const levelup = require('levelup');
const leveldown = require('leveldown');
const encode = require('encoding-down');

// 1) Create our store
const db = levelup(encode(leveldown('./configDb'), { valueEncoding: 'json' }));
const htmlDb = levelup(encode(leveldown('./webDb'), { valueEncoding: 'json' }));


module.exports = {

    save: function (key,value, cb) {

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

       var val =JSON.stringify(value);
        
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
            let a = `{"html" :"<!-- ######## This is a comment, visible only in the source editor ######## -->
            <h1 style="color: #4485b8;">You can edit <span style="background-color: #4485b8; color: #ffffff; padding: 0 5px;">this demo</span> text!</h1>
            <p><strong style="color: #000;">Basic usage:</strong> Paste your documents in the visual editor on the left or your HTML code in the source editor in the right. <br />Edit any of the two areas and see the other changing in real time.&nbsp;</p>
            <h4>Use the table below to test most of the features</h4>
            <table class="editorDemoTable" style="vertical-align: top;">
            <thead>
            <tr>
            <td>Title</td>
            <td>Description 1</td>
            <td>Description 2</td>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td style="min-width: 140px;"><strong>Inline styles</strong></td>
            <td>Using <span style="font-weight: bold; color: #000; text-decoration: underline;">inline styles</span> in your HTML document is a bad practice because <strong style="font-weight: normal; font-size: 1.1em; color: #00a; font-family: monospace; letter-spacing: -2px;">they break the default styles of the website</strong>!</td>
            <td>Use classes and IDs instead!
            <div style="height: 20px; width: 100%; border: 3px dotted #888; background-color: rgba(0,0,0,0.2);">&nbsp;</div>
            </td>
            </tr>
            <tr>
            <td><strong>Setting margins</strong></td>
            <td style="background-color: rgba(0,0,0,0.1);">
            <p>&nbsp;&nbsp;&nbsp;Do not use &nbsp; &nbsp; &nbsp; &nbsp;spaces &nbsp; &nbsp; &nbsp;or &nbsp; &nbsp; &nbsp; empty paragraphs</p>
            <p>&nbsp;</p>
            <p>&nbsp; &nbsp; &nbsp; &nbsp;to set vertical and horizontal &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; gaps.</p>
            </td>
            <td><span style="line-height: 35px;">&larr;| &nbsp;Use <span style="margin: 5px;">margin, &nbsp;&nbsp;</span> <span style="padding: 5px;">padding, &nbsp; &rarr;|</span> <br />and line-height instead <strong style="font-size: 20px;">↕</strong> </span></td>
            </tr>
            <tr>
            <td><strong>Links and images</strong></td>
            <td><a style="font-weight: bold; color: #000; cursor: pointer; text-decoration: underline;" title="Demo link" href="https://html-online.com" target="_blank">This is a text link</a> and this is an image: <img style="border: 2px solid #4485b8; border-radius: 15px;" src="/images/smiley.png" alt="laughing" width="20" height="20" /></td>
            <td>And this is a link image: <a style="cursor: pointer;" title="Image link" href="https://html-cleaner.com" target="_blank"><img src="/images/smiley.png" alt="smiley" /></a></td>
            </tr>
            <tr>
            <td><strong>Tables and lists</strong></td>
            <td>
            <table style="margin: auto; box-shadow: 3px 3px 10px #000;" border="1">
            <tbody>
            <tr style="border-top: 2px solid #555;">
            <td style="border: 2px dashed #555;">First cell</td>
            <td>Second column</td>
            <td>Upper corner</td>
            </tr>
            <tr style="background-color: rgba(0,0,0,0.1);">
            <td>Bottom row</td>
            <td>Middle bottom</td>
            <td>Right corner</td>
            </tr>
            </tbody>
            </table>
            </td>
            <td>
            <ol>
            <li>Demonstrating an ordered list</li>
            <li>These are&nbsp;special characters: <span style="color: red; font-size: 17px;">&hearts;</span> <strong style="font-size: 20px;">☺ ★</strong> &gt;&lt;</li>
            <li>item 2</li>
            </ol>
            </td>
            </tr>
            <tr>
            <td valign="top"><strong>Floating an image</strong></td>
            <td>
            <h4>Floating with inline style</h4>
            <p><img style="margin: 0 0 5px 20px; float: right;" src="https://htmlg.com/images/demo-image.jpg" alt="Castle" width="155" height="156" />Lorem&nbsp;ipsum dolor sit amet, nonumes voluptatum mel ea, cu case ceteros cum. Novum commodo malorum vix ut. Dolores consequuntur in ius, sale electram dissentiunt quo te. Cu duo omnes invidunt, eos eu mucius fabellas. Stet facilis ius te, quando voluptatibus eos in. Ad vix mundi alterum, integre urbanitas intellegam vix in.</p>
            </td>
            <td>
            <h4>Floating with classes</h4>
            <p><img class="imageRight" src="https://htmlg.com/images/demo-image.jpg" alt="Dover" width="155" height="156" />Lorem&nbsp;ipsum dolor sit amet, nonumes voluptatum mel ea, cu case ceteros cum. Novum commodo malorum vix ut. Dolores consequuntur in ius, sale electram dissentiunt quo te. Cu duo omnes invidunt, eos eu mucius fabellas. Stet facilis ius te, quando voluptatibus eos in. Ad vix mundi alterum, integre urbanitas intellegam vix in.</p>
            </td>
            </tr>
            </tbody>
            </table>
            <hr />
            <p>Set up the cleaning options and click the <span style="background-color: #4485b8; color: #fff; display: inline-block; padding: 2px 8px; font-weight: bold; border-radius: 5px;">Clean</span> button, try the <strong>Tag manager</strong>, or experiment with the <strong>Find and replace tool</strong>.</p>
            <p><em>You can always access this demonstration text clicking the <strong>DEMO</strong> menu item.</em></p>
            <hr />
            <p><em>&copy; htmlg.com</em></p>"}`;
            
            return cb(null, value);
        });
    }

}

