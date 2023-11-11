import Hero from "components/home/Hero";
import Page from "components/utility/Page";
import Projects from "components/home/Projects";
import Skills from "components/home/Skills";
import About from "components/home/About";

export default function Home() {
  return (
    <Page
      currentPage="Home"
      meta={{
        desc: "I'm a passionate web developer and designer coding beautiful websites and apps.",
      }}
    >
      <Hero />

      <div className="mt-10 mb-6 space-y-32">
        <About />

        <Projects />
        <Skills />
      </div>
    </Page>
  );
}
