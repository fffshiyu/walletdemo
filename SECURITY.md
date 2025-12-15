# Security Guide | 安全指南

[English](#english) | [中文](#中文)

---

## English

### 🔐 API Key Security

#### Current Configuration

This project is configured with security best practices in mind:

✅ **Safe to expose:**
- `VITE_WALLETCONNECT_PROJECT_ID` - This is a public identifier designed to be exposed in the frontend

✅ **Protected:**
- `.env` file is in `.gitignore` - Won't be committed to Git
- Using `publicProvider()` - No API keys required

#### ⚠️ Important Notes

**All environment variables starting with `VITE_` will be bundled into your JavaScript code and visible in the browser.**

This means:
- Users can see these values in browser DevTools
- They will be visible in your production build
- Never put sensitive API keys in `VITE_` prefixed variables

#### 🚀 Production Recommendations

If you plan to use paid RPC providers (Alchemy, Infura, etc.), follow these best practices:

##### Option 1: Backend Proxy (Recommended)

Create a backend API to proxy RPC requests:

```
Frontend → Your Backend API → Alchemy/Infura (with API key)
```

**Benefits:**
- API keys remain secure on your server
- You can add rate limiting and monitoring
- Better control over usage

##### Option 2: Domain Restrictions

If using frontend-only approach:

1. Go to your RPC provider dashboard (Alchemy/Infura)
2. Set up domain whitelist restrictions
3. Only allow requests from your production domain(s)

**Note:** This still exposes the API key in code, but limits abuse

##### Option 3: Environment-Specific Keys

Use different keys for development and production:

```env
# Development (low rate limits)
VITE_ALCHEMY_API_KEY=dev_key_with_low_limits

# Production (higher limits, domain restricted)
VITE_ALCHEMY_API_KEY=prod_key_with_domain_restrictions
```

#### 🔒 Security Checklist

- [x] `.env` file is in `.gitignore`
- [x] Using public RPC providers (no sensitive keys)
- [x] WalletConnect Project ID is properly configured
- [ ] If using Alchemy/Infura: Set up domain restrictions
- [ ] If using paid services: Consider backend proxy
- [ ] Regular security audits of dependencies (`npm audit`)

#### 📝 What's Safe vs What's Not

**✅ Safe to expose in frontend:**
- WalletConnect Project ID
- Public RPC endpoints
- Chain IDs
- Contract addresses (public blockchain data)

**❌ Never expose in frontend:**
- Private keys or seed phrases
- Backend API authentication tokens
- Database credentials
- Admin API keys
- Server secrets

---

## 中文

### 🔐 API 密钥安全

#### 当前配置

本项目已按照安全最佳实践进行配置：

✅ **可以安全暴露的：**
- `VITE_WALLETCONNECT_PROJECT_ID` - 这是公开标识符，设计上就是要暴露在前端的

✅ **已受保护的：**
- `.env` 文件在 `.gitignore` 中 - 不会被提交到 Git
- 使用 `publicProvider()` - 不需要 API 密钥

#### ⚠️ 重要提示

**所有以 `VITE_` 开头的环境变量都会被打包到 JavaScript 代码中，在浏览器中可见。**

这意味着：
- 用户可以在浏览器开发者工具中看到这些值
- 它们在生产构建中也是可见的
- 永远不要在 `VITE_` 前缀的变量中放置敏感的 API 密钥

#### 🚀 生产环境建议

如果您计划使用付费 RPC 提供商（Alchemy、Infura 等），请遵循以下最佳实践：

##### 方案 1：后端代理（推荐）

创建后端 API 来代理 RPC 请求：

```
前端 → 你的后端 API → Alchemy/Infura（带 API 密钥）
```

**优势：**
- API 密钥在服务器上保持安全
- 可以添加速率限制和监控
- 更好地控制使用情况

##### 方案 2：域名限制

如果使用纯前端方式：

1. 进入你的 RPC 提供商控制台（Alchemy/Infura）
2. 设置域名白名单限制
3. 仅允许来自你的生产域名的请求

**注意：** 这仍然会在代码中暴露 API 密钥，但可以限制滥用

##### 方案 3：环境特定密钥

为开发和生产使用不同的密钥：

```env
# 开发环境（低速率限制）
VITE_ALCHEMY_API_KEY=低限制的开发密钥

# 生产环境（更高限制，域名限制）
VITE_ALCHEMY_API_KEY=有域名限制的生产密钥
```

#### 🔒 安全检查清单

- [x] `.env` 文件在 `.gitignore` 中
- [x] 使用公共 RPC 提供商（无敏感密钥）
- [x] WalletConnect Project ID 正确配置
- [ ] 如使用 Alchemy/Infura：设置域名限制
- [ ] 如使用付费服务：考虑使用后端代理
- [ ] 定期安全审计依赖项（`npm audit`）

#### 📝 什么是安全的 vs 什么不安全

**✅ 在前端暴露是安全的：**
- WalletConnect Project ID
- 公共 RPC 端点
- 链 ID
- 合约地址（公共区块链数据）

**❌ 永远不要在前端暴露：**
- 私钥或助记词
- 后端 API 认证令牌
- 数据库凭证
- 管理员 API 密钥
- 服务器密钥


