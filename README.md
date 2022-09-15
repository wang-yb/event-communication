## Super simple to use

### 引用
```js
import EventCommunication from 'event-communication'

window.$eventBus = new EventCommunication()

```
### 使用
```js
window.$eventBus.$emit('eventname', 'payload')

window.$eventBus.$on('eventname', () => {})

window.$eventBus.$of('eventname', () => {})

```