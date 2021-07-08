const userService = require('./users.services');

const getUsers = async()=>{
    return await  userService.getUsers();
}

const getUserId = async(id)=>{
    return await userService.getUserId(id);
}

const postUser = async(body)=> {
    return await userService.postUser(body);
}

module.exports = {getUsers, getUserId, postUser};