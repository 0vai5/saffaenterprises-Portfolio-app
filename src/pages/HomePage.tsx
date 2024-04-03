import { Hero, Merquee, Introduction, Goals, Separator, Record } from "@/components";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Merquee />
      <Separator orientation="horizontal"/>
      <Introduction />
      <Separator orientation="horizontal" />
      <Goals />
      <Record />
    </>
  );
};

export default HomePage;
