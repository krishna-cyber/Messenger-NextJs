/** @format */

// /** @format */

// export default function Page({ params }) {
//   return <div>My Post: {params.conversationId}</div>;
// }

/** @format */

import MessageSection from "../../../components/MessageSection";
import UserContacts from "../../../components/UserContacts";
import { Divider } from "@chakra-ui/react";

const page = ({ params }) => {
  console.log(params.conversationId);
  return (
    <>
      <UserContacts url={"contacts"} />
      <Divider orientation={"vertical"} />
      <MessageSection conversationID={params.conversationId} />
    </>
  );
};

export default page;
