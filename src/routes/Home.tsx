import {
  Hero,
  HeroBg,
  HeroCta,
  HeroDescription,
  HeroHeading,
} from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { heroContent } from "@/constants/heroContent";

const Home = () => {
  return (
    <>
      <Hero
        heading={heroContent.heading}
        description={heroContent.description}
        heroBg={heroContent.imageUrl}
      >
        <HeroHeading className="md:w-[11ch]" />
        <HeroDescription />
        <HeroCta link="/shop/men" label="shop men">
          <Button variant="secondary" size="lg">
            Shop Women
          </Button>
        </HeroCta>
        <HeroBg className="object-right-bottom" />
      </Hero>
    </>
  );
};

export default Home;
