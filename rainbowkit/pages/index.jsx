// import { ConnectButton } from "@rainbow-me/rainbowkit"
// import type { NextPage } from "next";
import Head from "next/head"
import { useAccount } from "wagmi"
import { AvailableVotingPower, DAOModerators, ListProposals } from "../components"
import Header from "../components/Header"
import { useIsMounted } from "../hooks"
import { Heading, Grid, GridItem } from "@chakra-ui/react"
import styles from "../styles/Home.module.css"

// const Home: NextPage = () => {
const Home = () => {
  const isMounted = useIsMounted()
  const { isConnected } = useAccount()

  return (
    <div className={styles.container}>
      <Head>
        <title>Quaxly DAO</title>
        <meta content="Quadratic voting DAO" name="description" />
        <link href="favicon.ico" rel="icon" />
      </Head>

      <Header />
      <main className={styles.main}>
        <Grid templateColumns="repeat(12, 1fr)" width="100vw" height="100vh">
          <GridItem colSpan={1} />
          <GridItem colSpan={5} borderRight="1px solid #2d2d2d" padding="0 16px 16px 16px">
            <DAOModerators />
          </GridItem>

          <GridItem colSpan={5} padding="0 16px 16px 16px">
            {isMounted && isConnected ? (
              <>
                <Heading as="h2" size="lg" noOfLines={1} padding="16px 0" textAlign="center">
                  Active or successful proposals
                </Heading>
                <AvailableVotingPower>
                  <ListProposals onlyActive />
                </AvailableVotingPower>
                <ListProposals onlySuccessful />
              </>
            ) : (
              <>
                <Heading as="h2" size="lg" noOfLines={1} padding="16px 0" textAlign="center">
                  DAO proposals
                </Heading>
                <ListProposals />
              </>
            )}
          </GridItem>
          {/* <GridItem colSpan={1} /> */}
        </Grid>
      </main>

      <footer className={styles.footer}>
        <a href="https://rainbow.me" rel="noopener noreferrer" target="_blank">
          Made with ❤️ by your frens at 🌈
        </a>
      </footer>
    </div>
  )
}

export default Home
