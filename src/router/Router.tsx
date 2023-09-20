import { FC, memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Top } from "../pages/Top";
import { Service } from "../pages/Service";
import { Member } from "../pages/Member";
import { Contact } from "../pages/Contact";
import { ThreadBbs } from "../pages/ThreadBbs";

export const Router: FC = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index={true} element={<Top />} />
          <Route path="/service" element={<Service />} />
          <Route path="/member" element={<Member />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thread_bbs" element={<ThreadBbs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
});