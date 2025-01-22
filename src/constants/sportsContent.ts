import {
  CategoryClimbingImage,
  CategoryHikingImage,
  CategoryRunningImage,
  CategoryTrainingImage,
} from "@/assets";
import { v4 as uuidv4 } from "uuid";

export const sportsContent = [
  {
    id: uuidv4(),
    title: "running",
    image: CategoryRunningImage,
    route: "/shop/sport/runnining",
  },
  {
    id: uuidv4(),
    title: "training",
    image: CategoryTrainingImage,
    route: "/shop/sport/cross training",
  },
  {
    id: uuidv4(),
    title: "hiking",
    image: CategoryHikingImage,
    route: "/shop/sport/hiking",
  },
  {
    id: uuidv4(),
    title: "climbing",
    image: CategoryClimbingImage,
    route: "/shop/sport/climbing",
  },
];
