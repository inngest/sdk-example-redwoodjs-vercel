import { serve } from 'inngest/redwood'

import fns from 'src/inngest'

export const handler = serve('My RedwoodJS App', fns)
