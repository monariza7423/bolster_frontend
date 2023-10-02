import { FC, memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Top } from "../pages/Top";
import { Service } from "../pages/Service";
import { Member } from "../pages/Member";
import { Contact } from "../pages/Contact";
import { ThreadBbs } from "../pages/ThreadBbs";
import { ContactConfirm } from "../pages/ContactConfirm";
import { ContactComplete } from "../pages/ContactComplete";
import { ThreadBbsDetail } from "../pages/ThreadBbsDetail";
import { EditThread } from "../pages/editThread";
import { EditThreadBbsReply } from "../pages/EditThreadBbsReply";

export const Router: FC = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index={true} element={<Top />} />
          <Route path="/service" element={<Service />} />
          <Route path="/member" element={<Member />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/form" element={<ContactConfirm />} />
          <Route path="/contact/complete" element={<ContactComplete />} />
          <Route path="/thread_bbs" element={<ThreadBbs />} />
          <Route path="/thread_bbs/:threadId" element={<ThreadBbsDetail />} />
          <Route path="/thread_bbs/:threadId/edit" element={<EditThread />} />
          <Route path="/thread_bbs/:threadId/thread_bbs_reply/:replyId/edit" element={<EditThreadBbsReply />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
});