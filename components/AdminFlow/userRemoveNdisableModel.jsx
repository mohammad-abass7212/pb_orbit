import { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";
import { DISABLE_USER_API_ENDPOINT, REMOVE_PLAYER_FROM_COMMUNITY_API_ENDPOINT } from "../../pages/api/apiVariables";
import axios from "axios";

function UserRemoveBlockModel({ isOpen, onClose,setIsDisabled ,isDisabled}) {
  const [isLoading, setIsLoading] = useState(false);


  const handleDisable =async () => {
    setIsLoading(true);
    // perform disable action
    try {
      await axios.patch(`${DISABLE_USER_API_ENDPOINT}/`);
      // perform disable action
      setIsDisabled(true)
      onClose();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
    onClose();
  };

  const handleRemove =async () => {
    setIsLoading(true);
    try {
      await axios.delete(`${REMOVE_PLAYER_FROM_COMMUNITY_API_ENDPOINT}/${itemId}`);
      // perform remove action
      onClose();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
    // perform remove action
    // 
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Confirm Action</ModalHeader>
        <ModalBody>
          Are you sure you want to disable/remove this user?
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="red"
            mr={3}
            onClick={handleRemove}
            isLoading={isLoading}
            loadingText="Removing"
          >
            Remove
          </Button>
          <Button
            colorScheme="gray"
            variant="outline"
            onClick={isDisabled? handleEnable : handleDisable}
            isLoading={isLoading}
            loadingText="Disabling"
          >
          {isDisabled? "Enable":"Disable"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default UserRemoveBlockModel;
