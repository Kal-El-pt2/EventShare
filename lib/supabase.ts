import {createClient} from "@supabase/supabase-js";

const SUPABASE_URL = "https://xfyygvnsxhgdphyvjfem.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmeXlndm5zeGhnZHBoeXZqZmVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4NDIyNDEsImV4cCI6MjA1NzQxODI0MX0.pN2ahP5z6_Faa0ys6yTmdeHLGTb3-JBTloYwddImBvE";

export const supabase = createClient(SUPABASE_URL,SUPABASE_ANON_KEY);