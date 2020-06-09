"use strict";
import { open } from "sqlite";
import { bcrypt } from "bcryptjs";
import Login from "./loginform"

create();


async function create() {
    try {
        const db = await open("./db.sqlite");
        await db.run("create table users (id, email, password)");
        await db.run("insert into users values (1, 'polityrecords@gmail.com', 'Polity99')");
        await db.run("insert into users values (2, 'hodgebristol@gmail.com', 'Hodgemakesmusic123')");
    } catch (e) { console.log(e); }
}

async function checkDb(values) {
    
}

/*Why You Should Hash
All passwords should be hashed before entering a database because you have to consider the scenario where some malicious user attempts to gain entry into your data. Passwords are sensitive pieces of information that you don’t want people to see.

Now let’s not confuse encryption with hashing. Encrypting something assumes it can later be decrypted. Although this is better than leaving as plain text, what we really want is something that cannot be decrypted. This is what hashing offers us.

Hashing with Bcrypt
For this example we’re going to use the more popular bcryptjs library for Node.js. However, the rules it follows the same rules as other standard Bcrypt libraries. You pass in a string to be hashed and usually a salt as well.

For the example of bcryptjs you would do something like this, per the documentation:*/


var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("my-password", salt);

 