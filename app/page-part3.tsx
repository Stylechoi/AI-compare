      {/* FAQ 섹션 */}
      <section className="mb-12 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-6">자주 묻는 질문</h2>
        <div className="space-y-4">
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h3 className="text-lg font-semibold mb-2">벤치마크 점수는 어떻게 측정되나요?</h3>
            <p className="text-gray-700 dark:text-gray-300">
              각 벤치마크는 특정 작업에 대한 모델의 정확도를 백분율로 표시합니다. 예를 들어, MMLU는 다양한 학문 분야의 
              객관식 문제를 해결하는 능력을 측정하며, 정답률을 점수로 표시합니다.
            </p>
          </div>
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h3 className="text-lg font-semibold mb-2">왜 모델마다 성능 차이가 있나요?</h3>
            <p className="text-gray-700 dark:text-gray-300">
              모델 간 성능 차이는 모델 규모(파라미터 수), 학습 데이터의 양과 질, 아키텍처 설계, 훈련 방법론 등 
              다양한 요소에 의해 결정됩니다. 또한 특정 벤치마크에 최적화된 모델은 해당 분야에서 더 좋은 성능을 보입니다.
            </p>
          </div>
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h3 className="text-lg font-semibold mb-2">벤치마크 결과만으로 모델의 우수성을 판단할 수 있나요?</h3>
            <p className="text-gray-700 dark:text-gray-300">
              벤치마크는 모델의 특정 능력을 측정하는 좋은 지표이지만, 실제 사용 환경에서의 성능을 완벽히 대변하지는 않습니다.
              실제 응용 환경, 도메인 특화 작업, 사용자 경험 등을 종합적으로 고려해야 합니다.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">데이터는 얼마나 자주 업데이트되나요?</h3>
            <p className="text-gray-700 dark:text-gray-300">
              이 대시보드의 데이터는 Hugging Face Open LLM Leaderboard API를 통해 제공되며, 
              새로운 모델이 등록되거나 기존 모델의 성능이 업데이트될 때마다 자동으로 반영됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="mb-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-lg p-8 text-white">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">AI 모델의 진화를 함께 지켜보세요</h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            최신 AI 모델 성능 데이터를 지속적으로 업데이트하고 있습니다. 
            북마크하고 정기적으로 확인하여 AI 기술의 발전을 함께 지켜보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/Stylechoi/AI-compare" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-indigo-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition duration-200"
            >
              GitHub에서 보기
            </a>
            <a 
              href="https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-transparent hover:bg-white/10 border border-white px-6 py-3 rounded-lg font-semibold transition duration-200"
            >
              원본 데이터 소스
            </a>
          </div>
        </div>
      </section>

      {/* 개선 예정 섹션 */}
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