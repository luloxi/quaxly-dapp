import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import { useAccount } from "wagmi"
import { ProposeForm } from "../components"

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isConnected } = useAccount()

  return (
    <>
      <Box bg={useColorModeValue("#e76f51", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            color="black"
            bgColor={"#e9c46a"}
            _hover={{ bgColor: "#f4a261" }}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box fontSize={22} fontFamily={"Langar"}>
              Quaxly DAO
            </Box>
            <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
              {isConnected && <ProposeForm />}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <ConnectButton />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {isConnected && <ProposeForm />}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}
