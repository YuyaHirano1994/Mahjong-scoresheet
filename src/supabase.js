import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

// supabase.from("records").select("*").order("created_at", { ascending: false });
// supabase.from("records").insert();

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
