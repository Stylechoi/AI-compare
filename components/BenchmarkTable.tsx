import { useState, useMemo } from 'react';
import type { BenchmarkTableProps, ModelData } from '../types';

export default function BenchmarkTable({ data, activeTab }: BenchmarkTableProps) {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: 'asc' | 'desc';
  }>({
    key: activeTab,
    direction: 'desc',
  });

  const sortedModels = useMemo(() => {
    const sortedData = [...data.models];
    sortedData.sort((a, b) => {
      const aValue = a[sortConfig.key]?.score || 0;
      const bValue = b[sortConfig.key]?.score || 0;
      
      if (sortConfig.direction === 'asc') {
        return aValue - bValue;
      }
      return bValue - aValue;
    });
    
    return sortedData.map((model, index) => ({
      ...model,
      [activeTab]: {
        ...model[activeTab],
        rank: index + 1
      }
    }));
  }, [data.models, sortConfig, activeTab]);

  const handleSort = (key: string) => {
    setSortConfig(current => ({
      key,
      direction: current.key === key && current.direction === 'desc' ? 'asc' : 'desc'
    }));
  };

  const formatScore = (score: number | undefined) => {
    if (score === undefined) return '-';
    return (score * 100).toFixed(2) + '%';
  };

  const renderSortIcon = () => {
    return sortConfig.direction === 'desc' ? '↓' : '↑';
  };

  const renderRank = (index: number) => {
    if (index === 0) return '🥇';
    if (index === 1) return '🥈';
    if (index === 2) return '🥉';
    return `#${index + 1}`;
  };

  const benchmarkInfo = {
    mmlu: {
      name: 'MMLU',
      desc: '다양한 전문 분야의 지식 테스트'
    },
    hellaswag: {
      name: 'HellaSwag',
      desc: '문맥 이해와 상식적 추론'
    },
    truthfulqa: {
      name: 'TruthfulQA',
      desc: '사실 기반 응답과 오해 방지'
    },
    arc: {
      name: 'ARC-Challenge',
      desc: '복잡한 과학 문제 해결'
    },
    gsm8k: {
      name: 'GSM8K',
      desc: '다단계 수학 문제 해결'
    }
  };

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="p-4 md:p-6 flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-200 dark:border-gray-700">
        <div className="mb-2 sm:mb-0">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {benchmarkInfo[activeTab as keyof typeof benchmarkInfo]?.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {benchmarkInfo[activeTab as keyof typeof benchmarkInfo]?.desc}
          </p>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          출처: {' '}
          <a
            href={data.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            HuggingFace Open LLM Leaderboard
          </a>
        </div>
      </div>

      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead>
          <tr>
            <th className="sticky left-0 z-10 bg-gray-50 dark:bg-gray-800 px-4 py-3 text-center w-20">
              순위
            </th>
            <th className="px-4 py-3 text-left">모델</th>
            <th className="px-4 py-3 text-left">조직</th>
            <th className="px-4 py-3 text-left">성능 점수</th>
            <th className="px-4 py-3 text-left">파라미터</th>
            <th className="px-4 py-3 text-left">출시일</th>
            <th className="px-4 py-3 text-center w-10">
              <button
                onClick={() => handleSort(activeTab)}
                className="w-full flex items-center justify-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                title="정렬"
              >
                {renderSortIcon()}
              </button>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {sortedModels.map((model: ModelData, index: number) => (
            <tr key={model.name} className={index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800/50'}>
              <td className="sticky left-0 bg-inherit px-4 py-3 text-center font-medium">
                <div className={`inline-flex items-center justify-center min-w-[2.5rem] ${index < 3 ? 'text-primary text-lg' : ''}`}>
                  {renderRank(index)}
                </div>
              </td>
              <td className="px-4 py-3 font-medium">
                {model.name}
              </td>
              <td className="px-4 py-3">{model.organization}</td>
              <td className="px-4 py-3 font-mono font-medium">
                <span className={index < 3 ? 'text-primary' : ''}>
                  {formatScore(model[activeTab]?.score)}
                </span>
              </td>
              <td className="px-4 py-3">{model.parameters || '-'}</td>
              <td className="px-4 py-3">{model.releaseDate || '-'}</td>
              <td className="px-4 py-3"></td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="text-xs text-gray-500 dark:text-gray-400 p-4 border-t border-gray-200 dark:border-gray-700 text-right">
        마지막 업데이트: {new Date(data.lastUpdated).toLocaleDateString('ko-KR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}
      </div>
    </div>
  );
}