'use client';

import { useEffect, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FileText, Plus, Trash2, Edit } from 'lucide-react';

interface CV {
  id: string;
  title: string;
  templateId: string;
  createdAt: string;
  updatedAt: string;
}

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [cvs, setCvs] = useState<CV[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  useEffect(() => {
    if (status === 'authenticated') {
      fetchCVs();
    }
  }, [status]);

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
    if (!confirm('Are you sure you want to delete this CV?')) return;

    try {
      await fetch(`/api/cvs/${id}`, { method: 'DELETE' });
      setCvs(cvs.filter(cv => cv.id !== id));
    } catch (error) {
      console.error('Failed to delete CV');
    }
  };

  if (status === 'loading' || loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">My CVs</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">{session?.user?.email}</span>
            <button
              onClick={() => signOut()}
              className="px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-lilac text-white rounded-xl font-medium hover:bg-brand-lilac/90 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Create New CV
          </Link>
        </div>

        {cvs.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No CVs yet. Create your first one!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cvs.map((cv) => (
              <div key={cv.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <FileText className="w-8 h-8 text-brand-lilac" />
                  <div className="flex gap-2">
                    <button
                      onClick={() => router.push(`/build?cvId=${cv.id}`)}
                      className="p-2 text-gray-600 hover:text-brand-lilac transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => deleteCV(cv.id)}
                      className="p-2 text-gray-600 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{cv.title}</h3>
                <p className="text-sm text-gray-500">
                  Updated {new Date(cv.updatedAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
