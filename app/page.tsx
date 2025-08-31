'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function Home() {
  const [apiData, setApiData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const testApi = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/test');
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      setApiData({ error: 'API调用失败' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* 标题部分 */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            Deep Research AI Agent
          </h1>
          <p className="text-xl text-muted-foreground">
            一个强大的AI研究助手，能够对任何主题进行深入、全面的研究
          </p>
          <div className="flex justify-center gap-2">
            <Badge variant="default">Next.js 15</Badge>
            <Badge variant="secondary">React 19</Badge>
            <Badge variant="outline">TypeScript</Badge>
            <Badge variant="outline">Tailwind CSS</Badge>
          </div>
        </div>

        {/* 测试卡片 */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>项目设置测试</CardTitle>
            <CardDescription>
              验证项目基础配置是否正确
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* 按钮测试 */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">按钮组件测试</h3>
              <div className="flex gap-2 flex-wrap">
                <Button variant="default">主要按钮</Button>
                <Button variant="secondary">次要按钮</Button>
                <Button variant="outline">轮廓按钮</Button>
                <Button variant="destructive">危险按钮</Button>
              </div>
            </div>

            {/* 输入框测试 */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">输入组件测试</h3>
              <div className="space-y-2">
                <Input placeholder="请输入文本..." />
                <Textarea placeholder="请输入多行文本..." />
              </div>
            </div>

            {/* API测试 */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">API端点测试</h3>
              <div className="space-y-2">
                <Button 
                  onClick={testApi} 
                  disabled={loading}
                  variant="outline"
                >
                  {loading ? '测试中...' : '测试API端点'}
                </Button>
                {apiData && (
                  <div className="p-3 bg-muted rounded-md">
                    <pre className="text-xs overflow-auto">
                      {JSON.stringify(apiData, null, 2)}
                    </pre>
                  </div>
                )}
              </div>
            </div>

            {/* 状态显示 */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">项目状态</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between">
                  <span>Shadcn UI:</span>
                  <Badge variant="default" className="text-xs">已配置</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Tailwind CSS:</span>
                  <Badge variant="default" className="text-xs">已配置</Badge>
                </div>
                <div className="flex justify-between">
                  <span>TypeScript:</span>
                  <Badge variant="default" className="text-xs">已配置</Badge>
                </div>
                <div className="flex justify-between">
                  <span>API路由:</span>
                  <Badge variant="default" className="text-xs">已配置</Badge>
                </div>
                <div className="flex justify-between">
                  <span>环境变量:</span>
                  <Badge variant="outline" className="text-xs">待配置</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 下一步提示 */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>下一步</CardTitle>
            <CardDescription>
              项目基础设置已完成，接下来可以：
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>配置环境变量（OPENROUTER_API_KEY, EXA_SEARCH_API_KEY）</li>
              <li>实现前端基础组件结构</li>
              <li>设置状态管理系统</li>
              <li>创建问答流程组件</li>
              <li>实现后端API结构</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
