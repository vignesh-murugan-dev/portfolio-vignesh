import ThingsIDoCard from "@/components/ThingsIDoCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Skills from "@/components/Skills/index";
import AboutMe from "@/components/AboutMe";
import Blogs from "@/components/Blogs/index";
// import Experiences from "@/components/Experiences";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <div className="mb-10 p-8">
        <div className="flex flex-col md:flex-row items-center justify-around mt-32 md:mt-44">
          <Intro />
          <ThingsIDoCard />
        </div>
        <div>
          <AboutMe />
          <Skills />
        </div>
        <div>
          {/* <Experiences /> */}
        </div>
        <div>
          <Blogs />
        </div>
      </div>
      <Footer />
    </main>
  );
}
