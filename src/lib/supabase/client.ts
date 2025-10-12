// src/lib/supabase/client.ts
import { createBrowserClient } from '@supabase/ssr'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export function createClient() {
  // Use SSR browser client so auth is stored in cookies (readable by middleware/server)
  return createBrowserClient(supabaseUrl, supabaseAnonKey)
}

export const supabase = createClient()

