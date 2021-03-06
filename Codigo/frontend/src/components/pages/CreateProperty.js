import React from "react";
import { NavLink } from "react-router-dom";
import { Flex, FormControl, InputGroup, Input } from "@chakra-ui/core";
import { MyContext } from "../../context";
import Form from "../Styles/Form";

function CreateProperty() {
  return (
    <MyContext.Consumer>
      {context => (
        <div
          style={{
            backgroundColor: "white",
            color: "green",
            textAlign: "center"
          }}
        >
          <Flex
            w="100vw"
            h="100vh"
            align="center"
            justify="center"
            wrap="wrap"
            direction="column"
          >
            <div>
              <FormControl>
                <Form submit={context.handleSubmit} title="Create Property">
                  <FormControl isRequired>
                    <InputGroup>
                      <Input
                        onChange={context.handleInput}
                        name="name"
                        type="text"
                        placeholder="Property name"
                        value={context.state.property.name}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl isRequired>
                    <InputGroup>
                      <Input
                        onChange={context.handleInput}
                        type="number"
                        name="rent"
                        placeholder="Rent amount"
                        value={context.state.property.rent}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl isRequired>
                    <InputGroup>
                      <Input
                        onChange={context.handleInput}
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={context.state.property.description}
                      />
                    </InputGroup>
                  </FormControl>
                </Form>
              </FormControl>
            </div>
            <NavLink to="/profile">Profile</NavLink>
            <br />
            <NavLink to="/">Home</NavLink>
          </Flex>
        </div>
      )}
    </MyContext.Consumer>
  );
}

export default CreateProperty;
