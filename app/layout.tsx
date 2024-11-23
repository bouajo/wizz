'use client';

import { Auth0Provider } from '@auth0/auth0-react';
import ThemeProvider from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import RequireAuth from "@/components/RequireAuth";
import "@/app/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Auth0Provider
          domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN!}
          clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!}
          authorizationParams={{
            redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI!,
            audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE!,
            scope: "openid profile email write:files",
            useRefreshTokens: true,
            useRefreshTokensFallback: false
          }}
        >
          <RequireAuth>
            <ThemeProvider>
              <div className="min-h-screen flex">
                <Sidebar />
                <div className="flex-1">
                  <Header />
                  <main className="app-container">{children}</main>
                </div>
              </div>
            </ThemeProvider>
          </RequireAuth>
        </Auth0Provider>
      </body>
    </html>
  );
}
