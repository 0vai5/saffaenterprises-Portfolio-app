import { Hero, Merquee, Introduction, Goals, Separator, Record, Products} from "@/components";

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
      <Products />
    </>
  );
};

export default HomePage;
