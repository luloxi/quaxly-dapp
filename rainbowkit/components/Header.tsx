import { ReactNode } from "react"
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import { useAccount } from "wagmi"
import { ProposeForm } from "../components"

const Links = ["Dashboard", "Projects", "Team"]

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
)

export default function Simple() {
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
            <Box fontWeight={"bold"}>Quaxly DAO</Box>
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
