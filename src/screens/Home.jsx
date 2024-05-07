import React from "react";
import { Header } from "../common-pages/header";
import { Slider } from "../home-components/slider";
import { Cards } from "../home-components/cards";
import { Footer } from "../common-pages/footer";
import { Form } from "../home-components/form";

function Home() {
  return (
    <>
      <Header />
      <h1>This is Home page.....</h1>
      <Cards />
    </>
  );
}

export { Home };
