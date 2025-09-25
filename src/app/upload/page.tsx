'use client';

import { Layout } from '@/components/youtube/Layout';
import { UploadDropzone } from '@/components/youtube/UploadDropzone';

export default function UploadPage() {
  return (
    <Layout currentPath="/upload">
      <div className="py-6">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-2xl font-bold mb-6">Upload videos</h1>
          <p className="text-gray-600 mb-8">
            Start sharing your content with the world. Upload and publish your videos to STREAMIFY.
          </p>
          <UploadDropzone />
        </div>
      </div>
    </Layout>
  );
}