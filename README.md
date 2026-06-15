# LinguaLens AI Reading Companion

一个作品集导向的 AI 阅读辅助 MVP：上传文本，左侧阅读，选中文本后在右侧生成翻译、词义、上下文解释，并可以继续追问。

## 当前版本

- 支持 `.txt` / `.md` / 简单 `.html` / 可提取文本的 `.pdf`
- PDF 使用 PDF.js 页面渲染模式：canvas 保留原页面视觉结构，text layer 支持选中文字解释
- 左侧阅读器和右侧 AI 聊天栏
- 支持 OpenAI / DeepSeek 服务商切换
- 默认使用 DeepSeek + `deepseek-v4-flash`
- 默认关闭自动解释，避免不必要的 API 消耗
- 可选择界面语言：中文 / 日本語 / English
- 可选择讲解语言：中文 / 日本語 / English
- 快捷操作：解释、翻译、总结上下文、保存笔记
- 工作区操作：清空聊天、清空笔记、重置本书、导出 Markdown 笔记
- 自动保存阅读进度，刷新页面后恢复上次阅读位置
- 支持选中文本高亮，高亮会跟当前书籍绑定
- 支持取消高亮：选中同一段高亮文本后再次点击“高亮”即可取消
- 结构化笔记会保存原文、上下文、AI 解释、模型、服务商和语言
- 桌面端使用左右独立滚动：阅读区和 AI 讲解区互不影响
- 笔记和最近对话保存在浏览器 `localStorage`
- PowerShell 本地服务代理模型 API，避免在浏览器里暴露 API Key

## 运行步骤

进入项目目录：

```powershell
cd C:\Users\魏文君\ai-reading-companion
```

如果使用 DeepSeek：

```powershell
$env:DEEPSEEK_API_KEY="你的 DeepSeek API Key"
powershell -ExecutionPolicy Bypass -File .\run.ps1 -Port 8790
```

如果使用 OpenAI：

```powershell
$env:OPENAI_API_KEY="你的 OpenAI API Key"
powershell -ExecutionPolicy Bypass -File .\run.ps1 -Port 8790
```

打开浏览器：

```text
http://127.0.0.1:8790
```

如果没有设置对应服务商的 API Key，页面仍然可以运行，但 AI 回复会显示本地演示提示。

## 使用 DeepSeek

DeepSeek 支持 OpenAI 兼容格式，适合这个项目做低成本测试。先到 DeepSeek Platform 创建 API Key：

```text
https://platform.deepseek.com/api_keys
```

打开页面后：

1. 服务商选择 `DeepSeek`
2. 模型填写 `deepseek-v4-flash`
3. 界面语言选择 `中文` / `日本語` / `English`
4. 讲解语言选择 `中文` / `日本語` / `English`
5. 上传文本或 PDF，选中文字，手动点击“解释”或“翻译”
6. 对重要词句点击“高亮”，或点击“保存”生成结构化笔记

界面语言只影响按钮、标签、提示文案等网页 UI。讲解语言只影响 AI 的输出语言。两者可以不同，例如：UI 使用日本語，AI 输出 English。

DeepSeek 当前推荐模型包括 `deepseek-v4-flash` 和 `deepseek-v4-pro`。旧模型名 `deepseek-chat` / `deepseek-reasoner` 会在 2026-07-24 废弃。

## 在线 demo 部署

当前项目可以作为静态前端 + Vercel Serverless API 部署：

- `index.html` / `styles.css` / `app.js` 作为前端页面。
- `api/chat.js` 作为线上模型 API 代理。
- `api/health.js` 作为线上健康检查。
- `vercel.json` 指定 Vercel Node.js 运行环境。

在 Vercel 项目里配置环境变量：

```text
DEEPSEEK_API_KEY=你的 DeepSeek API Key
DEMO_ACCESS_CODE=你想给面试官/朋友的访问码
RATE_LIMIT_MAX_REQUESTS=30
RATE_LIMIT_WINDOW_MS=3600000
```

可选：

