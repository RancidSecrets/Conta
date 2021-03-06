import React from "react";

import { Flex, Button, Box} from "@chakra-ui/core";
import {MyContext} from '../../context'

function Choose() {
  return (
    <MyContext.Consumer>
      {context => (
        <Flex w="100vw" h="100vh" align="center" justify="center" direction="column">
          <article> Are you an... </article>
          <Box>
            <Button variantColor="green" variant="outline" marginRight="5px" onClick={(e) => context.handleSelectRole(e, 'owner')}>
              Owner
            </Button>
            or a...
            <Button variantColor="green" marginLeft="5px" onClick={(e) => context.handleSelectRole(e, 'tennant')}>
              Tenant
            </Button>
          </Box>
        </Flex>
      )}
    </MyContext.Consumer>
  );
}
export default Choose
