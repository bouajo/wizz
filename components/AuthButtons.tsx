import React, { createContext } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const AuthButtons = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI ?? "";

  if (!redirectUri) {
    console.error("Missing NEXT_PUBLIC_REDIRECT_URI environment variable.");
  }

  return (
    <div>
      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      ) : (
        <>
          <p>Welcome, {user?.name || "User"}</p>
          <button
            onClick={() =>
              logout({
                logoutParams: { returnTo: redirectUri }, // Correct property for SDK logout
              })
            }
          >
            Log Out
          </button>
        </>
      )}
    </div>
  );
};

export default AuthButtons;
