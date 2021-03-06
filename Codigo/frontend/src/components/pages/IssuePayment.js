import React from "react";
import { NavLink } from "react-router-dom";
import {

  Flex,

  FormControl,

  InputGroup,

  Input
  // Modal,
  // ModalOverlay,
  // ModalContent,
  // ModalHeader,
  // ModalFooter,
  // ModalBody,
  // ModalCloseButton
} from "@chakra-ui/core";
import { MyContext } from "../../context";
import Form from "../Styles/Form";

function IssuePayment() {
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
                <Form submit={context.handleSubmitPayment} title="Issue Payment">
                  <FormControl isRequired>
                    <InputGroup>
                      <Input
                        onChange={context.handlePaymentInput}
                        name="name"
                        type="text"
                        placeholder="Payment name"
                        value={context.state.formPayment.name}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl isRequired>
                    <InputGroup>
                      <Input
                        onChange={context.handlePaymentInput}
                        name={'amount'}
                        type="number" name="amount" placeholder="Payment amount"
                        value={context.state.formPayment.amount}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl isRequired>
                    <InputGroup>
                      <Input
                        onChange={context.handlePaymentInput}
                        type="text"
                        name="description" placeholder="Description"
                        value={context.state.formPayment.description}

                      />
                    </InputGroup>
                  </FormControl>
                </Form>
              </FormControl>
            </div>
          </Flex>
        </div>
      )}
    </MyContext.Consumer>
  );
}

export default IssuePayment;
