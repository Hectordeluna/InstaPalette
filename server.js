const express = require('express');
const bodyParser = require('body-parser');
const Axios = require('axios');
var palette = require('image-palette');
var pixels = require('image-pixels');
var mergeImg = require('merge-img'); 
var getPixels = require('get-image-pixels')
var getPalette = require('get-rgba-palette');
const getColors = require('get-image-colors');
var arrayBufferConcat = require('arraybuffer-concat');
// Test
const fs = require('fs');

const app = express();

app.use(bodyParser.json());


app.get('/api/photo/:name', async (req, res) => {
    var photos = [];


    const {name} = req.params;

    try {
        const userInfoSource = await Axios.get('https://www.instagram.com/'+name)

        // userInfoSource.data contains the HTML from Axios
        const jsonObject = userInfoSource.data.match(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/)[1].slice(0, -1)

        const userInfo = JSON.parse(jsonObject)
        // Retrieve only the first 10 results
        const mediaArray = userInfo.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(0, 100);
        const profilePicUrl = userInfo.entry_data.ProfilePage[0].graphql.user.profile_pic_url;

        for (let media of mediaArray) {
            const node = media.node

            // Push the thumbnail src in the array
            photos.push(node.thumbnail_src)
        }

        var photosRaw = await pixels.all(photos);

        let photosPixels = photosRaw.map(a => a.data);

        var arrayBuff =  Buffer.concat(photosPixels);

        var photoPalette = getPalette(arrayBuff,6);

        var hex = [];
        photoPalette.forEach(color => {
            var b = color.map(function(x){             //For each array element
                    x = parseInt(x).toString(16);      //Convert to a base16 string
                    return (x.length==1) ? "0"+x : x;  //Add zero if we get only one character
                });
                hex.push("#"+b.join(""));
            });

        const dataObject = {
            colors : hex,
            profilePhoto : profilePicUrl,
            posts : mediaArray.length,
        }
        
         return res.json(dataObject);


        // mergeImg(photos)
        // .then((img) => {
        // var file =  (Math.random() * 1000).toString() + '.png';
        // img.write(file, async () => {
        //     var {colors} = palette(await pixels(file),6);
        //     var hex = [];
        //     colors.forEach(color => {
        //         color.pop();
        //         var b = color.map(function(x){             //For each array element
        //             x = parseInt(x).toString(16);      //Convert to a base16 string
        //             return (x.length==1) ? "0"+x : x;  //Add zero if we get only one character
        //         });
        //         hex.push("#"+b.join(""));
        //     });
        //     fs.unlinkSync(file);
        //     console.timeEnd('someFunction');
        //     return res.json(hex);
        // }); 
        // });
    } catch (e) {
        return res.status(500).send('Unable to retrieve photos. Reason: ' + e.toString());
        console.error('Unable to retrieve photos. Reason: ' + e.toString())
    }
    

});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('App listening on port 5000!');
});