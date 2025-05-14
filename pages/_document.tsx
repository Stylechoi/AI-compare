import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        {/* Primary Meta Tags */}
        <meta name="title" content="AI Compare - LLM 순위 및 성능 비교 | AI 모델 랭킹" />
        <meta name="description" content="최신 AI 언어 모델(LLM) 순위와 성능을 실시간으로 비교해보세요. GPT-4, Claude, Gemini, Llama 등 주요 AI 모델의 순위와 MMLU, HellaSwag, TruthfulQA 벤치마크 점수를 한눈에 확인할 수 있습니다." />
        <meta name="keywords" content="AI 순위, LLM 순위, 인공지능 순위, 에이아이 순위, AI 랭킹, LLM 랭킹, AI 비교, LLM 비교, 인공지능 비교, GPT-4, Claude, Gemini, Llama, AI 성능, 언어모델, AI 벤치마크, 에이아이 비교, ChatGPT 순위" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ai-compare.com/" />
        <meta property="og:title" content="AI Compare - LLM 순위 및 성능 비교 | AI 모델 랭킹" />
        <meta property="og:description" content="최신 AI 언어 모델(LLM) 순위와 성능을 실시간으로 비교해보세요. GPT-4, Claude, Gemini, Llama 등 주요 AI 모델의 순위와 MMLU, HellaSwag, TruthfulQA 벤치마크 점수를 한눈에 확인할 수 있습니다." />
        <meta property="og:image" content="https://ai-compare.com/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ai-compare.com/" />
        <meta property="twitter:title" content="AI Compare - LLM 순위 및 성능 비교 | AI 모델 랭킹" />
        <meta property="twitter:description" content="최신 AI 언어 모델(LLM) 순위와 성능을 실시간으로 비교해보세요. GPT-4, Claude, Gemini, Llama 등 주요 AI 모델의 순위와 MMLU, HellaSwag, TruthfulQA 벤치마크 점수를 한눈에 확인할 수 있습니다." />
        <meta property="twitter:image" content="https://ai-compare.com/og-image.png" />

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="AI Compare" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://ai-compare.com/" />
        
        {/* Schema.org markup for search engines */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "AI Compare - LLM 순위 및 성능 비교",
              "description": "최신 AI 언어 모델(LLM) 순위와 성능을 실시간으로 비교",
              "url": "https://ai-compare.com/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://ai-compare.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 