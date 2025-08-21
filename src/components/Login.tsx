import { supabase } from '../lib/supabaseClient';
const handleGoogleSignIn = async () => {
  const redirectTo = window.location.origin + '/dashboard';
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo }
  });
  if (error) console.error('Sign-in error:', error.message);
};
<button type="button" onClick={handleGoogleSignIn}>
  Sign in with Google
</button>

/* Supabase Google login integration */
import { supabase } from '../lib/supabaseClient';
import { useEffect, useState } from 'react';

const [user, setUser] = useState(null);

useEffect(() => {
  supabase.auth.getSession().then(({ data: { session } }) => setUser(session?.user ?? null));
}, []);

const handleGoogleSignIn = async () => {
  const redirectTo = window.location.origin + '/dashboard';
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo }
  });
  if (error) console.error('Sign-in error:', error.message);
};

<button type="button" onClick={handleGoogleSignIn}>Sign in with Google</button>

// --- Supabase Google login integration ---
import { supabase } from '../lib/supabaseClient';
import { useEffect, useState } from 'react';

const [user, setUser] = useState(null);

useEffect(() => {
  supabase.auth.getSession().then(({ data: { session } }) => setUser(session?.user ?? null));
}, []);

const handleGoogleSignIn = async () => {
  const redirectTo = window.location.origin + '/dashboard';
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo }
  });
  if (error) console.error('Sign-in error:', error.message);
};
