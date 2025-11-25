import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount, useBalance } from 'wagmi'

export default function Home() {
  const { address, isConnected } = useAccount()
  const { data } = useBalance({ address: address as `0x${string}` | undefined })

  return (
    <div style={{ padding: 24 }}>
      <h1>React Wallet Connection Demo</h1>
      <ConnectButton />
      <div style={{ marginTop: 20 }}>
        <p>Connection Status: {isConnected ? 'Connected' : 'Disconnected'}</p>
        <p>Address: {address ?? '-'}</p>
        <p>Balance: {data?.formatted ? `${data.formatted} ${data.symbol}` : '-'}</p>
      </div>
    </div>
  )
}
