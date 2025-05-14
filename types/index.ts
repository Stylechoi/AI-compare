export interface ModelScore {
  score: number;
  rank?: number;
}

export interface ModelData {
  name: string;
  organization: string;
  parameters?: string;
  releaseDate?: string;
  mmlu?: ModelScore;
  hellaswag?: ModelScore;
  truthfulqa?: ModelScore;
  arc?: ModelScore;
  gsm8k?: ModelScore;
  [key: string]: any;
}

export interface BenchmarkData {
  lastUpdated: string;
  sourceUrl: string;
  models: ModelData[];
}

export interface BenchmarkTableProps {
  data: BenchmarkData;
  activeTab: string;
}