import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI 모델 성능 비교',
  description: '최신 AI 언어 모델들의 벤치마크 성능을 한눈에 비교해보세요.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <nav className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <Link 
                href="/" 
                className="flex items-center space-x-3 group hover:opacity-90 transition-opacity"
              >
                <div className="w-10 h-10 relative">
                  <Image 
                    src="/logo.svg" 
                    alt="AI Compare Logo" 
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  AI Compare
                </h1>
              </Link>
              <div className="flex items-center">
                <div className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-800/80 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700">
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-200">
                    실시간 업데이트
                  </div>
                  <div className="relative flex items-center justify-center w-2 h-2">
                    <span className="absolute w-2 h-2 bg-green-400 rounded-full"></span>
                    <span className="absolute w-2 h-2 bg-green-400 rounded-full animate-ping opacity-75"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-4">{children}</main>
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-12">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-500 dark:text-gray-400 order-2 md:order-1">
                © 2025 AI Compare
              </div>
              <div className="flex items-center space-x-4 order-1 md:order-2">
                <a
                  href="https://github.com/Stylechoi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2"
                >
                  <div className="w-5 h-5 relative transition-transform group-hover:scale-110">
                    <Image
                      src="/github-mark.svg"
                      alt="GitHub"
                      fill
                      className="dark:invert"
                    />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    Contact
                  </span>
                </a>
                <span className="text-gray-300 dark:text-gray-700">|</span>
                <a
                  href="https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Data Source: HuggingFace
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}