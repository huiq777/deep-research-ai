export type Language = 'zh' | 'en';

export interface Translations {
  title: string;
  subtitle: string;
  userInput: {
    label: string;
    placeholder: string;
    submitButton: string;
    loadingText: string;
  };
  features: {
    tabs: {
      features: string;
      howItWorks: string;
      examples: string;
    };
    cards: {
      researchEngine: {
        title: string;
        description: string;
      };
      activityTracking: {
        title: string;
        description: string;
      };
      reportGeneration: {
        title: string;
        description: string;
      };
    };
  };
  researchProcess: {
    title: string;
    description: string;
    steps: {
      step1: { title: string; description: string; };
      step2: { title: string; description: string; };
      step3: { title: string; description: string; };
      step4: { title: string; description: string; };
    };
  };
  examples: {
    topics: {
      title: string;
      items: Array<{ title: string; description: string; }>;
    };
    scenarios: {
      title: string;
      items: string[];
    };
  };
}

export const translations: Record<Language, Translations> = {
  zh: {
    title: 'Deep Research',
    subtitle: '一个强大的AI研究助手，能够对任何主题进行深入、全面的研究，并生成结构化的研究报告',
    userInput: {
      label: '研究主题',
      placeholder: '输入您想要研究的主题，例如：人工智能的发展趋势',
      submitButton: '开始研究',
      loadingText: '研究中...',
    },
    features: {
      tabs: {
        features: '核心功能',
        howItWorks: '工作原理',
        examples: '使用示例',
      },
      cards: {
        researchEngine: {
          title: '🔍 深度研究引擎',
          description: '多轮、多步骤的迭代研究，确保研究深度和广度，提供全面的分析结果。',
        },
        activityTracking: {
          title: '📊 实时活动追踪',
          description: '展示研究过程中的每个步骤和发现，让您了解研究的进展和思路。',
        },
        reportGeneration: {
          title: '📝 流式报告生成',
          description: '实时生成和更新研究报告，提供即时反馈，让您随时了解研究进展。',
        },
      },
    },
    researchProcess: {
      title: '研究流程',
      description: '了解Deep Research AI Agent如何工作',
      steps: {
        step1: {
          title: '第一步：主题分析',
          description: '系统首先分析您输入的研究主题，确定研究方向和关键问题。',
        },
        step2: {
          title: '第二步：信息收集',
          description: '通过多个来源收集相关信息，包括最新研究、新闻报道和专家观点。',
        },
        step3: {
          title: '第三步：深度分析',
          description: '对收集的信息进行深度分析，识别模式、趋势和关键洞察。',
        },
        step4: {
          title: '第四步：报告生成',
          description: '生成结构化的研究报告，包含摘要、主要发现、结论和建议。',
        },
      },
    },
    examples: {
      topics: {
        title: '研究主题示例',
        items: [
          { title: '人工智能的发展趋势', description: '探索AI技术的最新发展方向' },
          { title: '气候变化的影响', description: '分析全球变暖对经济的影响' },
          { title: '远程工作的未来', description: '研究后疫情时代的工作模式' },
        ],
      },
      scenarios: {
        title: '适用场景',
        items: ['学术研究', '市场分析', '技术趋势', '政策研究'],
      },
    },
  },
  en: {
    title: 'Deep Research',
    subtitle: 'A powerful AI research assistant that can conduct in-depth, comprehensive research on any topic and generate structured research reports',
    userInput: {
      label: 'Research Topic',
      placeholder: 'Enter your research topic, e.g., AI development trends',
      submitButton: 'Start Research',
      loadingText: 'Researching...',
    },
    features: {
      tabs: {
        features: 'Core Features',
        howItWorks: 'How It Works',
        examples: 'Examples',
      },
      cards: {
        researchEngine: {
          title: '🔍 Deep Research Engine',
          description: 'Multi-round, multi-step iterative research ensuring depth and breadth, providing comprehensive analysis results.',
        },
        activityTracking: {
          title: '📊 Real-time Activity Tracking',
          description: 'Display each step and discovery in the research process, helping you understand research progress and insights.',
        },
        reportGeneration: {
          title: '📝 Streaming Report Generation',
          description: 'Generate and update research reports in real-time, providing instant feedback and keeping you informed of research progress.',
        },
      },
    },
    researchProcess: {
      title: 'Research Process',
      description: 'Learn how Deep Research AI Agent works',
      steps: {
        step1: {
          title: 'Step 1: Topic Analysis',
          description: 'The system first analyzes your input research topic to determine research direction and key questions.',
        },
        step2: {
          title: 'Step 2: Information Gathering',
          description: 'Collect relevant information from multiple sources, including latest research, news reports, and expert opinions.',
        },
        step3: {
          title: 'Step 3: Deep Analysis',
          description: 'Conduct in-depth analysis of collected information to identify patterns, trends, and key insights.',
        },
        step4: {
          title: 'Step 4: Report Generation',
          description: 'Generate structured research reports including summaries, key findings, conclusions, and recommendations.',
        },
      },
    },
    examples: {
      topics: {
        title: 'Research Topic Examples',
        items: [
          { title: 'AI Development Trends', description: 'Explore the latest development directions in AI technology' },
          { title: 'Impact of Climate Change', description: 'Analyze the economic impact of global warming' },
          { title: 'Future of Remote Work', description: 'Research work patterns in the post-pandemic era' },
        ],
      },
      scenarios: {
        title: 'Applicable Scenarios',
        items: ['Academic Research', 'Market Analysis', 'Technology Trends', 'Policy Research'],
      },
    },
  },
};
