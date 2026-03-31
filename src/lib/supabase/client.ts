import { createClient as createSupabaseClient } from "@supabase/supabase-js";

let _supabase: ReturnType<typeof createSupabaseClient> | null = null;

export function getSupabase() {
  const url = import.meta.env.PUBLIC_SUPABASE_URL;
  const key = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  if (!_supabase) _supabase = createSupabaseClient(url, key);
  return _supabase;
}
