import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        
        {/* Visual 404 Header */}
        <div className="mb-8">
          <h1 className="text-9xl font-extrabold text-blue-900 opacity-10 select-none">404</h1>
          <div className="relative -mt-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 pb-2">Page Not Found</h2>
            <p className="text-gray-600 text-lg">
              The page you are looking for might have been removed or is temporarily unavailable.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          
          {/* Home Button */}
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 !text-white font-semibold rounded-lg transition-all shadow-md w-full sm:w-auto justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            Return Home
          </Link>

          {/* Query/Support Button */}
          <Link
            href="https://www.thesagenext.com/contact-us"
            className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-blue-700 text-blue-700 hover:bg-blue-50 font-semibold rounded-lg transition-all w-full sm:w-auto justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            Submit a Query
          </Link>
        </div>

        {/* Direct Contact Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4 font-medium uppercase tracking-wider">
            Need immediate assistance?
          </p>
          <a
            href="tel:+18559227243"
            className="inline-flex items-center gap-3 text-2xl font-bold text-blue-900 hover:text-blue-700 transition-colors group"
          >
            <div className="p-2 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            +1-855-922-7243
          </a>
          <p className="text-xs text-gray-400 mt-2">Toll-Free (USA/Canada)</p>
        </div>
      </div>
    </div>
  );
}