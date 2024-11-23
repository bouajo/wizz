'use client';

import { Auth0Provider } from '@auth0/auth0-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, Send, PlusCircle } from 'lucide-react'
import RequireAuth from '@/components/RequireAuth'

const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN!}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!}
      authorizationParams={{
        redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI!,
        audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE!,
      }}
    >
      <RequireAuth>
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Documents</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">+20% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Documents Sent</CardTitle>
                <Send className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">567</div>
                <p className="text-xs text-muted-foreground">+15% from last month</p>
              </CardContent>
            </Card>
            {/* Add more cards for other metrics */}
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col space-y-2">
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" /> Create New Document
                </Button>
                <Button variant="outline">
                  <Send className="mr-2 h-4 w-4" /> Send Document
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recent Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Q4 Financial Report.pdf</span>
                    <span className="text-muted-foreground">2 days ago</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Project Proposal.docx</span>
                    <span className="text-muted-foreground">5 days ago</span>
                  </li>
                  {/* Add more recent documents */}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Important Dates</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Customer X Renewal</span>
                    <span className="text-muted-foreground">June 15, 2023</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Board Meeting</span>
                    <span className="text-muted-foreground">June 30, 2023</span>
                  </li>
                  {/* Add more important dates */}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </RequireAuth>
    </Auth0Provider>
  )
}

export default Page
