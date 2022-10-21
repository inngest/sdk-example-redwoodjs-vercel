import { serve } from 'inngest/redwood'

import helloWorld from 'src/inngest/helloWorld'

export const handler = serve('My App', [helloWorld])
