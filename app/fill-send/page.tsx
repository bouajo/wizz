'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Upload, Send, Paperclip, X } from 'lucide-react'

interface Message {
  id: string
  content: string
  sender: 'system' | 'user'
  timestamp: Date
}

export default function FillAndSendPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Upload your files and/or ask your request',
      sender: 'system',
      timestamp: new Date(),
    },
  ])
  const [newMessage, setNewMessage] = useState('')
  const [attachments, setAttachments] = useState<File[]>([])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setAttachments([...attachments, ...newFiles])
      
      // Add a message for each uploaded file
      newFiles.forEach(file => {
        setMessages(prev => [...prev, {
          id: Math.random().toString(),
          content: `File uploaded: ${file.name}`,
          sender: 'system',
          timestamp: new Date()
        }])
      })
    }
  }

  const removeAttachment = (index: number) => {
    setAttachments(attachments.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      setMessages(prev => [...prev, {
        id: Math.random().toString(),
        content: newMessage,
        sender: 'user',
        timestamp: new Date()
      }])
      setNewMessage('')
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Fill & Send</h1>
      
      <div className="space-y-6">
        {/* Chat messages */}
        <div className="border rounded-lg p-4 h-[400px] overflow-y-auto space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  message.sender === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>

        {/* Attachments */}
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

        {/* Message input */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button type="submit">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  )
}
