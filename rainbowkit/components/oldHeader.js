import * as React from "react"
import { useAccount } from "wagmi"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { Connect, ProposeForm } from "../components"
import { Heading, Grid, GridItem } from "@chakra-ui/react"

export function Header() {
  const { isConnected } = useAccount()

  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={4} width="100vw" marginTop={2} alignItems="center">
      <GridItem colSpan={1} />
      <GridItem colSpan={2}>
        <Heading as="h1" size="md" noOfLines={1}>
          Quaxly DAO
        </Heading>
      </GridItem>

      <GridItem colSpan={3} display="flex" justifyContent="flex-end" border="1px solid black">
        {isConnected && <ProposeForm />}
        <GridItem colSpan={2}>
          <ConnectButton />
        </GridItem>

        {/* <Connect /> */}
      </GridItem>
      <GridItem colSpan={1} />
    </Grid>
  )
}
