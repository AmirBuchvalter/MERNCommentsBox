const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser");
const axios = require('axios');
const gravatar = require('gravatar');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/test";

app.use(cors());

app.get('/api/createdb', (req, res) => {
    MongoClient.connect(url, (err, db) => {
        if (err) throw err;
        let dbo = db.db(process.argv[2]);

        dbo.listCollections().toArray((err, collections) => {
            if (err) throw err;
            for (let i = 0; i < collections.length; i++) {
                console.log("Collection name: ", collections[i].name);
                if (collections[i].name === "comments") {
                    console.log("Found comments collection. Not creating new collection");
                    break;
                }
                else {
                    dbo.createCollection("comments", (err) => {
                        if (err) throw err;
                        console.log("Collection created!");
                    });
                }
            }
        });


        let query = {};
        dbo.collection("comments").find(query).toArray((err, result) => {
            if (err) throw err;
            res.send(result);
            res.end();
            db.close();
        });
    });

});


app.use(bodyParser.json());
app.post("/api/senddata", (req, res) => {
    MongoClient.connect(url, (err, db) => {
        if (err) throw err;
        let dbo = db.db(process.argv[2]);

        let avatarUrl = gravatar.url(req.body.author, {s: '50', r: 'pg', d: 'retro'}, false);
        let avatarProfile = gravatar.profile_url(req.body.author, {protocol: 'https'});

        axios.get(avatarProfile)
            .then(response => {
                addDocument(response.data)
            })
            .catch(error => {
                console.log(error);
                addDocument("");
            });

        let addDocument = (gravatarProfileData) => {
            let commentData = {
                author: req.body.author,
                text: req.body.text,
                time: req.body.time,
                gravatarImage: avatarUrl,
                gravatarProfile: gravatarProfileData
            };

            dbo.collection("comments").insertOne(commentData, (err) => {
                if (err) throw err;
                console.log("1 document inserted for author: " + commentData.author);
                db.close();
                res.send(commentData);
            });
        }


    });
});


app.listen(9002, () => console.log('Listening on port 9002!'))