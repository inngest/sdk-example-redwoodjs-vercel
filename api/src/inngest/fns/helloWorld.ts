import { inngest } from '../client'

export default inngest.createFunction('Hello World', 'demo/event.sent', () => {
  return 'Hello, Inngest!'
})
