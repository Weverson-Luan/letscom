import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hwaubghchassrogcoynu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3YXViZ2hjaGFzc3JvZ2NveW51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3NjgzNTksImV4cCI6MjA0NjM0NDM1OX0.TPzvEDH3q4iqhqcYqxYv5XQBZLdw9quntUeJYAlCFeA";

export const supabase = createClient(supabaseUrl, supabaseKey);
