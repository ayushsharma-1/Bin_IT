import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import LoginPage from "./components/login";
import Signup from "./components/signup";

const Login = () => {
  const navigate = useNavigate(); // Renamed for clarity

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) {
      navigate("/community"); // Navigate to /chats if user is logged in
    }
  }, [navigate]);

  const handleOtherCommand = () => {
    // Example: navigate to a different route based on some other command
    navigate("/other-route");
  };

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work sans">
          React Login
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <LoginPage />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <button onClick={handleOtherCommand}>Navigate to Other Route</button>
    </Container>
  );
};

export default Login;
