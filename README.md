# AI LLM 성능 비교 대시보드

이 프로젝트는 다양한 AI 언어 모델(LLM)의 성능을 비교하는 웹 대시보드입니다. Hugging Face의 공식 API를 통해 최신 정보를 제공합니다.

## 주요 기능

- MMLU, HellaSwag, TruthfulQA 등 다양한 벤치마크에서의 AI 모델 성능 비교
- Hugging Face API를 통한 데이터 수집
- 모델별, 벤치마크별 성능 데이터 시각화
- 반응형 디자인으로 모바일과 데스크톱 모두 지원

## 기술 스택

- **프론트엔드**: Next.js, React, Tailwind CSS
- **데이터 수집**: Axios (Hugging Face API 호출)
- **배포**: Vercel (권장)

## 개발 환경 설정

1. 저장소 클론

```bash
git clone https://github.com/Stylechoi/AI-compare.git
cd AI-compare
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

이 프로젝트는 다음과 같은 공식 API를 통해 데이터를 수집합니다:

- [Hugging Face Open LLM Leaderboard API](https://huggingface.co/api/spaces/open-llm-leaderboard/results)

## 라이센스

MIT 라이센스를 따릅니다. 자세한 내용은 LICENSE 파일을 참조하세요.


