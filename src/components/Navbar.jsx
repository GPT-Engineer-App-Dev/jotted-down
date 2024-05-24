import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Text fontSize="xl" color="white">Hawaiian Notes</Text>
        </Box>
        <Flex alignItems="center">
          <NavLink to="/" exact>
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "teal.700" }} color="white">Home</Link>
          </NavLink>
          <NavLink to="/create">
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "teal.700" }} color="white">Create Note</Link>
          </NavLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;