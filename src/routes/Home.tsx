import CategoryWrap from "@/components/CategoryWrap";
import { Hero, HeroBg, HeroHeading, HeroTitle } from "@/components/Hero";
import ProductsCarousel from "@/components/ProductsCarousel";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import {
  climbingCategoryContent,
  crossTrainingCategoryContent,
  heroContent,
  hikingCategoryContent,
  runningCategoryContent,
} from "@/constants/constants";
import ShopBy from "@/sections/ShopBy";
import Sports from "@/sections/Sports";
import { transformVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Seo
        title="Actifeet | Premium Athletic, Running, Cross-Training, Climbing & Hiking Shoes"
        description="Explore Actifeet's wide range of premium athletic shoes. Whether you need running, cross-training, climbing, or hiking shoes, Actifeet has the perfect fit for your active lifestyle."
      />
      <Hero
        heroImageMain={heroContent.heroImageMain}
        heroImage480={heroContent.heroImage480}
        heroImage768={heroContent.heroImage768}
        heroImage1920={heroContent.heroImage1920}
        title={heroContent.title}
        heading={heroContent.heading}
      >
        <HeroTitle />
        <HeroBg />
        <HeroHeading className="max-w-[12ch]" />
        <motion.div variants={transformVariants()} className="flex gap-4">
          <Button
            variant={"secondary"}
            size={"lg"}
            className="font-heading text-xs uppercase"
          >
            <Link
              className="block size-full place-content-center"
              aria-label="navigate to men shop"
              to="/shop/men"
            >
              Shop Men
            </Link>
          </Button>

          <Button
            variant={"secondary"}
            size={"lg"}
            className="font-heading text-xs uppercase"
          >
            <Link
              className="block size-full place-content-center"
              aria-label="navigate to women shop"
              to="/shop/women"
            >
              Shop Women
            </Link>
          </Button>
        </motion.div>
      </Hero>

      <Sports />

      <ProductsCarousel
        title="favorites"
        route="/shop/badge/best seller"
        params={{ badge: "best seller" }}
      />
      <ShopBy />
      <CategoryWrap
        title={hikingCategoryContent.title}
        heading={hikingCategoryContent.heading}
        description={hikingCategoryContent.description}
        route="/shop/category/hiking"
        imageUrl={hikingCategoryContent.image}
      />
      <ProductsCarousel
        title="New Arrivals"
        route="/shop/badge/new"
        params={{ badge: "new" }}
      />
      <CategoryWrap
        title={runningCategoryContent.title}
        heading={runningCategoryContent.heading}
        description={runningCategoryContent.description}
        route="/shop/category/running"
        imageUrl={runningCategoryContent.image}
      />
      <CategoryWrap
        title={climbingCategoryContent.title}
        heading={climbingCategoryContent.heading}
        description={climbingCategoryContent.description}
        route="/shop/category/climbing"
        imageUrl={climbingCategoryContent.image}
      />

      <ProductsCarousel
        title="best deals"
        route="/shop/badge/sale"
        params={{ badge: "sale" }}
      />
      <CategoryWrap
        title={crossTrainingCategoryContent.title}
        heading={crossTrainingCategoryContent.heading}
        description={crossTrainingCategoryContent.description}
        route="/shop/category/cross training"
        imageUrl={crossTrainingCategoryContent.image}
      />
    </>
  );
};

export default Home;
