
import { createClient } from '@supabase/supabase-js';

// ------------------------------------------------------------------
// ENVIRONMENT CONFIGURATION
// This file now reads automatically from your Vercel/System environment variables.
// You do not need to edit this file if you set the variables in your deployment dashboard.
// ------------------------------------------------------------------

const getEnvVar = (key: string) => {
    if (typeof process !== 'undefined' && process.env) {
        // Check for standard name, React App prefix, or Vite prefix
        return process.env[key] || 
               process.env[`REACT_APP_${key}`] || 
               process.env[`VITE_${key}`] || 
               '';
    }
    return '';
};

// Attempt to retrieve keys from environment
const supabaseUrl = getEnvVar('SUPABASE_URL');
const supabaseKey = getEnvVar('SUPABASE_ANON_KEY');

// Helper to check if keys are found
export const isSupabaseConfigured = !!supabaseUrl && !!supabaseKey;

// If configured, create the real client. If not, create a dummy one to prevent crashes.
export const supabase = isSupabaseConfigured 
    ? createClient(supabaseUrl, supabaseKey) 
    : createClient('https://placeholder.supabase.co', 'placeholder'); 
