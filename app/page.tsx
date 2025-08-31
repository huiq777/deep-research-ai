'use client';

import { useState } from 'react';
import { UserInput } from '@/components/UserInput';
import { LanguageToggle } from '@/components/LanguageToggle';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { translations, type Language } from '@/lib/translations';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<Language>('zh');

  const handleSubmit = async (topic: string) => {
    setLoading(true);
    try {
      // 这里将来会调用实际的API
      console.log('开始研究主题:', topic);
      
      // 模拟API调用延迟
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // 这里将来会处理研究结果
      console.log('研究完成');
    } catch (error) {
      console.error('研究失败:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
  };

  const t = translations[currentLanguage];

  return (
    <div className="min-h-screen relative">
      {/* 语言切换组件 */}
      <LanguageToggle 
        currentLanguage={currentLanguage} 
        onLanguageChange={handleLanguageChange} 
      />
      
      {/* 背景图像 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/background.jpg)',
        }}
      />
      
      {/* 半透明遮罩 */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* 主要内容 */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* 标题区域 */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            {/* 主标题 */}
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-dancing">
                Deep Research
              </span>
            </h1>
            
            {/* 副标题 */}
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>
            
            {/* 用户输入组件 */}
            <div className="mt-12">
              <UserInput onSubmit={handleSubmit} loading={loading} translations={t.userInput} />
            </div>
          </div>
        </div>

        {/* 功能展示区域 */}
        <div className="px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="features" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-white/10 backdrop-blur-sm border-white/20">
                <TabsTrigger value="features" className="text-white data-[state=active]:bg-white/20">
                  {t.features.tabs.features}
                </TabsTrigger>
                <TabsTrigger value="how-it-works" className="text-white data-[state=active]:bg-white/20">
                  {t.features.tabs.howItWorks}
                </TabsTrigger>
                <TabsTrigger value="examples" className="text-white data-[state=active]:bg-white/20">
                  {t.features.tabs.examples}
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="features" className="mt-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                    <CardHeader>
                      <CardTitle className="text-blue-300">{t.features.cards.researchEngine.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/80">
                        {t.features.cards.researchEngine.description}
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                    <CardHeader>
                      <CardTitle className="text-purple-300">{t.features.cards.activityTracking.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/80">
                        {t.features.cards.activityTracking.description}
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                    <CardHeader>
                      <CardTitle className="text-pink-300">{t.features.cards.reportGeneration.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/80">
                        {t.features.cards.reportGeneration.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="how-it-works" className="mt-6">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardHeader>
                    <CardTitle>{t.researchProcess.title}</CardTitle>
                    <CardDescription className="text-white/70">
                      {t.researchProcess.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="step-1" className="border-white/20">
                        <AccordionTrigger className="text-white hover:text-white/80">
                          {t.researchProcess.steps.step1.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-white/80">
                          {t.researchProcess.steps.step1.description}
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="step-2" className="border-white/20">
                        <AccordionTrigger className="text-white hover:text-white/80">
                          {t.researchProcess.steps.step2.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-white/80">
                          {t.researchProcess.steps.step2.description}
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="step-3" className="border-white/20">
                        <AccordionTrigger className="text-white hover:text-white/80">
                          {t.researchProcess.steps.step3.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-white/80">
                          {t.researchProcess.steps.step3.description}
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="step-4" className="border-white/20">
                        <AccordionTrigger className="text-white hover:text-white/80">
                          {t.researchProcess.steps.step4.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-white/80">
                          {t.researchProcess.steps.step4.description}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="examples" className="mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                    <CardHeader>
                      <CardTitle>{t.examples.topics.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {t.examples.topics.items.map((item, index) => (
                        <div key={index} className="p-3 bg-white/10 rounded-lg">
                          <p className="font-medium">{item.title}</p>
                          <p className="text-sm text-white/70">{item.description}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                    <CardHeader>
                      <CardTitle>{t.examples.scenarios.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {t.examples.scenarios.items.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${
                            index === 0 ? 'bg-blue-400' :
                            index === 1 ? 'bg-purple-400' :
                            index === 2 ? 'bg-pink-400' : 'bg-green-400'
                          }`}></span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
