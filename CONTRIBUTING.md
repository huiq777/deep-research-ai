# 贡献指南

感谢您对 Deep Research AI Agent 项目的关注！我们欢迎所有形式的贡献，无论是代码、文档、测试还是反馈。

## 🤝 如何贡献

### 1. Fork 和克隆项目

1. 在 GitHub 上 Fork 本项目
2. 克隆你的 Fork 到本地：
   ```bash
   git clone https://github.com/yourusername/deep-research-ai.git
   cd deep-research-ai
   ```

### 2. 设置开发环境

1. 安装依赖：
   ```bash
   npm install
   ```

2. 复制环境变量模板：
   ```bash
   cp .env.example .env.local
   ```

3. 配置环境变量（在 `.env.local` 中）：
   ```bash
   OPENROUTER_API_KEY=your_openrouter_api_key
   EXA_SEARCH_API_KEY=your_exa_search_api_key
   ```

4. 启动开发服务器：
   ```bash
   npm run dev
   ```

### 3. 创建分支

为你的贡献创建一个新分支：

```bash
git checkout -b feature/your-feature-name
# 或者
git checkout -b fix/your-bug-fix
# 或者
git checkout -b docs/your-documentation-update
```

### 4. 开发规范

#### 代码风格

- 使用 TypeScript 进行类型安全开发
- 遵循 ESLint 规则
- 使用 Prettier 格式化代码
- 组件使用 PascalCase 命名
- 文件使用 kebab-case 命名

#### 提交信息规范

使用 [Conventional Commits](https://www.conventionalcommits.org/) 格式：

```bash
# 新功能
git commit -m "feat: add new research feature"

# Bug修复
git commit -m "fix: resolve search API issue"

# 文档更新
git commit -m "docs: update installation guide"

# 样式更新
git commit -m "style: improve button styling"

# 重构
git commit -m "refactor: optimize research engine"

# 测试
git commit -m "test: add unit tests for search function"

# 构建
git commit -m "build: update dependencies"
```

#### 组件开发规范

1. **组件结构**：
   ```tsx
   // components/MyComponent.tsx
   import React from 'react';
   import { cn } from '@/lib/utils';
   
   interface MyComponentProps {
     className?: string;
     children?: React.ReactNode;
   }
   
   export function MyComponent({ className, children }: MyComponentProps) {
     return (
       <div className={cn('base-styles', className)}>
         {children}
       </div>
     );
   }
   ```

2. **类型定义**：
   - 为所有 props 定义 TypeScript 接口
   - 使用可选属性标记非必需参数
   - 为复杂数据结构创建类型定义

3. **样式规范**：
   - 优先使用 Tailwind CSS 类
   - 使用 `cn()` 函数组合类名
   - 避免内联样式

### 5. 测试

在提交代码前，请确保：

1. **运行测试**：
   ```bash
   npm run test
   ```

2. **代码检查**：
   ```bash
   npm run lint
   ```

3. **类型检查**：
   ```bash
   npm run type-check
   ```

4. **构建测试**：
   ```bash
   npm run build
   ```

### 6. 提交 Pull Request

1. 推送你的分支到 GitHub：
   ```bash
   git push origin feature/your-feature-name
   ```

2. 在 GitHub 上创建 Pull Request

3. 填写 PR 模板：
   - 描述你的更改
   - 列出相关的 Issue
   - 添加测试说明
   - 提供截图（如果是 UI 更改）

## 📋 贡献类型

### 🐛 Bug 修复

- 在 Issues 中搜索是否已有相关报告
- 如果没有，创建新的 Issue 描述问题
- 修复 Bug 并添加测试用例
- 确保修复不会引入新的问题

### ✨ 新功能

- 在 Issues 中讨论新功能需求
- 确保功能符合项目目标
- 添加适当的测试和文档
- 考虑向后兼容性

### 📝 文档改进

- 修复拼写错误和语法问题
- 改进现有文档的清晰度
- 添加缺失的文档
- 翻译文档到其他语言

### 🎨 UI/UX 改进

- 改进用户界面设计
- 优化用户体验
- 确保响应式设计
- 保持设计一致性

### ⚡ 性能优化

- 识别性能瓶颈
- 优化代码执行效率
- 减少包大小
- 改进加载时间

## 🏷️ Issue 标签说明

- `bug` - 需要修复的问题
- `enhancement` - 功能改进建议
- `feature` - 新功能请求
- `documentation` - 文档相关
- `good first issue` - 适合新贡献者
- `help wanted` - 需要帮助
- `priority: high` - 高优先级
- `priority: low` - 低优先级

## 📞 获取帮助

如果你在贡献过程中遇到问题：

1. 查看 [Issues](https://github.com/yourusername/deep-research-ai/issues) 是否有类似问题
2. 在 [Discussions](https://github.com/yourusername/deep-research-ai/discussions) 中提问
3. 查看项目文档
4. 联系项目维护者

## 🎉 致谢

所有贡献者都会被列在项目的 [CONTRIBUTORS.md](CONTRIBUTORS.md) 文件中。

感谢你的贡献！ 🙏
