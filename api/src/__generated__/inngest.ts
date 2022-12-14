// Generated via inngest types

export type App__User_Created = {
  name: 'app/user.created'
  ts: number
  v: string
  data: {
    user_account_id: string
  }
}

export type App__User_Feed_Created = {
  name: 'app/user.feed.created'
  ts: number
  v: string
  data: {
    user_account_id: string
  }
}

export type App__Welcome_Sent = {
  name: 'app/welcome.sent'
  ts: number
  v: string
  data: {
    user_account_id: string
  }
}

export type App__User_Seen = {
  name: 'app/user.seen'
  ts: number
  v: string
  data: {
    user_account_id: string
  }
}

export type Demo__Event_Sent = {
  data: {
    foo: string
  }
  ts: number
  name: 'demo/event.sent'
}

type CustomEvent = {
  name: string
  data: Record<string, any>
  user?: Record<string, any>
}

type GeneratedEvents = Readonly<{
  'app/user.created': Readonly<App__User_Created>
  'app/user.feed.created': Readonly<App__User_Feed_Created>
  'app/welcome.sent': Readonly<App__Welcome_Sent>
  'app/user.seen': Readonly<App__User_Seen>
  'demo/event.sent': Readonly<Demo__Event_Sent>
}>

/**
 * Events generated from real data in your Inngest Cloud account. Can be passed
 * an object containing custom events if you wisht to send events not yet in
 * your ecosystem.
 *
 * ```ts
 * const inngest = new Inngest<
 *   Events<{
 *     "app/user.created": {
 *       data: { id: string; email: string };
 *     };
 *   }>
 * >({ name: "My App" });
 * ```
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export type Events<CustomEvents extends Record<string, CustomEvent> = {}> =
  Readonly<Omit<CustomEvents, keyof GeneratedEvents> & GeneratedEvents>
