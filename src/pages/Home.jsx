import Footer from "../components/Footer";
import Info from "../components/Info";
import LatestProjects from "../components/LatestProjects";
import ToolSection from "../components/ToolSection";
// eslint-disable-next-line react/prop-types
export default function Home({ projects }) {
  return (
    <>
      <Info />
      <LatestProjects projects={projects} />
      <ToolSection />
      <Footer />
    </>
  );
}
