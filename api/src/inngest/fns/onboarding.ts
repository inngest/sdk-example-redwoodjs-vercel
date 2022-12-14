import { inngest } from '../client'

export default inngest.createStepFunction(
  'User Onboarding',
  'app/user.created',
  ({ event, tools: { run, waitForEvent } }) => {
    run('Send welcome email', async () => {
      await new Promise((resolve) => setTimeout(resolve, Math.random() * 1000))

      await inngest.send('app/welcome.sent', {
        data: { user_account_id: event.data.user_account_id },
      })

      return { emailId: '12345' }
    })

    const seen = waitForEvent('app/user.seen', {
      timeout: '1d',
      match: 'data.user_account_id',
    })

    if (!seen) {
      run('Send reminder email', async () => {
        await new Promise((resolve) =>
          setTimeout(resolve, Math.random() * 1000)
        )

        return { emailId: '67890' }
      })
    }
  }
)
