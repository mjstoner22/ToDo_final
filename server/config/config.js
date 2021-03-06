var path = require('path'),    
rootPath = path.normalize(__dirname + '/..'),    
env = process.env.NODE_ENV || 'development';

var config = {  
development: {    
            root: rootPath,    
            app: {      name: 'ToDo'    },    
            port: 5000,  
            db: 'mongodb://127.0.0.1/todo-dev',
            uploads: rootPath + "/public/uploads/",            
            secret: "MerryChristmas"
 },  

 test: {    
  root: rootPath,    
  app: {      name: 'ToDo'    },    
  port: 4000,
  db: 'mongodb://127.0.0.1/todo-test',
  secret: "MerryChristmas"
}, 
 
 production: {    
              root: rootPath,    
              app: {      name: 'ToDo'    },    
               port: 80,
               db: 'mongodb://127.0.0.1/todo',
               secret: "MerryChristmas"
              }
  };

module.exports = config[env];