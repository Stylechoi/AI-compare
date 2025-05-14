import { useState } from 'react';

export default function PageEnding() {
  const [showAllContent] = useState(true);

  return (
    <div>
      {showAllContent && (
        <section className="mb-12 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-4">개선 예정 기능</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            AI-Compare는 지속적으로 발전하고 있습니다. 다음 기능들을 곧 추가할 예정입니다:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">모델 성능 시각화 차트</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">시계열 데이터를 통해 모델 성능의 변화 추이를 한눈에 파악할 수 있는 차트</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">한국어 특화 벤치마크</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">한국어 이해력, 한국 문화 이해도 등을 평가하는 특화 벤치마크 결과 추가</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">다크 모드 지원</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">사용자 환경 설정에 따라 자동으로 전환되는 다크 모드 지원</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">모델 상세 페이지</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">각 모델별 상세 정보 및 모든 벤치마크 점수를 확인할 수 있는 전용 페이지</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">벤치마크 샘플 문제</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">각 벤치마크의 실제 샘플 문제와 정답을 확인할 수 있는 기능</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">커스텀 비교 기능</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">사용자가 직접 모델과 벤치마크를 선택하여 맞춤형 비교를 할 수 있는 기능</p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}