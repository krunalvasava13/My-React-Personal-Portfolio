import React from "react";
// State
import { useGetUsersQuery } from "../app/apiSlice";
// Components
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import BackToTop from "../components/BackToTop";
// Config
import { filteredProjects, moreInfo } from "../config";
// Utils
import { updateTitle } from "../utils";
import AboutImg from "../images/img2.jpg"
import Certifications from "../components/Certifications";

// #region component
const Home = () => {
  const { data: userData } = useGetUsersQuery();

  React.useEffect(() => {
    updateTitle(`${userData.name} | Portfolio`);
  }, [userData]);

  return (
    <>
      <Hero name={userData.name} />
      <main>
        <AboutMe
          avatar_url={AboutImg}
          bio={userData.bio}
          moreInfo={moreInfo}
        />
        <Skills />
        <Certifications />
        <Projects filteredProjects={filteredProjects} />
        <Contact />
      </main>
      <BackToTop />
    </>
  );
};
// #endregion

export default Home;
