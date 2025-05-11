import React, { useMemo } from 'react';
import type { BenchmarkTableProps, ModelData } from '../types';

const BenchmarkTable: React.FC<BenchmarkTableProps> = ({ data, activeTab }) => {
  // 선택된 벤치마크에 따라 모델을 정렬합니다.
  const sortedModels = useMemo(() => {
    return [...data.models].sort((a, b) => {
      const aScore = a[activeTab]?.score || 0;
      const bScore = b[activeTab]?.score || 0;
      return bScore - aScore; // 내림차순 정렬
    });
  }, [data.models, activeTab]);

  // 열 헤더 정보
  const columns = [
    { id: 'rank', label: '순위', className: 'w-16 text-center' },
    { id: 'name', label: '모델명', className: 'w-1/4' },
    { id: 'organization', label: '개발사', className: 'w-1/6' },
    { id: 'parameters', label: '파라미터', className: 'w-1/6' },
    { id: 'score', label: '점수 (%)', className: 'w-1/6 text-right' },
    { id: 'releaseDate', label: '출시일', className: 'w-1/6 text-center' },
  ];

  // 벤치마크 이름과 설명
  const benchmarkInfo = {
    mmlu: { name: 'MMLU', description: '다양한 전문 분야의 지식 테스트' },
    hellaswag: { name: 'HellaSwag', description: '문맥 이해와 상식적 추론' },
    truthfulqa: { name: 'TruthfulQA', description: '사실 기반 응답과 오해 방지' },
    arc: { name: 'ARC-Challenge', description: '복잡한 과학 문제 해결' },
    gsm8k: { name: 'GSM8K', description: '다단계 수학 문제 해결' }
  };

  return (
    <div className="card">
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold">{benchmarkInfo[activeTab as keyof typeof benchmarkInfo]?.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {benchmarkInfo[activeTab as keyof typeof benchmarkInfo]?.description}
          </p>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <span>출처: </span>
          <a
            href={data.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            HuggingFace Open LLM Leaderboard
          </a>
        </div>
      </div>

      <div className="table-container">
        <table className="comparison-table">
          <thead>
            <tr className="header-row">
              {columns.map((column) => (
                <th key={column.id} className={column.className}>
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedModels.map((model, index) => {
              const score = model[activeTab];
              
              if (!score) return null;
              
              return (
                <tr key={model.name}>
                  <td className="text-center">
                    {score.rank || index + 1}
                  </td>
                  <td className="model-cell">
                    {model.name}
                  </td>
                  <td>
                    {model.organization}
                  </td>
                  <td>
                    {model.parameters || '-'}
                  </td>
                  <td className="score-cell">
                    <span className={`font-semibold ${index === 0 ? 'text-primary' : ''}`}>
                      {score.score.toFixed(1)}
                    </span>
                  </td>
                  <td className="text-center">
                    {model.releaseDate || '-'}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 text-right">
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
};

export default BenchmarkTable; 