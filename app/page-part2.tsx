'use client';

import { useState } from 'react';

export default function PagePart2() {
  const [showAllContent, setShowAllContent] = useState(false);

  return (
    <section className="mb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">AI 언어 모델 기술 이해하기</h2>
        <button 
          onClick={() => setShowAllContent(!showAllContent)} 
          className="mt-2 sm:mt-0 text-sm text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 flex items-center"
        >
          {showAllContent ? '간략히 보기' : '모두 보기'} 
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showAllContent ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-bold mb-3 text-indigo-600 dark:text-indigo-400">왜 AI 모델 성능 비교가 중요한가요?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            AI 언어 모델(LLM)은 각각 다른 강점과 약점을 가지고 있습니다. 특정 작업에 가장 적합한 모델을 선택하려면 공식적인 벤치마크를 
            통한 객관적 성능 비교가 필수적입니다.
          </p>
          <ul className="text-gray-700 dark:text-gray-300 space-y-2 list-disc pl-5">
            <li>적절한 사용 사례 파악</li>
            <li>비용 대비 효율성 판단</li>
            <li>특정 분야에 특화된 능력 확인</li>
            <li>기술 발전 방향 예측</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-bold mb-3 text-indigo-600 dark:text-indigo-400">주요 AI 모델 비교</h3>
          <div className="overflow-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-2 px-1">모델</th>
                  <th className="text-left py-2 px-1">개발사</th>
                  <th className="text-left py-2 px-1">특징</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-2 px-1 font-medium">GPT-4</td>
                  <td className="py-2 px-1">OpenAI</td>
                  <td className="py-2 px-1">높은 추론 능력과 다중 모달 기능</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-2 px-1 font-medium">Claude</td>
                  <td className="py-2 px-1">Anthropic</td>
                  <td className="py-2 px-1">장문 처리와 안전성에 특화</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-2 px-1 font-medium">Gemini</td>
                  <td className="py-2 px-1">Google</td>
                  <td className="py-2 px-1">멀티모달 이해력과 추론 능력</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-2 px-1 font-medium">Llama</td>
                  <td className="py-2 px-1">Meta</td>
                  <td className="py-2 px-1">오픈소스로 확장성과 커스터마이징</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showAllContent && (
        <>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold mb-3 text-indigo-600 dark:text-indigo-400">LLM의 주요 기술적 요소</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-1">트랜스포머 아키텍처</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    자기주의(Self-Attention) 메커니즘을 통해 텍스트의 장거리 의존성을 효과적으로 포착합니다. 이는 문맥 이해력의 핵심 요소입니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">파라미터 규모</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    모델의 파라미터 수는 일반적으로 성능과 직결됩니다. 더 많은 파라미터를 가진 모델이 더 복잡한 패턴을 학습할 수 있습니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">학습 데이터</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    모델이 학습한 데이터의 다양성, 품질, 양은 성능에 직접적인 영향을 미칩니다. 특히 특정 도메인에 특화된 성능을 원할 경우 중요합니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">미세 조정 방식</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    사전 학습된 모델을 특정 작업에 맞게 조정하는 방식으로, RLHF(인간 피드백을 통한 강화 학습)이 대표적입니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold mb-3 text-indigo-600 dark:text-indigo-400">산업별 LLM 활용 가이드</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-1">금융 분야</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    정확성과 신뢰성이 중요하므로 TruthfulQA 점수가 높은 모델을 선택하는 것이 좋습니다. 
                    특히 규제 준수와 리스크 관리 측면에서 GPT-4나 Claude 시리즈가 적합합니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">교육 분야</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    MMLU와 ARC 점수가 높은 모델이 교육용으로 적합합니다. 학생들의 다양한 질문에 정확한 답변을 제공하고
                    복잡한 개념을 설명하는 능력이 중요합니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">의료 분야</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    의료 정보의 정확성은 매우 중요하므로 TruthfulQA와 MMLU 점수가 높은 모델을 선택하는 것이 중요합니다.
                    Claude나 GPT-4와 같은 상위 모델이 의료 정보의 신뢰성 측면에서 유리합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-bold mb-3 text-indigo-600 dark:text-indigo-400">벤치마크 결과의 실제 적용</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              벤치마크 점수는 모델의 기본 능력을 나타내지만, 실제 애플리케이션에서는 다른 요소들도 함께 고려해야 합니다.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div>
                <h4 className="font-semibold text-lg mb-2">추가로 고려할 사항</h4>
                <ul className="text-gray-700 dark:text-gray-300 space-y-2 list-disc pl-5">
                  <li>사용 환경에 맞는 컨텍스트 길이</li>
                  <li>추론 속도와 비용 효율성</li>
                  <li>한국어 및 다국어 처리 능력</li>
                  <li>모델의 지속적인 업데이트 주기</li>
                  <li>프롬프트 엔지니어링 용이성</li>
                  <li>미세 조정 가능성과 유연성</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">LLM 최적 활용 팁</h4>
                <ol className="text-gray-700 dark:text-gray-300 space-y-2 list-decimal pl-5">
                  <li>작업의 성격과 복잡성에 맞는 모델 선택</li>
                  <li>여러 벤치마크 결과를 종합적으로 분석</li>
                  <li>실제 사용 사례에서 직접 테스트 진행</li>
                  <li>효과적인 프롬프트 설계로 성능 최적화</li>
                  <li>특정 도메인용 파인튜닝 고려</li>
                </ol>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}