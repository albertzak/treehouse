const mqtt = require('mqtt')
const rcswitch = require('rcswitch')

rcswitch.enableTransmit(0)

const client = mqtt.connect('mqtt://broker')

client.on('connect', () => {
  console.log('connected')
  client.subscribe('rc/#')
  client.publish('presence', 'rcswitch')
})

client.on('message', (topic, buffer) => {
  const message = buffer.toString()
  console.log({ topic, message })

  const [ _, type, group, switchId ] = topic.split('/')

  const fn = send[type][message]
  if (fn) {
    const result = fn(group, switchId)
    console.log({ type, group, switchId, result })
  } else {
    console.error('Not implemented')
  }
})

const send = {
  A: {
    ON: (g, s) => rcswitch.switchOn(g, parseInt(s, 10)),
    OFF: (g, s) => rcswitch.switchOff(g, parseInt(s, 10))
  }
}
