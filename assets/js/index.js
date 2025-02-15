import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, Box, Heading, Button } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Box p={5} maxW="320px" borderWidth={1} borderRadius="lg">
        <Heading size="md">Jekyll + Chakra UI</Heading>
        <Button mt={4} colorScheme="blue">
          Click Me
        </Button>
      </Box>
    </ChakraProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("chakra-root"));