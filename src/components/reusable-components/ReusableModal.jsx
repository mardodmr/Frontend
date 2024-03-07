import { Modal } from "@chakra-ui/modal";
import {
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

function ReusableModal({ trigger, title, children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div style={{ width: "100%" }} onClick={onOpen}>
        {trigger}
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader paddingBottom={0}>{title}</ModalHeader>
          <ModalCloseButton size={"lg"} paddingTop={"1rem"} />
          <ModalBody paddingTop={0} paddingBottom={"1.5rem"}>
            {children}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ReusableModal;
