import {  v4 as uuid } from "uuid";

let users = [];

export const getUsers = (req, res) => {
    console.log(`Users in the database: ${users}`);

    res.send(users);
};

export const createUsers = (req, res) => {
    const user = req.body;

    const userId = uuid();
    users.push({...user, id: userId});

    console.log(`User ${user.username} added to the database.`);
    res.send("Post Route Reached");
};

export const getUser = (req, res) => {
    res.send(req.params.id);
};

export const deleteUser = (req, res) => {
    console.log(` User with id ${req.params.id} has been deleted`);
    users = users.filter((user) => user.id  !== req.params.id);
    res.send(` User with id ${req.params.id} has been deleted`);
};

export const updateUser = (req, res) => {
    const user = users.find((user) => user.id === req.params.id);
    user.username = req.body.username;
    user.age = req.body.age;

    console.log(`Username has been updated to ${req.body.username} . \n Age has been updated to ${req.body.age}`);
    res.send(`Username has been updated to ${req.body.username} . \n Age has been updated to ${req.body.age}`);

};

