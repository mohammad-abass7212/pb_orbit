import { useToast, UseToastOptions } from "@chakra-ui/react";

interface NotificationProps extends UseToastOptions {
  status: any;
  message: string;
}

const Notification = ({ status, message, ...rest }: NotificationProps) => {
  const toast = useToast();
  const title = status === "success" ? "Success" : "Error";

  const showToast = () => {
    toast({
      title: title,
      description: message,
      status: status,
      duration: 3000,
      isClosable: true,
      ...rest,
    });
  };

  showToast(); // call the function when the component is rendered

  return null; // return null since we're not rendering any JSX element
};

export default Notification;
