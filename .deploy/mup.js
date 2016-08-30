module.exports = {
  servers: {
    one: {
      host: '45.55.72.71',
      username: 'root',
      // pem:
      password: 'dinerappdigitalocean'
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'diner',
    path: '../',
    servers: {
      one: {}
    },
    buildOptions: {
      // serverOnly: true,
    },
    env: {
      ROOT_URL: 'http://45.55.72.71',
      MONGO_URL: 'mongodb://localhost/meteor'
    },

    //dockerImage: 'kadirahq/meteord'
    deployCheckWaitTime: 60
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};
// module.exports = {
//   servers: {
//     one: {
//       host: '45.55.72.71',
//       username: 'root',
//       //password: '29ae7603d4fac547'
//       password: 'dinerappdigitalocean'
//       // password:
//       // or leave blank for authenticate from ssh-agent
//     }
//   },
//
//   meteor: {
//     name: 'diner',
//     path: '.',
//     servers: {
//       one: {}
//     },
//     buildOptions: {
//       //serverOnly: true,
//     },
//     env: {
//       ROOT_URL: 'http://45.55.72.71',
//       MONGO_URL: 'mongodb://jmares93:pfizer2016@ds051740.mlab.com:51740/diner_mongodb'
//     },
//
//     //dockerImage: 'kadirahq/meteord'
//     deployCheckWaitTime: 60
//   },
//
//   mongo: {
//     oplog: true,
//     port: 27017,
//     servers: {
//       one: {},
//     },
//   },
// };