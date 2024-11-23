'use client';

import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  console.log('Auth0 Domain:', process.env.NEXT_PUBLIC_AUTH0_DOMAIN);
  console.log('Auth0 Client ID:', process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID);
  console.log('Redirect URI:', process.env.NEXT_PUBLIC_REDIRECT_URI);

  if (!process.env.NEXT_PUBLIC_AUTH0_DOMAIN || !process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID) {
    console.error('Missing required Auth0 environment variables');
    return null;
  }

  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
        audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE,
      }}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthWrapper;
