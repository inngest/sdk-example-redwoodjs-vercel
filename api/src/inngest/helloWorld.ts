import { createFunction } from 'inngest'

export default createFunction('Hello World', 'demo/event.sent', ({ event }) => {
  return {
    message: `Hello, ${event.data.name}!`,
  }
})
