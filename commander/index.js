const fs = require('fs')
const config = require('./config.json')
const server = require('./server.js')

console.log('--> Generating config')

const accessories = config.rcswitch.map(rc => {
  const topic = [
    'rc',
    rc.type || 'A',
    rc.group,
    rc.switch
  ].join('/')

  return {
    accessory: 'mqttswitch',
    name: rc.name,
    url: 'mqtt://localhost',
    caption: rc.name,
    topics: {
      statusGet: topic,
      statusSet: topic
    },
    onValue: 'ON',
    offValue: 'OFF'
  }
})

const homebridge = {
  bridge: {
    name: 'Homebridge',
    username: 'CC:22:3D:E1:33:72',
    port: 51826,
    pin: process.env.HOMEBRIDGE_PIN || '010-12-013'
  },
  description: 'Homebridge',
  accessories: [
    ...accessories,
    {
      accessory: 'mqtt-dimmer',
      name: 'Wohnzimmer Stehlampe',
      url: 'mqtt://localhost',
      onValue: 'ON',
      offValue: 'OFF',
      topics: {
        statusGet: 'dimmer/0/get',
        statusSet: 'dimmer/0/set'
      }
    },
    {
      accessory: 'mqtt-dimmer',
      name: 'Nachttischlampe (Glob) Dimmer',
      url: 'mqtt://localhost',
      onValue: 'ON',
      offValue: 'OFF',
      topics: {
        statusGet: 'dimmer/2/get',
        statusSet: 'dimmer/2/set'
      }
    },
    {
      accessory: 'mqtt-dimmer',
      name: 'Leselampe Dimmer',
      url: 'mqtt://localhost',
      onValue: 'ON',
      offValue: 'OFF',
      topics: {
        statusGet: 'dimmer/3/get',
        statusSet: 'dimmer/3/set'
      }
    },
    {
      accessory: 'mqtt-dimmer',
      name: 'Wohnzimmer Stehlampe Papier Dimmer',
      url: 'mqtt://localhost',
      onValue: 'ON',
      offValue: 'OFF',
      topics: {
        statusGet: 'dimmer/4/get',
        statusSet: 'dimmer/4/set'
      }
    },
    {
      accessory: 'mqtt-dimmer',
      name: 'TEST Dimmer 1',
      url: 'mqtt://localhost',
      onValue: 'ON',
      offValue: 'OFF',
      topics: {
        statusGet: 'dimmer/1/get',
        statusSet: 'dimmer/1/set'
      }
    },
    {
      accessory: 'RGBMQTTAccessory',
      name: 'TEST Bathroom Color',
      url: 'mqtt://localhost',
      topic: 'rgb/0'
    }
    // {
    //   accessory: 'BlindsMQTT',
    //   name: 'Vorhang',
    //   mqttBrokerUrl: 'mqtt://localhost',
    //   mqttMainTopic: 'curtains/0',
    //   mqttSetTopics: {
    //     targetPosition: 'set/targetPosition'
    //   },
    //   mqttGetTopics: {
    //     currentPosition: 'get/currentPosition',
    //     positionState: 'get/positionState',
    //     targetPosition: 'get/targetPosition'
    //   }
    // }
  ]
}

const toJSON = obj => JSON.stringify(obj, null, 2) + '\n'

console.log('--> Generated config', toJSON(homebridge))

fs.writeFileSync('/data/homebridge/config.json', toJSON(homebridge))

console.log('--> Wrote config')

server()
