'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { PlusCircle, Search, MoreVertical, File, Folder, Upload, ChevronRight, ChevronDown } from 'lucide-react'

interface FolderItem {
  id: number;
  name: string;
  children?: FolderItem[];
}

const documents = [
  { id: 1, name: 'Q4 Financial Report.pdf', type: 'PDF', size: '2.5 MB', lastModified: '2023-12-15', date: '2023-12-01', category: 'Finance', stakeholders: ['John Doe', 'Jane Smith', 'Mike Johnson'] },
  { id: 2, name: 'Project Proposal.docx', type: 'Word', size: '1.8 MB', lastModified: '2023-12-14', date: '2023-12-10', category: 'Projects', stakeholders: ['Emily Brown', 'David Wilson'] },
  { id: 3, name: 'Meeting Minutes.txt', type: 'Text', size: '32 KB', lastModified: '2023-12-13', date: '2023-12-12', category: 'Administration', stakeholders: ['Sarah Lee', 'Tom Clark'] },
  { id: 4, name: 'Marketing Strategy.pptx', type: 'PowerPoint', size: '5.2 MB', lastModified: '2023-12-12', date: '2023-12-05', category: 'Marketing', stakeholders: ['Neil Patrick', 'Rachel Green'] },
  { id: 5, name: 'Budget Forecast.xlsx', type: 'Excel', size: '1.1 MB', lastModified: '2023-12-11', date: '2023-12-08', category: 'Finance', stakeholders: ['John Doe', 'Lisa Wong'] },
]

const initialFolderStructure: FolderItem[] = [
  {
    id: 1,
    name: 'Company Documents',
    children: [
      {
        id: 2,
        name: 'Finance',
        children: [
          { id: 3, name: 'Reports' },
          { id: 4, name: 'Budgets' }
        ],
      },
      {
        id: 5,
        name: 'HR',
        children: [
          { id: 6, name: 'Policies' },
          { id: 7, name: 'Employee Records' }
        ],
      },
      {
        id: 8,
        name: 'Projects',
        children: [
          { id: 9, name: 'Active' },
          { id: 10, name: 'Archived' }
        ],
      },
    ],
  },
]

export default function DocumentsPage() {
  const [isClient, setIsClient] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [dragActive, setDragActive] = useState(false)
  const [folderStructure, setFolderStructure] = useState(initialFolderStructure)
  const [expandedFolders, setExpandedFolders] = useState<number[]>([1])

  useEffect(() => {
    setIsClient(true)
  }, [])

  const filteredDocuments = documents.filter(doc =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      console.log("File(s) dropped")
      // Handle file upload here
    }
  }

  const toggleFolder = (folderId: number) => {
    setExpandedFolders(prev =>
      prev.includes(folderId)
        ? prev.filter(id => id !== folderId)
        : [...prev, folderId]
    )
  }

  const renderFolderStructure = (folders: FolderItem[]) => {
    return folders.map(folder => (
      <div key={folder.id} className="ml-4">
        <div
          className="flex items-center cursor-pointer hover:bg-accent hover:text-accent-foreground p-1 rounded"
          onClick={() => toggleFolder(folder.id)}
        >
          {folder.children ? (
            expandedFolders.includes(folder.id) ? (
              <ChevronDown className="h-4 w-4 mr-1" />
            ) : (
              <ChevronRight className="h-4 w-4 mr-1" />
            )
          ) : (
            <div className="w-4 mr-1" />
          )}
          <Folder className="h-4 w-4 mr-2 text-primary" />
          <span>{folder.name}</span>
        </div>
        {folder.children && expandedFolders.includes(folder.id) && renderFolderStructure(folder.children)}
      </div>
    ))
  }

  if (!isClient) {
    return <div>Loading...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Documents</h1>
        <div className="flex gap-2">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> Create New Document
          </Button>
          <Button variant="outline">
            <Folder className="mr-2 h-4 w-4" /> New Folder
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Drag and Drop Upload Area */}
        <div
          className={`p-6 border-2 border-dashed rounded-lg text-center ${
            dragActive ? 'border-primary bg-primary/10' : 'border-muted'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
          <p className="mt-2 text-sm text-muted-foreground">Drag and drop files here, or click to select files</p>
          <input
            id="file-upload"
            name="file-upload"
            type="file"
            className="sr-only"
            multiple
            onChange={(e) => {
              console.log("File(s) selected")
              // Handle file selection here
            }}
          />
          <label
            htmlFor="file-upload"
            className="mt-2 cursor-pointer inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
          >
            Select files
          </label>
        </div>

        {/* Directory Tree */}
        <div className="bg-card p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Directory</h2>
          {renderFolderStructure(folderStructure)}
        </div>

        {/* Search Bar */}
        <div className="flex items-center space-x-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search documents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Documents Table */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Stakeholders</TableHead>
                <TableHead>Last Modified</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDocuments.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      <File className="h-4 w-4 text-primary mr-2" />
                      {doc.name}
                    </div>
                  </TableCell>
                  <TableCell>{doc.type}</TableCell>
                  <TableCell>{doc.size}</TableCell>
                  <TableCell>{doc.category}</TableCell>
                  <TableCell>{doc.date}</TableCell>
                  <TableCell>{doc.stakeholders.join(', ')}</TableCell>
                  <TableCell>{doc.lastModified}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View</DropdownMenuItem>
                        <DropdownMenuItem>Download</DropdownMenuItem>
                        <DropdownMenuItem>Rename</DropdownMenuItem>
                        <DropdownMenuItem>Move</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}