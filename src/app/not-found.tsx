import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex gap-3 justify-center">
          <Link href="/">
            <Button leftIcon={<Home className="w-4 h-4" />}>Back to Home</Button>
          </Link>
          <Link href="/portfolio">
            <Button variant="outline" leftIcon={<Search className="w-4 h-4" />}>View Projects</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}


