import { inngest } from '../client'

export default inngest.createScheduledFunction(
  'Purge cache every morning',
  '0 8 * * *',
  async () => {
    // Purge the cache
    await new Promise((resolve) => setTimeout(resolve, Math.random() * 1000))
  }
)
