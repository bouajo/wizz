'use client';

import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { saveToken } from '@/lib/auth';

export default function RequireAuth({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading, loginWithRedirect, user, getAccessTokenSilently } = useAuth0();
  const [redirecting, setRedirecting] = useState(false);

  // Debug logging for immediate feedback
  console.log('RequireAuth mounted');
  console.log('isAuthenticated:', isAuthenticated);
  console.log('isLoading:', isLoading);
  console.log('redirecting:', redirecting);

  // Handle authentication and token fetching
  useEffect(() => {
    const handleAuth = async () => {
      try {
        if (!isLoading && !isAuthenticated && !redirecting) {
          console.log("User not authenticated. Redirecting to login...");
          setRedirecting(true);
          await loginWithRedirect();
        } else if (isAuthenticated) {
          console.log("User authenticated:", user);
          const token = await getAccessTokenSilently();
          console.log("Fetched token:", token);
          saveToken(token);
        }
      } catch (error) {
        console.error("Error in authentication process:", error);
      }
    };

    handleAuth();
  }, [isAuthenticated, isLoading, loginWithRedirect, redirecting, user, getAccessTokenSilently]);

  // Show loading state while authenticating or redirecting
  if (isLoading || redirecting) {
    return <div>Loading...</div>;
  }

  // Don't render children until authenticated
  if (!isAuthenticated) {
    return null;
  }

  // Render children when authenticated
  return <>{children}</>;
}
