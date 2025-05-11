# AI LLM 성능 비교 대시보드

이 프로젝트는 다양한 AI 언어 모델(LLM)의 성능을 비교하는 웹 대시보드입니다. 공신력 있는
벤치마크 사이트에서 데이터를 자동으로 크롤링하여 최신 정보를 제공합니다.

## 주요 기능

- MMLU, HellaSwag, TruthfulQA 등 다양한 벤치마크에서의 AI 모델 성능 비교
- 자동 데이터 크롤링 및 정기 업데이트
- 모델별, 벤치마크별 성능 데이터 시각화
- 반응형 디자인으로 모바일과 데스크톱 모두 지원

## 기술 스택

- **프론트엔드**: Next.js, React, Tailwind CSS
- **데이터 수집**: Axios, Cheerio (웹 스크래핑)
- **배포**: Vercel (권장)

## 개발 환경 설정

1. 저장소 클론

```bash
git clone https://github.com/yourusername/ai-llm-benchmark.git
cd ai-llm-benchmark
```

2. 의존성 설치

```bash
npm install
```

3. 개발 서버 실행

```bash
npm run dev
```

4. 브라우저에서 http://localhost:3000 열기

## 프로젝트 구조

```
ai-llm-benchmark/
├── app/                   # Next.js App Router
│   ├── api/               # API 라우트
│   │   └── benchmarks/    # 벤치마크 데이터 API
│   │   └── globals.css        # 전역 스타일
│   │   └── layout.tsx         # 앱 레이아웃
│   │   └── page.tsx           # 메인 페이지
│   ├── components/            # React 컴포넌트
│   │   ├── BenchmarkTable.tsx # 벤치마크 테이블 컴포넌트
│   │   └── LoadingSpinner.tsx # 로딩 인디케이터
│   ├── types/                 # TypeScript 타입 정의
│   │   └── index.ts
│   ├── utils/                 # 유틸리티 함수
│   │   └── api.ts             # API 관련 함수
│   └── public/                # 정적 파일
```

## 데이터 소스

이 프로젝트는 다음과 같은 벤치마크 소스에서 데이터를 수집합니다:

- [Hugging Face Open LLM Leaderboard](https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard)
- [LMSYS Chatbot Arena Leaderboard](https://chat.lmsys.org)
- [Papers With Code SOTA](https://paperswithcode.com)

## 라이선스

MIT

## 기여하기

이슈와 풀 리퀘스트를 환영합니다. 프로젝트 개선에 기여해주세요! 
