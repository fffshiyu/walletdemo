# React Wallet Demo | React 钱包连接演示

[English](#english) | [中文](#中文)

## 🌐 Live Demo

**Try it now:** [https://my-app-wheat-iota-66.vercel.app/](https://my-app-wheat-iota-66.vercel.app/)

![App Screenshot](./screenshot.png)

---

## English

### 📖 Introduction

A modern React application demonstrating wallet connection functionality using RainbowKit and Wagmi. This demo supports multiple wallet providers with a focus on Rabby Wallet integration.

**What does this app do?**

This is a simple Web3 wallet connection demo that lets you:
- Click a button to connect your crypto wallet (like Rabby, MetaMask, etc.)
- See your wallet address once connected
- View your ETH balance across different blockchain networks
- Switch between different blockchains (Ethereum, Polygon, etc.)

Perfect for learning how to integrate wallet connections into your own Web3 apps!

### ✨ Features

- 🔗 **Multi-Wallet Support**: Connect with various Web3 wallets including Rabby Wallet, MetaMask, Coinbase Wallet, and more
- 🎨 **Modern UI**: Beautiful wallet connection interface powered by RainbowKit
- ⚡ **Fast Development**: Built with Vite for lightning-fast HMR
- 🔒 **Type Safety**: Full TypeScript support
- 🌐 **Multi-Chain**: Support for Ethereum Mainnet, Goerli, and Polygon networks
- 💰 **Balance Display**: View wallet address and ETH balance after connection

### 🛠️ Tech Stack

**Frontend Framework:**
- **React 18** - Modern UI library for building user interfaces
- **TypeScript** - Adds type safety to JavaScript

**Development Tools:**
- **Vite** - Super fast build tool with instant hot reload

**Web3 Integration:**
- **RainbowKit** - Beautiful, ready-to-use wallet connection UI
- **Wagmi** - React hooks that make working with Ethereum simple
- **WalletConnect** - Protocol for connecting mobile wallets

**Data Management:**
- **TanStack Query** - Handles data fetching and caching automatically

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

**这个应用做什么？**

这是一个简单的 Web3 钱包连接演示，让您可以：
- 点击按钮连接您的加密钱包（如 Rabby、MetaMask 等）
- 连接后查看您的钱包地址
- 查看不同区块链网络上的 ETH 余额
- 在不同区块链之间切换（以太坊、Polygon 等）

非常适合学习如何将钱包连接功能集成到您自己的 Web3 应用中！

### ✨ 功能特性

- 🔗 **多钱包支持**：连接各种 Web3 钱包，包括 Rabby Wallet、MetaMask、Coinbase Wallet 等
- 🎨 **现代化界面**：由 RainbowKit 提供的精美钱包连接界面
- ⚡ **快速开发**：使用 Vite 构建，享受极速热更新
- 🔒 **类型安全**：完整的 TypeScript 支持
- 🌐 **多链支持**：支持以太坊主网、Goerli 测试网和 Polygon 网络
- 💰 **余额显示**：连接后可查看钱包地址和 ETH 余额

### 🛠️ 技术栈

**前端框架：**
- **React 18** - 现代化的用户界面构建库
- **TypeScript** - 为 JavaScript 添加类型安全

**开发工具：**
- **Vite** - 超快的构建工具，支持即时热更新

**Web3 集成：**
- **RainbowKit** - 精美的、开箱即用的钱包连接 UI
- **Wagmi** - 让以太坊开发变得简单的 React Hooks
- **WalletConnect** - 连接移动端钱包的协议

**数据管理：**
- **TanStack Query** - 自动处理数据获取和缓存

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

