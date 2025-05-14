import axios from 'axios';
import type { BenchmarkData } from '../types';

/**
 * 서버 API를 통해 LLM 성능 데이터를 가져옵니다.
 * 서버는 Hugging Face의 공식 API를 사용하여 데이터를 가져옵니다.
 */
export async function fetchLLMData(): Promise<BenchmarkData> {
  try {
    const response = await axios.get('/api/benchmarks', {
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching benchmark data:', error);
    throw new Error('Failed to fetch benchmark data');
  }
}

/**
 * Hugging Face API 정보:
 * - 이 애플리케이션은 Hugging Face의 공식 API를 사용합니다.
 * - 성능 데이터는 https://huggingface.co/api/spaces/open-llm-leaderboard/results API를 통해 
 *   합법적으로 얻습니다.
 * - 서버에서 데이터를 변환하여 클라이언트에 전달합니다.
 */