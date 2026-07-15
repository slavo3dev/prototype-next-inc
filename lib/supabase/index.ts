import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