```text
OPENAI_API_KEY=你的 OpenAI API Key
MAX_INPUT_CHARS=50000
```

说明：

- `DEMO_ACCESS_CODE` 不设置时，任何打开 demo 的人都可以调用 API。
- 设置 `DEMO_ACCESS_CODE` 后，页面会自动显示访问码输入框。
- 当前限流是 demo 级别的内存限流，适合作品集展示；生产级可以换成 Upstash Redis / Supabase / Cloudflare KV。
- 线上环境不要把 API Key 写进前端代码，只放在 Vercel 环境变量里。

## PDF 支持说明

当前 PDF 支持是 PDF.js 页面渲染版：

- 可以上传可复制文本的 PDF。
- 左侧会用 canvas 渲染 PDF 页面，尽量保留原始版式。
- 页面上叠加 text layer，因此可以像普通文本一样选中文字，再进行解释、翻译、总结、保存笔记。
- PDF 高亮使用页面坐标矩形保存；如果误点高亮，重新选中同一段文字后再次点击“高亮”即可取消。
- 扫描图片型 PDF 暂时无法识别文字，后续需要 OCR。
- PDF.js 从 CDN 动态加载，首次使用 PDF 功能需要联网。

浏览器内置 PDF 查看器虽然能正常选中文字，但网页通常不能稳定读取内置查看器中的选区，因此本项目选择 PDF.js 自渲染模式：用 canvas 保留视觉页面，再叠加 text layer 捕获选中文字。

## 常见问题

### 端口冲突

如果看到类似下面的错误：

```text
在前缀“http://127.0.0.1:8788/”上侦听失败，因为它与计算机上的现有注册冲突。
```

说明这个端口已经有服务在运行。可以直接打开已有服务，也可以换一个端口启动：

```powershell
powershell -ExecutionPolicy Bypass -File .\run.ps1 -Port 8791
```

然后打开：

```text
http://127.0.0.1:8791
```

### 429 Too Many Requests

如果右侧聊天栏显示：

```text
API 返回 429 Too Many Requests
```

说明程序已经连到了模型服务商，但 API 暂时拒绝了请求。常见原因：

- 短时间内请求太多
- API 账户没有可用额度
- Billing / 付款方式还没有设置
- 当前模型没有可用配额

可以先这样处理：

1. 等 1-2 分钟再试。
2. 保持“自动解释”关闭，选中文本后手动点“解释”。
3. 到对应服务商的 Usage / Billing 页面确认额度和付款方式。
4. 换成更便宜或更轻的模型再试。

### DeepSeek 400 Bad Request

如果 DeepSeek 返回 400，通常是请求格式或模型名不匹配。先确认：

1. 页面服务商选择 `DeepSeek`。
2. 模型填写 `deepseek-v4-flash`。
3. 修改代码后已经重新启动 `run.ps1`，并打开的是新端口。
4. PowerShell 里设置的是 `DEEPSEEK_API_KEY`，不是 `OPENAI_API_KEY`。

## 为什么先这样做

这版不依赖 Node/npm，适合在当前 Windows 环境先做出可演示产品。架构上仍然保留了真实项目思路：

- 前端负责阅读体验、文本选择、聊天 UI、笔记状态
- 本地后端负责 API Key 和模型 API 调用
- 下一步可以平滑迁移到 Next.js API Routes 或 FastAPI

OpenAI 调用使用 Responses API：`POST https://api.openai.com/v1/responses`。

DeepSeek 调用使用 OpenAI 兼容 Chat Completions：`POST https://api.deepseek.com/chat/completions`。

## 下一步路线

1. 优化 PDF 阅读性能：大文件按需渲染、缩放控制、页码导航。
2. 增加 EPUB 支持：用 `epub.js` 渲染章节。
3. 增加笔记标签和搜索。
4. 给 PDF 增加 OCR fallback，支持扫描图片型 PDF。
5. 把 PowerShell 后端换成 Next.js API Route 或 FastAPI。
6. 做在线 demo：部署、访问控制、限流、自带示例文本。
