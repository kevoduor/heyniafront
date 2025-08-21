import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://sfscbcixatfqtznrbmqj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmc2NiY2l4YXRmcXR6bnJibXFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQyMTk0NjQsImV4cCI6MjA2OTc5NTQ2NH0.4X1gEN_KGuk2E4QqnrGkFIcTEpEC5uhohnU-zCJFohQ'
);
