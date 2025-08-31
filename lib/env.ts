/**
 * 环境变量验证工具
 * 用于检查必要的环境变量是否已正确设置
 */

export function validateEnv() {
  const requiredEnvVars = [
    'OPENROUTER_API_KEY',
    'EXA_SEARCH_API_KEY',
  ];

  const missingVars: string[] = [];

  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      missingVars.push(envVar);
    }
  }

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(', ')}\n` +
      'Please check your .env.local file and ensure all required variables are set.'
    );
  }

  return {
    OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY!,
    EXA_SEARCH_API_KEY: process.env.EXA_SEARCH_API_KEY!,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  };
}

// 导出验证后的环境变量
export const env = validateEnv();
