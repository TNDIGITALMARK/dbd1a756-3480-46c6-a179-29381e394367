'use client';

import { useState, useCallback } from 'react';
import { Upload, Video, X, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface UploadFile {
  file: File;
  progress: number;
  status: 'uploading' | 'completed' | 'error';
  thumbnail?: string;
}

export function UploadDropzone() {
  const [isDragOver, setIsDragOver] = useState(false);
  const [files, setFiles] = useState<UploadFile[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    const videoFiles = droppedFiles.filter(file => file.type.startsWith('video/'));

    videoFiles.forEach(file => {
      const uploadFile: UploadFile = {
        file,
        progress: 0,
        status: 'uploading'
      };

      setFiles(prev => [...prev, uploadFile]);

      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setFiles(prev => prev.map(f =>
          f.file === file && f.progress < 100
            ? { ...f, progress: Math.min(f.progress + Math.random() * 20, 100) }
            : f
        ));
      }, 500);

      // Complete upload after simulation
      setTimeout(() => {
        clearInterval(progressInterval);
        setFiles(prev => prev.map(f =>
          f.file === file
            ? { ...f, progress: 100, status: 'completed', thumbnail: '/api/placeholder/160/90' }
            : f
        ));
      }, 3000);
    });
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    selectedFiles.forEach(file => {
      const uploadFile: UploadFile = {
        file,
        progress: 0,
        status: 'uploading'
      };

      setFiles(prev => [...prev, uploadFile]);

      // Same upload simulation as drag & drop
      const progressInterval = setInterval(() => {
        setFiles(prev => prev.map(f =>
          f.file === file && f.progress < 100
            ? { ...f, progress: Math.min(f.progress + Math.random() * 20, 100) }
            : f
        ));
      }, 500);

      setTimeout(() => {
        clearInterval(progressInterval);
        setFiles(prev => prev.map(f =>
          f.file === file
            ? { ...f, progress: 100, status: 'completed', thumbnail: '/api/placeholder/160/90' }
            : f
        ));
      }, 3000);
    });
  };

  const removeFile = (fileToRemove: File) => {
    setFiles(prev => prev.filter(f => f.file !== fileToRemove));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Upload Dropzone */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Video className="w-5 h-5" />
            <span>Upload Videos</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              isDragOver
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <div className="space-y-2">
              <p className="text-lg font-medium">
                Drag and drop video files to upload
              </p>
              <p className="text-sm text-gray-500">
                Or click to select files from your computer
              </p>
              <p className="text-xs text-gray-400">
                Supported formats: MP4, MOV, AVI, WMV (Max 2GB per file)
              </p>
            </div>
            <div className="mt-6">
              <label htmlFor="file-upload">
                <Button variant="outline" className="cursor-pointer">
                  <Upload className="w-4 h-4 mr-2" />
                  Select Files
                </Button>
                <input
                  id="file-upload"
                  type="file"
                  multiple
                  accept="video/*"
                  className="hidden"
                  onChange={handleFileSelect}
                />
              </label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Uploaded Files */}
      {files.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Uploaded Files</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {files.map((uploadFile, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 border rounded-lg"
              >
                {/* Thumbnail */}
                <div className="w-20 h-12 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                  {uploadFile.thumbnail ? (
                    <img
                      src={uploadFile.thumbnail}
                      alt="Video thumbnail"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Video className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </div>

                {/* File Info */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-medium text-sm">{uploadFile.file.name}</p>
                      <p className="text-xs text-gray-500">
                        {formatFileSize(uploadFile.file.size)}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {uploadFile.status === 'completed' && (
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Completed
                        </Badge>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFile(uploadFile.file)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  {uploadFile.status === 'uploading' && (
                    <div>
                      <Progress value={uploadFile.progress} className="mb-1" />
                      <p className="text-xs text-gray-500">
                        {Math.round(uploadFile.progress)}% uploaded
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Video Details Form */}
      {files.some(f => f.status === 'completed') && (
        <Card>
          <CardHeader>
            <CardTitle>Video Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter video title..."
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Tell viewers about your video..."
                rows={4}
                className="mt-1"
              />
            </div>

            <div className="flex space-x-4">
              <Button className="bg-red-600 hover:bg-red-700">
                Publish
              </Button>
              <Button variant="outline">
                Save as Draft
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}