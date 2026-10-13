import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://ahqboswfnwgqjpysxsok.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFocWJvc3dmbndncWpweXN4c29rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5MjcxODAsImV4cCI6MjA2NzUwMzE4MH0.i6j5a_VtTasCYilzLhi2BYZYemKhOWeoeVL2PKDLmnw";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
