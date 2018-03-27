const mqtt = require('mqtt')
const childProcess = require('child_process')

const sendCode = code => {
  return childProcess.execFile('./433Utils/RPi_utils/codesend', [code])
}

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
    return sendCode('5571921')
  }

  if (message.toString() === 'OFF') {
    console.log('sending OFF')
    return sendCode('5571924')
  }
})
