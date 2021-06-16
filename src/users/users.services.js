const users=[
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

    ]
    
    const getUsers =()=>
    {
    return users;
    }
    
    const getUserId =(id)=>
    {
    let user = users.find((elemento) => elemento.username === id)
    return user;
    }

    const postUser = (body) =>{

        users.push(body);
        return body;
    
    }

    module.exports={getUsers, getUserId, postUser};
    //module.exports={getUserId};
    