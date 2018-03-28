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
    username: 'CC:22:3D:E1:33:71',
    port: 51826,
    pin: process.env.HOMEBRIDGE_PIN || '010-12-013'
  },
  description: 'Homebridge',
  accessories
}

const toJSON = obj => JSON.stringify(obj, null, 2)

console.log('--> Generated config', toJSON(homebridge))

fs.writeFileSync('/data/.homebridge/config.js', toJSON(homebridge))

console.log('--> Wrote config')

server()
