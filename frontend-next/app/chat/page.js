/** @format */

import Footer from "../components/Footer";
import MessageSection from "../components/MessageSection";
import UserContacts from "../components/UserContacts";
import { Divider } from "@chakra-ui/react";

const page = () => {
  return (
    <>
      <UserContacts url={"chat"} />
      <Divider orientation={"vertical"} />
      <MessageSection conversationId={null} />
      {/* <Footer /> */}
    </>
  );
};

export default page;
