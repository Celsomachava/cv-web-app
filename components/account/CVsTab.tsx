'use client';

import { useState, useEffect } from 'react';
import { FileText, Edit, Trash2, Download, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface CV {
  id: string;
  title: string;
  templateId: string;
  isPaid: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function CVsTab() {
  const router = useRouter();
  const [cvs, setCvs] = useState<CV[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCVs();
  }, []);

  const fetchCVs = async () => {
    try {
      const res = await fetch('/api/cvs');
      const data = await res.json();
      setCvs(data.cvs || []);
    } catch (error) {
      console.error('Failed to fetch CVs');
    } finally {
      setLoading(false);
    }
  };

  const deleteCV = async (id: string) => {
    if (!confirm('Delete this CV?')) return;

    try {
      await fetch(`/api/cvs/${id}`, { method: 'DELETE' });
      setCvs(cvs.filter(cv => cv.id !== id));
    } catch (error) {
      console.error('Failed to delete CV');
    }
  };

  const downloadCV = async (id: string) => {
    window.open(`/api/cvs/${id}/download`, '_blank');
  };

  if (loading) {
    return <div className="flex items-center justify-center py-12"><Loader2 className="w-8 h-8 animate-spin text-brand-lilac" /></div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">My CVs</h2>
          <p className="text-gray-600">Manage your saved CVs</p>
        </div>
        <button
          onClick={() => router.push('/')}
          className="px-4 py-2 bg-brand-lilac text-white rounded-lg font-medium hover:bg-brand-lilac/90"
        >
          Create New CV
        </button>
      </div>

      {cvs.length === 0 ? (
        <div className="text-center py-12">
          <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No CVs yet. Create your first one!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cvs.map((cv) => (
            <div key={cv.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <FileText className="w-8 h-8 text-brand-lilac" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{cv.title}</h3>
                    <p className="text-sm text-gray-500">
                      {new Date(cv.updatedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                {cv.isPaid && (
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Paid</span>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => router.push(`/?cvId=${cv.id}`)}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50"
                >
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
                {cv.isPaid && (
                  <button
                    onClick={() => downloadCV(cv.id)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-brand-lilac text-white rounded-lg text-sm hover:bg-brand-lilac/90"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                )}
                <button
                  onClick={() => deleteCV(cv.id)}
                  className="px-3 py-2 border border-red-200 text-red-600 rounded-lg text-sm hover:bg-red-50"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
