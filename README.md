# React Wallet Demo | React 钱包连接演示

[English](#english) | [中文](#中文)

---

## English

### 📖 Introduction

A modern React application demonstrating wallet connection functionality using RainbowKit and Wagmi. This demo supports multiple wallet providers with a focus on Rabby Wallet integration.

### ✨ Features

- 🔗 **Multi-Wallet Support**: Connect with various Web3 wallets including Rabby Wallet, MetaMask, Coinbase Wallet, and more
- 🎨 **Modern UI**: Beautiful wallet connection interface powered by RainbowKit
- ⚡ **Fast Development**: Built with Vite for lightning-fast HMR
- 🔒 **Type Safety**: Full TypeScript support
- 🌐 **Multi-Chain**: Support for Ethereum Mainnet, Goerli, and Polygon networks
- 💰 **Balance Display**: View wallet address and ETH balance after connection

### 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **RainbowKit** - Wallet connection UI
- **Wagmi** - React hooks for Ethereum
- **TanStack Query** - Data fetching and caching

### 📦 Installation

```bash
# Clone the repository
git clone https://github.com/fffshiyu/walletdemo.git
cd walletdemo

# Install dependencies
npm install

# Create .env file and add your WalletConnect Project ID
# Get your Project ID from https://cloud.walletconnect.com
echo "VITE_WALLETCONNECT_PROJECT_ID=your_project_id_here" > .env
```

### 🚀 Usage

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The application will be available at `http://localhost:3000`

### 🔑 Configuration

Create a `.env` file in the root directory:

```env
VITE_WALLETCONNECT_PROJECT_ID=your_project_id_here
```

Get your WalletConnect Project ID from [WalletConnect Dashboard](https://cloud.walletconnect.com)

### 📝 Project Structure

```
walletdemo/
├── src/
│   ├── app.tsx           # Main App component with providers
│   ├── config.tsx        # Wagmi and RainbowKit configuration
│   ├── home.tsx          # Home page with wallet connection UI
│   ├── main.tsx          # Application entry point
│   ├── index.css         # Global styles
│   └── vite-env.d.ts     # TypeScript environment declarations
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

### 🌟 Supported Wallets

- **Rabby Wallet** (Recommended)
- MetaMask
- Coinbase Wallet
- WalletConnect
- And many more...

### 📄 License

MIT

---

## 中文

### 📖 项目介绍

这是一个现代化的 React 应用程序，演示了使用 RainbowKit 和 Wagmi 实现钱包连接功能。该演示支持多个钱包提供商，重点集成了 Rabby Wallet。

### ✨ 功能特性

- 🔗 **多钱包支持**：连接各种 Web3 钱包，包括 Rabby Wallet、MetaMask、Coinbase Wallet 等
- 🎨 **现代化界面**：由 RainbowKit 提供的精美钱包连接界面
- ⚡ **快速开发**：使用 Vite 构建，享受极速热更新
- 🔒 **类型安全**：完整的 TypeScript 支持
- 🌐 **多链支持**：支持以太坊主网、Goerli 测试网和 Polygon 网络
- 💰 **余额显示**：连接后可查看钱包地址和 ETH 余额

### 🛠️ 技术栈

- **React 18** - UI 框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具和开发服务器
- **RainbowKit** - 钱包连接 UI
- **Wagmi** - 以太坊 React Hooks
- **TanStack Query** - 数据获取和缓存

### 📦 安装

```bash
# 克隆仓库
git clone https://github.com/fffshiyu/walletdemo.git
cd walletdemo

# 安装依赖
npm install

# 创建 .env 文件并添加你的 WalletConnect Project ID
# 从 https://cloud.walletconnect.com 获取你的 Project ID
echo "VITE_WALLETCONNECT_PROJECT_ID=你的项目ID" > .env
```

### 🚀 使用方法

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

应用程序将在 `http://localhost:3000` 上运行

### 🔑 配置

在项目根目录创建 `.env` 文件：

```env
VITE_WALLETCONNECT_PROJECT_ID=你的项目ID
```

从 [WalletConnect Dashboard](https://cloud.walletconnect.com) 获取你的 WalletConnect Project ID

### 📝 项目结构

```
walletdemo/
├── src/
│   ├── app.tsx           # 主应用组件，包含提供者
│   ├── config.tsx        # Wagmi 和 RainbowKit 配置
│   ├── home.tsx          # 主页，包含钱包连接界面
│   ├── main.tsx          # 应用程序入口
│   ├── index.css         # 全局样式
│   └── vite-env.d.ts     # TypeScript 环境声明
├── index.html            # HTML 模板
├── vite.config.ts        # Vite 配置
├── tsconfig.json         # TypeScript 配置
└── package.json          # 项目依赖
```

### 🌟 支持的钱包

- **Rabby Wallet**（推荐）
- MetaMask
- Coinbase Wallet
- WalletConnect
- 以及更多...

### 📄 许可证

MIT

