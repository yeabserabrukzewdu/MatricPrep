
import { createClient } from '@supabase/supabase-js';

// ------------------------------------------------------------------
// INSTRUCTIONS:
// 1. Go to your Supabase Dashboard -> Project Settings -> API
// 2. Copy the "Project URL" and paste it below.
// 3. Copy the "anon" / "public" Key and paste it below.
// ------------------------------------------------------------------

// We use a dummy 'https' URL as a default to prevent the app from crashing with "Invalid URL"
// if you haven't pasted your keys yet. Auth will fail gracefully instead of blocking the UI.
const supabaseUrl = process.env.SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseKey);
