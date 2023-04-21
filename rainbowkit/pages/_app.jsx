import "../styles/globals.css"
import "@rainbow-me/rainbowkit/styles.css"
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit"
// import type { AppProps } from "next/app";
import { configureChains, createClient, WagmiConfig } from "wagmi"
// import { WagmiConfig, chain, configureChains, createClient } from 'wagmi';
import { arbitrum, goerli, hardhat, mainnet, optimism, polygon, polygonMumbai } from "wagmi/chains"
import { publicProvider } from "wagmi/providers/public"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { globalCSS } from "../styles/globalCSS"

const theme = extendTheme(globalCSS)

const { chains, provider, webSocketProvider } = configureChains(
  [
    mainnet,
    goerli,
    polygonMumbai,
    hardhat,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [goerli] : []),
  ],
  [publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: "RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
})

// function MyApp({ Component, pageProps }: AppProps) {
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  )
}

export default MyApp
