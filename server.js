const {app, User} = require('./src/main');
const{MySql ,dbSnake}= require('./src/connections/snakeMySql');

app.listen(3000,()=> console.log('Server listen port 3000..'));

// //primer nivel
// this.config = {
//     database: '',
//     username: '',
//     password: '',
//     dbConfig: {
//         host: '',
//         dialect: 'mysql'
//     }
// };
// //segundo nivel
// const dbSnake2 = {
//     database: 'snake2',
//     username: '',
//     password: '',
//     dbConfig: {
//         host:'localhost:3306'
//     }
// };

// //tercer nivel
// configDB = {
//     database: '',
//     username: login.username,
//     password: login.password,
//     dbConfig: ''
// };

// //Fusionados
//  bb = {
//     database: 'snake2',
//     username: login.username,
//     password: login.password,
//     dbConfig: {
//         host: 'localhost:3306',
//         dialect: 'mysql'
//     } 
// };


const initMySql = async(login)=>{
    try {
        let configDB = {
            database: dbSnake.database,
            username: login.username,
            password: login.password,
            dbConfig: dbSnake.dbConfig
        };
        
        console.log(configDB);

        mysql = new MySql(configDB);
        //testDB
        console.log('test MySQL');
        await mysql.authenticate();
        console.log('OK connection..');

        User.init(mysql);

    } catch (error) {
        console.error(error);
    }
}


initMySql({username:'Cele',password:'123456'});