'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Sparkles, Paperclip, X } from 'lucide-react'

export default function SendMailPage() {
  const [attachments, setAttachments] = useState<File[]>([])
  const [addSignature, setAddSignature] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachments([...attachments, ...Array.from(e.target.files)])
    }
  }

  const removeAttachment = (index: number) => {
    setAttachments(attachments.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email sending logic here
    console.log('Sending email:', { addSignature })
  }

  const generateMailWithAI = () => {
    // Handle AI-powered email generation here
    console.log('Generating email with AI')
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Send Mail</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="recipient-name">Recipient Name</Label>
          <Input id="recipient-name" placeholder="Enter recipient's name" />
        </div>

        <div>
          <Label htmlFor="recipient-email">Recipient Email</Label>
          <Input id="recipient-email" type="email" placeholder="Enter recipient's email address" />
        </div>

        <div>
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" placeholder="Enter email subject" />
        </div>

        <div>
          <Label htmlFor="content">Content</Label>
          <Textarea id="content" placeholder="Enter your email content here" rows={10} />
        </div>

        <div className="flex justify-center">
          <Button type="button" onClick={generateMailWithAI} className="w-full">
            <Sparkles className="mr-2 h-4 w-4" />
            Generate Mail Using AI
          </Button>
        </div>

        <div>
          <Label htmlFor="file-upload">Attachments</Label>
          <div className="flex items-center space-x-2">
            <Input
              id="file-upload"
              type="file"
              multiple
              onChange={handleFileChange}
              className="hidden"
            />
            <Label
              htmlFor="file-upload"
              className="cursor-pointer inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <Paperclip className="mr-2 h-4 w-4" />
              Attach Files
            </Label>
          </div>
          {attachments.length > 0 && (
            <ul className="mt-2 space-y-2">
              {attachments.map((file, index) => (
                <li key={index} className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded-md">
                  <span className="text-sm truncate">{file.name}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeAttachment(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="add-signature"
            checked={addSignature}
            onCheckedChange={(checked) => setAddSignature(checked as boolean)}
          />
          <Label htmlFor="add-signature">Add Signature</Label>
        </div>

        <div className="flex justify-end space-x-2">
          <Button variant="outline">Save Draft</Button>
          <Button type="submit">Send Mail</Button>
        </div>
      </form>
    </div>
  )
}