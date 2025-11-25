import '@rainbow-me/rainbowkit/styles.css'
import { getDefaultWallets, connectorsForWallets } from '@rainbow-me/rainbowkit'
import { rabbyWallet } from '@rainbow-me/rainbowkit/wallets'
import { createConfig, configureChains } from 'wagmi'
import { mainnet, goerli, polygon } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { QueryClient } from '@tanstack/react-query'

const PROJECT_ID = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID ?? ''

// Configure chains and providers (using publicProvider for demo; use Alchemy/Infura in production)
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, goerli, polygon],
  [publicProvider()]
)

// Get default wallet configuration
const { wallets } = getDefaultWallets({
  appName: 'React Wallet Demo',
  projectId: PROJECT_ID,
  chains,
})

// Add Rabby Wallet to wallet list
const customWallets = [
  {
    groupName: 'Recommended',
    wallets: [
      rabbyWallet({ chains }),
    ],
  },
  ...wallets,
]

// Configure connectors
const connectors = connectorsForWallets(customWallets)

// Wagmi create config
export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

// Query client (for @tanstack/react-query)
export const queryClient = new QueryClient()

export { chains }
