# Deep Research AI Agent

[![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

一个强大的AI研究助手，能够对任何主题进行深入、全面的研究，并生成结构化的研究报告。
## 项目背景
- 本项目是基于 https://github.com/zenyarn/deep-research-agent?tab=readme-ov-file#deep-research-ai-agent-复现项目 对 https://github.com/codebucks27/Deep-Research-AI-Agent 的复现。
## 🌟 主要功能

- **🔍 深度研究引擎**: 多轮、多步骤的迭代研究，确保研究深度和广度
- **📊 实时活动追踪**: 展示研究过程中的每个步骤和发现，让用户了解研究进展
- **📝 流式报告生成**: 实时生成和更新研究报告，提供即时反馈
- **🤖 多模型集成**: 根据任务需求自动选择最合适的AI模型（Claude、GPT-4等）
- **🔎 高级搜索集成**: 通过Exa Search API获取最新、最相关的信息
- **🎨 用户友好界面**: 简洁而功能强大的UI，适用于研究任何主题

## 🛠️ 技术栈

### 前端技术
- **Next.js 15** - React全栈框架
- **React 19** - 用户界面库
- **TypeScript** - 类型安全的JavaScript
- **Tailwind CSS 4** - 实用优先的CSS框架
- **Shadcn UI** - 高质量UI组件库

### 状态管理
- **Zustand** - 轻量级状态管理

### AI与API集成
- **OpenRouter API** - 多模型AI服务
- **Exa Search API** - 高级搜索服务
- **AI SDK** - AI功能集成

### 开发工具
- **React Hook Form** - 表单处理
- **Zod** - 数据验证
- **React Markdown** - Markdown渲染
- **Lucide React** - 图标库

## 🚀 快速开始

### 环境要求

- Node.js 18.0 或更高版本
- npm 或 yarn 包管理器

### 安装步骤

1. **克隆项目**
   ```bash
   git clone https://github.com/yourusername/deep-research-ai.git
   cd deep-research-ai
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **环境配置**
   ```bash
   # 复制环境变量模板
   cp .env.example .env.local
   
   # 编辑 .env.local 文件，添加你的API密钥
   OPENROUTER_API_KEY=your_openrouter_api_key
   EXA_SEARCH_API_KEY=your_exa_search_api_key
   ```

4. **启动开发服务器**
   ```bash
   npm run dev
   ```

5. **访问应用**
   打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 📚 详细文档

本项目提供了完整的实现指南，包含10个详细的文档：

1. [项目初始化与环境配置](./docs/01-项目初始化.md)
2. [前端基础结构实现](./docs/02-前端基础结构.md)
3. [状态管理实现](./docs/03-状态管理.md)
4. [问答流程与UI组件](./docs/04-问答流程与UI组件.md)
5. [后端API基础结构](./docs/05-后端API基础结构.md)
6. [研究引擎核心实现](./docs/06-研究引擎核心实现.md)
7. [AI模型集成](./docs/07-AI模型集成.md)
8. [研究活动与报告组件](./docs/08-研究活动与报告组件.md)
9. [流式响应与实时更新](./docs/09-流式响应与实时更新.md)
10. [部署与性能优化](./docs/10-部署与性能优化.md)

## 🔧 开发指南

### 项目结构

```
deep-research-ai/
├── app/                    # Next.js App Router
│   ├── api/               # API路由
│   ├── components/        # React组件
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 首页
├── docs/                  # 项目文档
├── public/                # 静态资源
├── .env.example           # 环境变量模板
├── .gitignore            # Git忽略文件
├── package.json           # 项目配置
├── README.md              # 项目说明
└── tsconfig.json          # TypeScript配置
```

### 开发命令

```bash
# 开发模式
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start

# 代码检查
npm run lint
```

## 🤝 贡献指南

我们欢迎所有形式的贡献！请遵循以下步骤：

1. Fork 本项目
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

### 贡献类型

- 🐛 Bug修复
- ✨ 新功能
- 📝 文档改进
- 🎨 UI/UX改进
- ⚡ 性能优化

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [Next.js](https://nextjs.org/) - 优秀的React框架
- [OpenRouter](https://openrouter.ai/) - 多模型AI服务
- [Exa Search](https://exa.ai/) - 高级搜索服务
- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的CSS框架
- [Shadcn UI](https://ui.shadcn.com/) - 高质量UI组件

## 📞 联系我们

- 项目主页: [https://github.com/yourusername/deep-research-ai](https://github.com/yourusername/deep-research-ai)
- 问题反馈: [Issues](https://github.com/yourusername/deep-research-ai/issues)
- 讨论区: [Discussions](https://github.com/yourusername/deep-research-ai/discussions)

---

⭐ 如果这个项目对你有帮助，请给我们一个星标！
