import React from "react";
import MainSearchbar from "../components/MainSearchbar";
import MainContainer from "../containers/MainContainer";
import SidebarContainer from "../containers/SidebarContainer";

const Home = () => {
  return (
    <>
      <MainSearchbar />
      <section className="flex flex-col md:flex-row md:justify-between">
        <SidebarContainer />
        <MainContainer />
      </section>
    </>
  );
};

export default Home;
