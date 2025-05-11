import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI LLM 성능 비교',
  description: '최신 AI 언어 모델의 성능 비교 대시보드',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="min-h-screen">
          <header className="bg-primary text-white py-4">
            <div className="container mx-auto px-4">
              <h1 className="text-2xl font-bold">AI LLM 성능 비교</h1>
              <p className="text-sm">최신 인공지능 언어 모델 벤치마크 결과</p>
            </div>
          </header>
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="bg-gray-100 dark:bg-gray-900 py-6">
            <div className="container mx-auto px-4">
              <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                이 데이터는 각 벤치마크 제공 사이트에서 자동으로 수집됩니다. 마지막 업데이트: {new Date().toLocaleDateString('ko-KR')}
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
} 