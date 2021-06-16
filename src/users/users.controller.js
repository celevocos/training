const userService = require('./users.services');

const getUsers =()=>{
    return userService.getUsers();
}

const getUserId =(id)=>{
    return userService.getUserId(id);
}

const postUser = (body)=> {
    return userService.postUser(body);
}

module.exports = {getUsers, getUserId, postUser};