'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";

export default function TestComponents() {
  const [loading, setLoading] = useState(false);

  const handleTestLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            UI组件测试页面
          </h1>
          <p className="text-xl text-muted-foreground">
            验证所有UI组件是否正常工作
          </p>
        </div>

        {/* 基础组件测试 */}
        <Card>
          <CardHeader>
            <CardTitle>基础组件</CardTitle>
            <CardDescription>测试基础UI组件</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 按钮测试 */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">按钮组件</h3>
              <div className="flex gap-2 flex-wrap">
                <Button variant="default">主要按钮</Button>
                <Button variant="secondary">次要按钮</Button>
                <Button variant="outline">轮廓按钮</Button>
                <Button variant="destructive">危险按钮</Button>
                <Button disabled>禁用按钮</Button>
                <Button onClick={handleTestLoading} disabled={loading}>
                  {loading ? '加载中...' : '加载按钮'}
                </Button>
              </div>
            </div>

            {/* 输入框测试 */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">输入组件</h3>
              <div className="space-y-2">
                <Input placeholder="请输入文本..." />
                <Textarea placeholder="请输入多行文本..." />
              </div>
            </div>

            {/* 徽章测试 */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">徽章组件</h3>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="default">默认徽章</Badge>
                <Badge variant="secondary">次要徽章</Badge>
                <Badge variant="outline">轮廓徽章</Badge>
                <Badge variant="destructive">危险徽章</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 交互组件测试 */}
        <Card>
          <CardHeader>
            <CardTitle>交互组件</CardTitle>
            <CardDescription>测试Tabs和Accordion组件</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Tabs测试 */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Tabs组件</h3>
              <Tabs defaultValue="tab1" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="tab1">标签1</TabsTrigger>
                  <TabsTrigger value="tab2">标签2</TabsTrigger>
                  <TabsTrigger value="tab3">标签3</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="mt-4">
                  <Card>
                    <CardContent className="pt-6">
                      <p>这是第一个标签的内容。</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="tab2" className="mt-4">
                  <Card>
                    <CardContent className="pt-6">
                      <p>这是第二个标签的内容。</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="tab3" className="mt-4">
                  <Card>
                    <CardContent className="pt-6">
                      <p>这是第三个标签的内容。</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Accordion测试 */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Accordion组件</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>第一个折叠项</AccordionTrigger>
                  <AccordionContent>
                    这是第一个折叠项的内容。可以包含任何文本或组件。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>第二个折叠项</AccordionTrigger>
                  <AccordionContent>
                    这是第二个折叠项的内容。可以包含任何文本或组件。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>第三个折叠项</AccordionTrigger>
                  <AccordionContent>
                    这是第三个折叠项的内容。可以包含任何文本或组件。
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </CardContent>
        </Card>

        {/* 响应式测试 */}
        <Card>
          <CardHeader>
            <CardTitle>响应式布局测试</CardTitle>
            <CardDescription>测试在不同屏幕尺寸下的显示效果</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <p>响应式卡片 1</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p>响应式卡片 2</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p>响应式卡片 3</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* 状态测试 */}
        <Card>
          <CardHeader>
            <CardTitle>状态测试</CardTitle>
            <CardDescription>测试各种状态下的组件表现</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex justify-between">
                <span>组件加载:</span>
                <Badge variant="default" className="text-xs">正常</Badge>
              </div>
              <div className="flex justify-between">
                <span>样式渲染:</span>
                <Badge variant="default" className="text-xs">正常</Badge>
              </div>
              <div className="flex justify-between">
                <span>交互响应:</span>
                <Badge variant="default" className="text-xs">正常</Badge>
              </div>
              <div className="flex justify-between">
                <span>动画效果:</span>
                <Badge variant="default" className="text-xs">正常</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
