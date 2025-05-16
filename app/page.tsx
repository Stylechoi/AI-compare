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

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">AI 언어 모델 벤치마크 성능 비교</h2>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-6">
          Hugging Face의 공식 API를 통해 최신 AI 언어 모델의 성능 데이터를 제공합니다.
          페이지를 새로고침하면 최신 데이터를 확인할 수 있습니다.
        </p>
        
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
            <div className="mb-4 border-b border-gray-200 dark:border-gray-700 overflow-x-hidden overflow-y-hidden max-h-none" style={{ overflowY: 'hidden', maxHeight: 'none' }}>
              <ul className="flex -mb-px text-sm font-medium text-center whitespace-nowrap">
                {benchmarkTabs.map((tab) => (
                  <li key={tab.id} className="mr-1">
                    <button
                      className={`inline-block p-2 sm:p-4 border-b-2 ${
                        activeTab === tab.id
                          ? 'text-primary border-primary font-bold'
                          : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {data && <BenchmarkTable data={data} activeTab={activeTab} />}
          </>
        )}
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">벤치마크 소개</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="card">
            <h4 className="font-bold mb-2">MMLU (Massive Multitask Language Understanding)</h4>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              57개 영역의 질문을 통해 모델의 지식과 문제 해결 능력을 평가합니다. 
              초중고등 교육, 전문분야 지식, 인문학, 과학, 엔지니어링 등 다양한 주제를 포함합니다.
            </p>
          </div>
          <div className="card">
            <h4 className="font-bold mb-2">HellaSwag</h4>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              문맥에 맞는 자연스러운 문장 선택 능력을 테스트하는 상식 추론 벤치마크입니다.
              일상적인 상황에서의 지식과 추론 능력을 평가합니다.
            </p>
          </div>
          <div className="card">
            <h4 className="font-bold mb-2">TruthfulQA</h4>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              모델이 사실에 근거한 정확한 답변을 제공하는지 평가합니다.
              잘못된 정보나 일반적인 오해에 대한 저항성을 측정합니다.
            </p>
          </div>
          <div className="card">
            <h4 className="font-bold mb-2">ARC-Challenge</h4>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              미국 초중등학교 수준의 과학 문제들로 구성된 벤치마크로, 
              특히 어려운 문제들을 포함하여 강력한 추론 능력을 필요로 합니다.
            </p>
          </div>
          <div className="card sm:col-span-2 md:col-span-1">
            <h4 className="font-bold mb-2">GSM8K</h4>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              다단계 수학 문제를 해결하는 능력을 평가합니다.
              기초 수학, 산술, 대수학적 사고력을 요구하며 논리적 사고와 단계별 문제 해결 능력을 측정합니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 