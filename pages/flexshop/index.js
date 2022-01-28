import { React } from "react";
import Head from "next/head";
import NavbarSM from "../../components/media-sm/navbar";
import NavbarLG from "../../components/media-lg/navbar";
import Frame from "../../components/media-lg/frame";
import Content from "../../components/media-lg/content";

export default function Flexshop() {
  return (
    <div className="flexshop">
      <Head>
        <title>Flexshop - Everything you need</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="sm-app md:hidden">
        <NavbarSM />
      </div>
      <div className="lg-app hidden md:block">
        <NavbarLG />
        <Frame />
        <Content />
      </div>
    </div>
  );
}
