
import { createClient } from '@supabase/supabase-js';

// ------------------------------------------------------------------
// ENVIRONMENT CONFIGURATION
// ------------------------------------------------------------------

// Helper to safely read environment variables.
const getSupabaseCredentials = () => {
    let url = '';
    let key = '';

    // 0. Try LocalStorage (Manual Override for immediate fix)
    try {
        if (typeof window !== 'undefined') {
            const storedUrl = localStorage.getItem('supabase_url');
            const storedKey = localStorage.getItem('supabase_key');
            if (storedUrl && storedKey) {
                return { url: storedUrl, key: storedKey };
            }
        }
    } catch (e) {}

    // 1. Try Vite (import.meta.env) - Standard for Vite/Vercel builds
    try {
        // Use 'any' cast to avoid TS error if types aren't configured for Vite
        const meta = import.meta as any;
        if (typeof meta !== 'undefined' && meta.env) {
            url = meta.env.VITE_SUPABASE_URL || meta.env.SUPABASE_URL;
            key = meta.env.VITE_SUPABASE_ANON_KEY || meta.env.SUPABASE_ANON_KEY;
        }
    } catch (e) {}

    // 2. Try Process Env - Fallback for other environments
    if (!url || !key) {
        try {
             if (typeof process !== 'undefined' && process.env) {
                // Check VITE_ prefix explicitly first (most likely for Vercel+Vite)
                url = process.env.VITE_SUPABASE_URL || 
                      process.env.REACT_APP_SUPABASE_URL || 
                      process.env.NEXT_PUBLIC_SUPABASE_URL || 
                      process.env.SUPABASE_URL || 
                      '';

                key = process.env.VITE_SUPABASE_ANON_KEY || 
                      process.env.REACT_APP_SUPABASE_ANON_KEY || 
                      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 
                      process.env.SUPABASE_ANON_KEY || 
                      '';
            }
        } catch (e) {}
    }

    return { url, key };
};

const { url, key } = getSupabaseCredentials();

// Helper to check if keys are found
export const isSupabaseConfigured = !!url && !!key && !url.includes('placeholder');

// Debug log to help user troubleshoot in browser console
if (!isSupabaseConfigured) {
    console.warn("⚠️ Supabase is not configured. Using placeholder client.");
    console.warn("If you are on Vercel, ensure your Env Vars start with 'VITE_'. E.g. 'VITE_SUPABASE_URL'");
}

// If configured, create the real client. If not, create a dummy one to prevent crashes.
export const supabase = isSupabaseConfigured 
    ? createClient(url, key) 
    : createClient('https://placeholder.supabase.co', 'placeholder');

// Function to manually save config from UI
export const saveSupabaseConfig = (newUrl: string, newKey: string) => {
    localStorage.setItem('supabase_url', newUrl);
    localStorage.setItem('supabase_key', newKey);
    window.location.reload();
};

// Function to clear manual config
export const clearSupabaseConfig = () => {
    localStorage.removeItem('supabase_url');
    localStorage.removeItem('supabase_key');
    window.location.reload();
};
