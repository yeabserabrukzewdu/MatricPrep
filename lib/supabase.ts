
import { createClient } from '@supabase/supabase-js';

// ------------------------------------------------------------------
// ENVIRONMENT CONFIGURATION
// ------------------------------------------------------------------

// Helper to safely read environment variables.
// CRITICAL: Bundlers (Vite, Webpack) often only replace explicitly used variables (e.g. process.env.MY_VAR).
// They might NOT handle dynamic access (process.env[key]).
// We must explicitly check common naming conventions.

const getSupabaseCredentials = () => {
    let url = '';
    let key = '';

    // 1. Try Vite (import.meta.env) - Common for Vercel + Vite deployments
    try {
        // @ts-ignore
        if (typeof import.meta !== 'undefined' && import.meta.env) {
            // @ts-ignore
            url = import.meta.env.VITE_SUPABASE_URL || import.meta.env.SUPABASE_URL;
            // @ts-ignore
            key = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.SUPABASE_ANON_KEY;
        }
    } catch (e) {}

    // 2. Try Node/Process (CRA, Next.js) - Fallback
    if (!url || !key) {
        if (typeof process !== 'undefined' && process.env) {
            // Check all common prefixes explicitly for bundler replacement
            url = process.env.REACT_APP_SUPABASE_URL || 
                  process.env.NEXT_PUBLIC_SUPABASE_URL || 
                  process.env.VITE_SUPABASE_URL || 
                  process.env.SUPABASE_URL || 
                  '';

            key = process.env.REACT_APP_SUPABASE_ANON_KEY || 
                  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 
                  process.env.VITE_SUPABASE_ANON_KEY || 
                  process.env.SUPABASE_ANON_KEY || 
                  '';
        }
    }

    return { url, key };
};

const { url, key } = getSupabaseCredentials();

// Helper to check if keys are found
export const isSupabaseConfigured = !!url && !!key && !url.includes('placeholder');

// If configured, create the real client. If not, create a dummy one to prevent crashes.
export const supabase = isSupabaseConfigured 
    ? createClient(url, key) 
    : createClient('https://placeholder.supabase.co', 'placeholder');
