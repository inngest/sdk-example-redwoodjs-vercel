import { serve } from 'inngest/redwood'

import fns from 'src/inngest'
import { inngest } from 'src/inngest/client'

export const handler = serve(inngest, fns, {
  servePath: '/api/inngest',
})
