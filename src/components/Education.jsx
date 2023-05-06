import { Box } from "@chakra-ui/react";
import React, { forwardRef } from "react";

export const Education = forwardRef((props, ref) => {
  return (
    <Box ref={ref} height={"300px"} bg={"black"}>
      Education
    </Box>
  );
});
