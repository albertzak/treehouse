const mqtt = require('mqtt')
const rcswitch = require('rcswitch')

rcswitch.enableTransmit(0)

const client = mqtt.connect('mqtt://broker')

client.on('connect', () => {
  console.log('connected')
  client.subscribe('#')
  client.publish('presence', 'rcswitch')
})

client.on('message', (topic, message) => {
  console.log('topic:', topic, 'message:', message.toString())
  if (message.toString() === 'ON') {
    console.log('sending ON')
    return rcswitch.switchOn('00001', 1)
  }

  if (message.toString() === 'OFF') {
    console.log('sending OFF')
    return rcswitch.switchOff('00001', 1)
  }
})
