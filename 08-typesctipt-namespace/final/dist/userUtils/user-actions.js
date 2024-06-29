import User from './../models/user.js';
let userList = [];
export function createUser(name, age, gender) {
    const u = new User(name, age, gender);
    userList.push(u);
    return u;
}
export function getUsers() {
    return userList;
}
