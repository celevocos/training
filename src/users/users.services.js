const { User } = require('./users.entity');

/* const users=[
    {
        username:'cele',
        fullname:'Celeste Vocos',
        email: 'celestevocos@gmail.com',
        password: '123'
    },
    {
        username:'gaby',
        fullname:'Gabriela Rincon2',
        email: 'gabriela.rincon27@gmail.com',
        password: '1234'
    },
    {
        username:'nico',
        fullname:'Nicolas',
        email: 'nico.123@gmail.com',
        password: '1234'
    }

    ] */

const getUsers = async () => {
    return await User.findAll();
}

const getUserId = async (id) => {
    //let user = users.find((elemento) => elemento.username === id)
    return await User.findAll({
        where: {
            username: id
        }
    });
}

const postUser = async (body) => {

    //users.push(body);
    return await User.create({
        username: body.username,
        fullname:body.fullname,
        email: body.email,
        password: body.password
    });        
 // { fields: ['username', 'fullname', 'email', 'password']
}

module.exports = { getUsers, getUserId, postUser };
    //module.exports={getUserId};
