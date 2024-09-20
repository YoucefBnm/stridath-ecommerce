import { v4 as uuidv4 } from "uuid";
import {
  CategoreyClimbingImage,
  CategoryCrossImage,
  CategoryHikingImage,
  CategoryRunningImage,
  HeroMainImage,
  HeroMainImage1600,
  HeroMainImage480,
  HeroMainImage768,
} from "@/assets";

export const heroContent = {
  title: "Discover a wide range of athletic shoes",
  heading: "Elevate your Step",
  heroImageMain: HeroMainImage,
  heroImage480: HeroMainImage480,
  heroImage768: HeroMainImage768,
  heroImage1920: HeroMainImage1600,
};

export const sports = {
  title: "sports",
  description:
    "Actifeet has the perfect footwear to match your active lifestyle, Whether you're hitting the trails, the gym, or the mountains.",
  items: [
    {
      id: uuidv4(),
      title: "running",
      image: CategoryRunningImage,
      route: "/shop/category/running",
    },
    {
      id: uuidv4(),
      title: "cross training",
      image: CategoryCrossImage,
      route: "/shop/category/cross training",
    },
    {
      id: uuidv4(),
      title: "hiking",
      image: CategoryHikingImage,
      route: "/shop/category/hiking",
    },
    {
      id: uuidv4(),
      title: "climbing",
      image: CategoreyClimbingImage,
      route: "/shop/category/climbing",
    },
  ],
};

export const hikingCategoryContent = {
  title: "hiking",
  heading: "Explore the Outdoors",
  description:
    "Embark on unforgettable outdoor adventures with our range of hiking shoes. Built for durability, traction, and comfort, our hiking shoes will accompany you through rugged terrains and varying conditions. From short day hikes to multi-day treks, our hiking shoes will provide the support and protection you need to conquer the trails and immerse yourself in nature.",
  image: CategoryHikingImage,
};

export const runningCategoryContent = {
  title: "running",
  heading: "Feel the run thrill",
  description:
    "Designed to enhance your running experience, whether you're a seasoned marathoner or a beginner hitting the pavement for the first time. From responsive cushioning to lightweight designs, our shoes are engineered to provide optimal support.",
  image: CategoryRunningImage,
};

export const climbingCategoryContent = {
  title: "climbing",
  heading: "Reach new heights",
  description:
    "Experience the thrill of vertical conquest with our range of climbing shoes. Designed with precision, grip, and durability in mind, these shoes are your ultimate companion on the rock face. From bouldering to sport climbing and trad climbing, our climbing shoes offer exceptional performance, allowing you to push your limits and achieve new personal bests.",
  image: CategoreyClimbingImage,
};

export const crossTrainingCategoryContent = {
  title: "cross training",
  heading: "Master every movement",
  description:
    "Our cross-training shoe collection is engineered to handle any workout, from intense gym sessions to high-intensity interval training. With superior stability, flexibility, and breathability, these shoes are designed to support your every move. Whether you're lifting weights, sprinting, or engaging in agility drills, our cross-training shoes will keep you grounded and ready for any challenge.",
  image: CategoryCrossImage,
};
