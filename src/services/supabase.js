import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ioyfntxutptuuanlnsxw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlveWZudHh1dHB0dXVhbmxuc3h3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk4MzMxNDIsImV4cCI6MjAxNTQwOTE0Mn0.dIa00bAG_U_0AEPJ1BAu_DmrOcGQ-dDzw53f_3j9CuI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
