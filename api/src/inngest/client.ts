import { Inngest } from 'inngest'

// npx inngest-cli types ts
import { Events } from 'src/__generated__/inngest'

export const inngest = new Inngest<Events>({ name: 'My RedwoodJS App' })
