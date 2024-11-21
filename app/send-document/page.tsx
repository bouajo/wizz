'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Upload, Sparkles, Paperclip, X } from 'lucide-react'

export default function SendDocumentPage() {
  const [documentType, setDocumentType] = useState<'letter' | 'email'>('letter')
  const [attachments, setAttachments] = useState<File[]>([])
  const [letterDate, setLetterDate] = useState(new Date().toISOString().split('T')[0])
  const [addSignature, setAddSignature] = useState(false)
  const [addCompanyStamp, setAddCompanyStamp] = useState(false)

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
    // Handle document sending logic here
    console.log('Sending document:', { documentType, addSignature, addCompanyStamp })
  }

  const generateWithAI = () => {
    // Handle AI-powered document generation here
    console.log('Generating document with AI')
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Send Document</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <RadioGroup defaultValue="letter" onValueChange={(value) => setDocumentType(value as 'letter' | 'email')}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="letter" id="letter" />
            <Label htmlFor="letter">Send Letter</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="email" id="email" />
            <Label htmlFor="email">Send Email</Label>
          </div>
        </RadioGroup>

        <div>
          <Label htmlFor="recipient-name">Recipient Name</Label>
          <Input id="recipient-name" placeholder="Enter recipient's name" />
        </div>

        {documentType === 'letter' ? (
          <div>
            <Label htmlFor="recipient-address">Recipient Address</Label>
            <Textarea id="recipient-address" placeholder="Enter recipient's address" rows={3} />
          </div>
        ) : (
          <div>
            <Label htmlFor="recipient-email">Recipient Email</Label>
            <Input id="recipient-email" type="email" placeholder="Enter recipient's email address" />
          </div>
        )}

        {documentType === 'letter' && (
          <div>
            <Label htmlFor="letter-date">Date</Label>
            <Input
              id="letter-date"
              type="date"
              value={letterDate}
              onChange={(e) => setLetterDate(e.target.value)}
            />
          </div>
        )}

        <div>
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" placeholder="Enter subject" />
        </div>

        {documentType === 'letter' && (
          <div>
            <Label htmlFor="template">Template</Label>
            <Select>
              <SelectTrigger id="template">
                <SelectValue placeholder="Select a template" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="blank">Blank Letter</SelectItem>
                <SelectItem value="business">Business Letter</SelectItem>
                <SelectItem value="formal">Formal Letter</SelectItem>
                <SelectItem value="personal">Personal Letter</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        <div>
          <Label htmlFor="content">Content</Label>
          <Textarea id="content" placeholder={`Enter your ${documentType} content here`} rows={10} />
        </div>

        <div className="flex justify-center">
          <Button type="button" onClick={generateWithAI} className="w-full">
            <Sparkles className="mr-2 h-4 w-4" />
            Generate {documentType === 'letter' ? 'Letter' : 'Email'} Using AI
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
              {documentType === 'letter' ? (
                <Upload className="mr-2 h-4 w-4" />
              ) : (
                <Paperclip className="mr-2 h-4 w-4" />
              )}
              {documentType === 'letter' ? 'Upload Document' : 'Attach Files'}
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

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="add-signature"
              checked={addSignature}
              onCheckedChange={(checked) => setAddSignature(checked as boolean)}
            />
            <Label htmlFor="add-signature">Add Signature</Label>
          </div>
          {documentType === 'letter' && (
            <div className="flex items-center space-x-2">
              <Checkbox
                id="add-company-stamp"
                checked={addCompanyStamp}
                onCheckedChange={(checked) => setAddCompanyStamp(checked as boolean)}
              />
              <Label htmlFor="add-company-stamp">Add Company Stamp</Label>
            </div>
          )}
        </div>

        <div className="flex justify-end space-x-2">
          <Button variant="outline">Save Draft</Button>
          <Button type="submit">Send {documentType === 'letter' ? 'Letter' : 'Email'}</Button>
        </div>
      </form>
    </div>
  )
}