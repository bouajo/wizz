'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Sparkles } from 'lucide-react'

export default function GenerateDocumentPage() {
  const [documentType, setDocumentType] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle document generation logic here
    console.log('Generating document:', { documentType, content })
  }

  const generateWithAI = () => {
    // Handle AI-powered document generation here
    console.log('Generating document with AI')
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Generate Document</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="document-type">Document Type</Label>
          <Select value={documentType} onValueChange={setDocumentType}>
            <SelectTrigger id="document-type">
              <SelectValue placeholder="Select document type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="letter">Letter</SelectItem>
              <SelectItem value="report">Report</SelectItem>
              <SelectItem value="contract">Contract</SelectItem>
              <SelectItem value="proposal">Proposal</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="content">Content</Label>
          <Textarea
            id="content"
            placeholder="Enter your document content here"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={10}
          />
        </div>
        <div className="flex space-x-2">
          <Button type="submit">Generate Document</Button>
          <Button type="button" variant="outline" onClick={generateWithAI}>
            <Sparkles className="mr-2 h-4 w-4" />
            Generate with AI
          </Button>
        </div>
      </form>
    </div>
  )
}