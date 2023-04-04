import { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

const UserRemoveBlockModel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [disable, setDisable] = useState(false); // track disabled state

  const handleDisableClick = () => {
    setDisable(true); // set disable to true when clicked
  };

  const handleRemoveClick = () => {
    onClose(); // close the modal when remove button is clicked
  };

  const handleEnableClick = () => {
    setDisable(false); // set disable to false when clicked
  };

  return (
    <>
      {/* render the modal */}
      <Modal size="sm" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />

          {/* render different content based on disable state */}
          {disable ? (
            <>
              <ModalBody>Modal is disabled.</ModalBody>
              <ModalFooter>
                <Button onClick={handleEnableClick}>Enable</Button>
                <Button ml={3} onClick={handleRemoveClick}>
                  Remove
                </Button>
              </ModalFooter>
            </>
          ) : (
            <>
              <ModalBody>
                This is the modal body. Click the button below to disable this
                modal.
              </ModalBody>
              <ModalFooter>
                <Button onClick={handleDisableClick}>Disable</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserRemoveBlockModel;
