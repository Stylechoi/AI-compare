import { NextResponse } from 'next/server';
import type { BenchmarkData } from '../../../types';

// GET 요청 핸들러
export async function GET() {
  try {
    // 목업 데이터를 바로 반환합니다
    const data = getMockBenchmarkData();
    return NextResponse.json(data);
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: '벤치마크 데이터를 가져오는 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

// 목업 데이터
function getMockBenchmarkData(): BenchmarkData {
  return {
    lastUpdated: new Date().toISOString(),
    sourceUrl: 'https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard',
    models: [
      {
        name: 'Claude 3 Opus',
        organization: 'Anthropic',
        parameters: '~1T',
        releaseDate: '2024-03',
        mmlu: { score: 86.8, rank: 1 },
        hellaswag: { score: 95.9, rank: 1 },
        truthfulqa: { score: 64.3, rank: 2 },
        arc: { score: 96.4, rank: 1 },
        gsm8k: { score: 94.2, rank: 2 }
      },
      {
        name: 'GPT-4 Turbo',
        organization: 'OpenAI',
        parameters: '~1.8T',
        releaseDate: '2023-11',
        mmlu: { score: 86.4, rank: 2 },
        hellaswag: { score: 95.3, rank: 2 },
        truthfulqa: { score: 65.7, rank: 1 },
        arc: { score: 95.9, rank: 2 },
        gsm8k: { score: 95.3, rank: 1 }
      },
      {
        name: 'Claude 3 Sonnet',
        organization: 'Anthropic',
        parameters: '~300B',
        releaseDate: '2024-03',
        mmlu: { score: 79.0, rank: 3 },
        hellaswag: { score: 93.2, rank: 4 },
        truthfulqa: { score: 60.2, rank: 3 },
        arc: { score: 93.7, rank: 4 },
        gsm8k: { score: 89.1, rank: 3 }
      },
      {
        name: 'Gemini 1.0 Pro',
        organization: 'Google',
        parameters: '~400B',
        releaseDate: '2023-12',
        mmlu: { score: 71.8, rank: 6 },
        hellaswag: { score: 91.5, rank: 5 },
        truthfulqa: { score: 58.5, rank: 4 },
        arc: { score: 85.9, rank: 7 },
        gsm8k: { score: 86.5, rank: 5 }
      },
      {
        name: 'Llama 3 70B',
        organization: 'Meta',
        parameters: '70B',
        releaseDate: '2024-04',
        mmlu: { score: 78.2, rank: 4 },
        hellaswag: { score: 93.7, rank: 3 },
        truthfulqa: { score: 55.6, rank: 5 },
        arc: { score: 94.1, rank: 3 },
        gsm8k: { score: 87.2, rank: 4 }
      },
      {
        name: 'Claude 3 Haiku',
        organization: 'Anthropic',
        parameters: '~100B',
        releaseDate: '2024-03',
        mmlu: { score: 75.6, rank: 5 },
        hellaswag: { score: 91.3, rank: 6 },
        truthfulqa: { score: 54.4, rank: 6 },
        arc: { score: 89.6, rank: 6 },
        gsm8k: { score: 82.4, rank: 6 }
      },
      {
        name: 'Llama 3 8B',
        organization: 'Meta',
        parameters: '8B',
        releaseDate: '2024-04',
        mmlu: { score: 66.8, rank: 8 },
        hellaswag: { score: 88.7, rank: 7 },
        truthfulqa: { score: 45.8, rank: 8 },
        arc: { score: 83.3, rank: 8 },
        gsm8k: { score: 69.5, rank: 8 }
      },
      {
        name: 'Mistral 7B',
        organization: 'Mistral AI',
        parameters: '7B',
        releaseDate: '2023-09',
        mmlu: { score: 62.3, rank: 10 },
        hellaswag: { score: 85.9, rank: 9 },
        truthfulqa: { score: 41.6, rank: 10 },
        arc: { score: 77.8, rank: 10 },
        gsm8k: { score: 52.2, rank: 10 }
      }
    ]
  };
} 