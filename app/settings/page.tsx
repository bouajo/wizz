'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { PlusCircle, Trash2 } from 'lucide-react'

// Dummy data for team members
const initialTeamMembers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer' },
]

export default function SettingsPage() {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers)
  const [newMember, setNewMember] = useState({ name: '', email: '', role: 'Viewer' })

  const addTeamMember = () => {
    setTeamMembers([...teamMembers, { ...newMember, id: Date.now() }])
    setNewMember({ name: '', email: '', role: 'Viewer' })
  }

  const removeTeamMember = (id: number) => {
    setTeamMembers(teamMembers.filter(member => member.id !== id))
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="integration">Integration</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>
        <TabsContent value="general">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="company-name">Company Name</Label>
              <Input id="company-name" placeholder="Enter your company name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company-address">Company Address</Label>
              <Input id="company-address" placeholder="Enter your company address" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-email">Contact Email</Label>
              <Input id="contact-email" type="email" placeholder="Enter your contact email" />
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="dark-mode" />
              <Label htmlFor="dark-mode">Enable Dark Mode</Label>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="integration">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Available Integrations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border p-4 rounded-lg">
                <h3 className="font-semibold">Google Drive</h3>
                <p className="text-sm text-gray-600 mb-2">Connect your Google Drive account</p>
                <Button>Connect</Button>
              </div>
              <div className="border p-4 rounded-lg">
                <h3 className="font-semibold">Dropbox</h3>
                <p className="text-sm text-gray-600 mb-2">Connect your Dropbox account</p>
                <Button>Connect</Button>
              </div>
              <div className="border p-4 rounded-lg">
                <h3 className="font-semibold">Slack</h3>
                <p className="text-sm text-gray-600 mb-2">Connect your Slack workspace</p>
                <Button>Connect</Button>
              </div>
              <div className="border p-4 rounded-lg">
                <h3 className="font-semibold">Microsoft Teams</h3>
                <p className="text-sm text-gray-600 mb-2">Connect your Microsoft Teams account</p>
                <Button>Connect</Button>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="security">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input id="confirm-password" type="password" />
            </div>
            <Button>Change Password</Button>
            <div className="flex items-center space-x-2 mt-4">
              <Switch id="two-factor" />
              <Label htmlFor="two-factor">Enable Two-Factor Authentication</Label>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="team">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Team Members</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Team Member
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Team Member</DialogTitle>
                    <DialogDescription>
                      Enter the details of the new team member.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={newMember.name}
                        onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={newMember.email}
                        onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Role</Label>
                      <select
                        id="role"
                        className="w-full p-2 border rounded"
                        value={newMember.role}
                        onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                      >
                        <option>Viewer</option>
                        <option>Editor</option>
                        <option>Admin</option>
                      </select>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button onClick={addTeamMember}>Add Member</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {teamMembers.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell>{member.name}</TableCell>
                    <TableCell>{member.email}</TableCell>
                    <TableCell>{member.role}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeTeamMember(member.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        <TabsContent value="billing">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Billing Information</h2>
            <div className="space-y-2">
              <Label htmlFor="billing-email">Billing Email</Label>
              <Input id="billing-email" type="email" placeholder="Enter billing email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="billing-address">Billing Address</Label>
              <Input id="billing-address" placeholder="Enter billing address" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="payment-method">Payment Method</Label>
              <select id="payment-method" className="w-full p-2 border rounded">
                <option>Credit Card</option>
                <option>PayPal</option>
                <option>Bank Transfer</option>
              </select>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Current Plan</h3>
              <p>Professional Plan - $49/month</p>
              <Button>Upgrade Plan</Button>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Billing History</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>2023-05-01</TableCell>
                    <TableCell>$49.00</TableCell>
                    <TableCell>Paid</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2023-04-01</TableCell>
                    <TableCell>$49.00</TableCell>
                    <TableCell>Paid</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2023-03-01</TableCell>
                    <TableCell>$49.00</TableCell>
                    <TableCell>Paid</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}