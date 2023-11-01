/** @format */

import MessageSection from "../../components/MessageSection";
import UserContacts from "../../components/UserContacts";
import { Divider } from "@chakra-ui/react";

const page = () => {
  return (
    <>
      <UserContacts url={"contacts"} />
      <Divider orientation={"vertical"} />
      <MessageSection conversationID={null} />
    </>
  );
};

export default page;
