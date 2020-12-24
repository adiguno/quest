import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import express = require('express');

const app: express.Application = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(3000, function () {
console.log('App is listening on port 3000!');
}); 

// createConnection().then(async connection => {

//     // console.log("Inserting a new user into the database...");
//     // let user = create1User();
//     // await connection.manager.save(user);
//     // console.log("Saved a new user with id: " + user.id);

//     // console.log("Loading users from the database...");
//     // const users = await connection.manager.find(User);
//     // console.log("Loaded users: ", users);

//     // console.log("Here you can setup and run express/koa/any other framework.");

//     console.log("Inserting a new user into the database...");
//     let users = createRandomUsers(5);
//     await connection.manager.save(users);
//     for (let user of users) {
//         console.log("Saved users: " + user.id);
//     }



// }).catch(error => console.log(error));

function create1User(): User {
    const user = new User();
    user.username = "Timber";
    user.password = "Saw";
    user.points = 25;
    return user;
}

function createRandomUsers(totalUser: number): Array<User> {
    let users: Array<User> = [];
    
    for (let i = 0; i < totalUser; i++) {
        const user = new User();
        user.username = makeRandomUsername(5);
        user.password = makeRandomUsername(5);
        user.points = 0;
        users.push(user);
    }

    return users;
}

function makeRandomUsername(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }