import { FC, memo } from "react";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";

export const Contact: FC = memo(() => {
  return (
    <>
      <Header />
      <h1>問合せページ</h1>
      <Footer />
    </>
  );
});