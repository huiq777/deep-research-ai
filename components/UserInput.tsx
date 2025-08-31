'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { z } from 'zod';

interface UserInputProps {
  onSubmit: (topic: string) => Promise<void>;
  loading?: boolean;
  translations: {
    label: string;
    placeholder: string;
    submitButton: string;
    loadingText: string;
  };
}

export function UserInput({ onSubmit, loading = false, translations }: UserInputProps) {
  const [topic, setTopic] = useState('');
  const [error, setError] = useState('');

  // 表单验证模式 - 移到组件内部
  const inputSchema = z.object({
    topic: z.string()
      .min(2, translations.label === '研究主题' ? '研究主题至少需要2个字符' : 'Research topic must be at least 2 characters')
      .max(200, translations.label === '研究主题' ? '研究主题不能超过200个字符' : 'Research topic cannot exceed 200 characters')
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      // 验证输入
      const validatedData = inputSchema.parse({ topic });
      
      // 调用父组件的提交函数
      await onSubmit(validatedData.topic);
      
      // 清空输入框
      setTopic('');
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.issues[0].message);
      } else {
        setError(translations.label === '研究主题' ? '提交失败，请重试' : 'Submission failed, please try again');
      }
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white/10 backdrop-blur-sm border-white/20">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="topic" className="text-sm font-medium text-white">
              {translations.label}
            </label>
            <Input
              id="topic"
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder={translations.placeholder}
              className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white/50 focus:ring-white/20"
              disabled={loading}
            />
            {error && (
              <p className="text-sm text-red-300">{error}</p>
            )}
          </div>
          
          <Button
            type="submit"
            disabled={loading || !topic.trim()}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3"
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                {translations.loadingText}
              </div>
            ) : (
              translations.submitButton
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
