'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full">
        <div className="text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-10 h-10 text-red-600" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Oops! Something broke
          </h1>
          
          <p className="text-gray-600 mb-2">
            We're sorry for the inconvenience. Our team has been notified.
          </p>
          
          {process.env.NODE_ENV === 'development' && (
            <details className="mt-4 p-4 bg-gray-50 rounded-lg text-left">
              <summary className="cursor-pointer font-medium text-sm text-gray-700">
                Error Details (Dev Mode)
              </summary>
              <pre className="mt-2 text-xs text-red-600 overflow-auto">
                {error.message}
              </pre>
            </details>
          )}
          
          <div className="flex gap-3 mt-8 justify-center">
            <Button onClick={reset} leftIcon={<RefreshCw className="w-4 h-4" />}>
              Try Again
            </Button>
            <Button variant="outline" onClick={() => (window.location.href = '/') }>
              Go Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}


