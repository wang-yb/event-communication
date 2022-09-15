export default class EventCommunication {
  constructor() {
    this.eventMap = new Map()
  }
  $on(event, callback) {
    if(typeof callback !== 'function') {
      throw new Error('callback must be a function')
    }
    if(!event) {
      throw new Error('event name is not null')
    }
    if(!this.eventMap.get(event)) {
      this.eventMap.set(event, new Set())
    }
    this.eventMap.get(event).add(callback)
  }
  $emit(event, payload) {
    if(!event) {
      throw new Error('event name is not null')
    }
    const callbackSet = this.eventMap.get(event)
    callbackSet.forEach(callback => callback(payload))
  }
  $off(event, callback) {
    if(typeof callback !== 'function') {
      throw new Error('callback must be a function')
    }
    if(!event) {
      throw new Error('event name is not null')
    }
    const callbackSet = this.eventMap.get(event)
    if(!callbackSet) return
    callbackSet.delete(callback)
  }
}