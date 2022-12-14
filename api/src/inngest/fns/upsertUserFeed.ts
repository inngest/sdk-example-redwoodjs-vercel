import { inngest } from '../client'

export default inngest.createFunction(
  'Upsert User Feed',
  'app/user.created',
  async ({ event }) => {
    await new Promise((resolve) => setTimeout(resolve, Math.random() * 5000))

    await inngest.send('app/user.feed.created', {
      data: { user_account_id: event.data.user_account_id },
    })

    return { itemsGenerated: 347 }
  }
)
