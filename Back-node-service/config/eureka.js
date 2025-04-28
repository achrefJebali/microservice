const { Eureka } = require('eureka-js-client');

const eurekaClient = new Eureka({
  instance: {
    app: 'EVALUATION-SERVICE', 
    instanceId: 'evaluation-service:5000',  
    hostName: 'localhost',
    ipAddr: '127.0.0.1',
    statusPageUrl: 'http://localhost:5000',
    port: {
      '$': 5000,
      '@enabled': true,
    },
    vipAddress: 'EVALUATION-SERVICE',
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn',
    },
  },
  eureka: {
    host: 'localhost',
    port: 8761,
    servicePath: '/eureka/apps/',
  },
});

module.exports = eurekaClient;
