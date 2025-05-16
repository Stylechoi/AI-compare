'use client';

import { useState, useEffect } from 'react';
import BenchmarkTable from '../components/BenchmarkTable';
import LoadingSpinner from '../components/LoadingSpinner';
import { fetchLLMData } from '../utils/api';
import type { BenchmarkData } from '../types';

export default function Home() {
  const [data, setData] = useState<BenchmarkData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('mmlu');
  const [showAllContent, setShowAllContent] = useState<boolean>(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const result = await fetchLLMData();
        setData(result);
        setError(null);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('데이터를 불러오는 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const benchmarkTabs = [
    { id: 'mmlu', label: 'MMLU' },
    { id: 'hellaswag', label: 'HellaSwag' },
    { id: 'truthfulqa', label: 'TruthfulQA' },
    { id: 'arc', label: 'ARC-Challenge' },
    { id: 'gsm8k', label: 'GSM8K' }
  ];

  // 예시: 받아온 데이터 구조
  const columns = [
    { key: 'rank', label: 'Rank', align: 'center', width: 'w-10' },
    { key: 'type', label: 'Type', align: 'center', width: 'w-12' },
    { key: 'model', label: 'Model', align: 'left', width: 'min-w-[160px] max-w-[220px]' },
    { key: 'average', label: 'Average', align: 'right', width: 'w-20', color: 'green' },
    { key: 'mmlu', label: 'MMLU', align: 'right', width: 'w-20', color: 'green' },
    { key: 'bbh', label: 'BBH', align: 'right', width: 'w-20', color: 'green' },
    // ... API에서 오는 벤치마크별로 동적 추가
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg p-6 mb-10 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          최신 AI 언어 모델 성능 비교
        </h1>
        <p className="text-lg md:text-xl opacity-90 mb-4 max-w-3xl">
          GPT-4, Claude, Gemini, Llama 등 주요 AI 모델의 성능을 다양한 벤치마크를 통해 비교해보세요.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="px-3 py-1 bg-white/20 rounded-full text-sm">매일 업데이트</span>
          <span className="px-3 py-1 bg-white/20 rounded-full text-sm">공식 데이터 기반</span>
          <span className="px-3 py-1 bg-white/20 rounded-full text-sm">오픈소스</span>
        </div>
      </section>

      {/* 주요 벤치마크 결과 섹션 */}
      <section className="mb-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            벤치마크 성능 비교
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Hugging Face의 공식 API를 통해 최신 데이터를 제공합니다
          </p>
        </div>
        
        {loading ? (
          <div className="flex justify-center py-20">
            <LoadingSpinner />
          </div>
        ) : error ? (
          <div className="bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 p-4 rounded-lg">
            {error}
          </div>
        ) : (
          <>
            <div className="flex space-x-8 border-b border-gray-200 dark:border-gray-700 mb-4">
              {benchmarkTabs.map(tab => (
                <button
                  key={tab.id}
                  className={`pb-3 text-lg font-extrabold transition-colors tracking-wide ${
                    activeTab === tab.id
                      ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400'
                      : 'text-gray-600 dark:text-gray-300 border-b-2 border-transparent hover:text-indigo-400'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                  style={{ background: 'none' }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {data && (
              <table className="w-full text-base text-left text-gray-700 dark:text-gray-300">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="text-center font-bold px-2 py-3 w-[60px]">순위</th>
                    <th className="text-left font-bold px-2 py-3 w-[220px]">모델</th>
                    <th className="text-center font-bold px-2 py-3 w-[120px]">조직</th>
                    <th className="text-right font-bold px-2 py-3 w-[120px]">성능 점수</th>
                    <th className="text-center font-bold px-2 py-3 w-[100px]">파라미터</th>
                    <th className="text-center font-bold px-2 py-3 w-[100px]">출시일</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((model, idx) => (
                    <tr key={model.name} className={idx % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800/50'}>
                      <td className="text-center px-2 py-3 font-medium w-[60px]">{idx + 1}</td>
                      <td className="text-left px-2 py-3 font-medium w-[220px] truncate">{model.name}</td>
                      <td className="text-center px-2 py-3 w-[120px]">{model.organization}</td>
                      <td className="text-right px-2 py-3 w-[120px] font-mono font-semibold text-blue-600 dark:text-blue-400">{model.score.toFixed(2)} %</td>
                      <td className="text-center px-2 py-3 w-[100px]">{model.parameters || '-'}</td>
                      <td className="text-center px-2 py-3 w-[100px]">{model.releaseDate || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </>
        )}
      </section>

      {/* 벤치마크 소개 섹션 */}
      <section className="mb-12 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-6">벤치마크 소개</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="card p-5 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
            <h3 className="text-lg font-bold mb-2 text-indigo-600 dark:text-indigo-400">MMLU (Massive Multitask Language Understanding)</h3>
            <p className="text-gray-700 dark:text-gray-300">
              57개 영역의 질문을 통해 모델의 지식과 문제 해결 능력을 평가합니다. 
              초중고등 교육, 전문분야 지식, 인문학, 과학, 엔지니어링 등 다양한 주제를 포함합니다.
            </p>
          </div>
          <div className="card p-5 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
            <h3 className="text-lg font-bold mb-2 text-indigo-600 dark:text-indigo-400">HellaSwag</h3>
            <p className="text-gray-700 dark:text-gray-300">
              문맥에 맞는 자연스러운 문장 선택 능력을 테스트하는 상식 추론 벤치마크입니다.
              일상적인 상황에서의 지식과 추론 능력을 평가합니다.
            </p>
          </div>
          <div className="card p-5 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
            <h3 className="text-lg font-bold mb-2 text-indigo-600 dark:text-indigo-400">TruthfulQA</h3>
            <p className="text-gray-700 dark:text-gray-300">
              모델이 사실에 근거한 정확한 답변을 제공하는지 평가합니다.
              잘못된 정보나 일반적인 오해에 대한 저항성을 측정합니다.
            </p>
          </div>
          <div className="card p-5 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
            <h3 className="text-lg font-bold mb-2 text-indigo-600 dark:text-indigo-400">ARC-Challenge</h3>
            <p className="text-gray-700 dark:text-gray-300">
              미국 초중등학교 수준의 과학 문제들로 구성된 벤치마크로, 
              특히 어려운 문제들을 포함하여 강력한 추론 능력을 필요로 합니다.
            </p>
          </div>
          <div className="card p-5 bg-gray-50 dark:bg-gray-900/50 rounded-lg sm:col-span-2">
            <h3 className="text-lg font-bold mb-2 text-indigo-600 dark:text-indigo-400">GSM8K</h3>
            <p className="text-gray-700 dark:text-gray-300">
              다단계 수학 문제를 해결하는 능력을 평가합니다.
              기초 수학, 산술, 대수학적 사고력을 요구하며 논리적 사고와 단계별 문제 해결 능력을 측정합니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}