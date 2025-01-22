import { v4 as uuidv4 } from "uuid";
import {
  CategoryMenImage,
  CategorySportsImage,
  CategoryWomenImage,
} from "@/assets";

export interface NavSubmenuItem {
  id: string;
  title: string;
  links: { id: string; title: string; route: string }[];
}

export interface NavSubmenu {
  id: string;
  title: string;
  submenu: NavSubmenuItem[];
  ctaImage: string;
}

export const menLinks: NavSubmenu = {
  id: uuidv4(),
  title: "men",
  submenu: [
    {
      id: uuidv4(),
      title: "men",
      links: [
        {
          id: uuidv4(),
          title: "shop all",
          route: "/shop/men",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "collections",
      links: [
        {
          id: uuidv4(),
          title: "best seller",
          route: "/shop/men/badge/best seller",
        },
        {
          id: uuidv4(),
          title: "new",
          route: "/shop/men/badge/new",
        },
        {
          id: uuidv4(),
          title: "sale",
          route: "/shop/men/badge/sale",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "sports",
      links: [
        {
          id: uuidv4(),
          title: "running",
          route: "/shop/men/category/running",
        },
        {
          id: uuidv4(),
          title: "cross training",
          route: "/shop/men/category/cross training",
        },
        {
          id: uuidv4(),
          title: "hiking",
          route: "/shop/men/category/hiking",
        },
        {
          id: uuidv4(),
          title: "climbing",
          route: "/shop/men/category/climbing",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "brands",
      links: [
        {
          id: uuidv4(),
          title: "adidas",
          route: "/shop/men/brand/adidas",
        },
        {
          id: uuidv4(),
          title: "altra",
          route: "/shop/men/brand/altra",
        },
        {
          id: uuidv4(),
          title: "asics",
          route: "/shop/men/brand/asics",
        },
        {
          id: uuidv4(),
          title: "brooks",
          route: "/shop/men/brand/brooks",
        },
        {
          id: uuidv4(),
          title: "nike",
          route: "/shop/men/brand/nike",
        },
        {
          id: uuidv4(),
          title: "salomon",
          route: "/shop/men/brand/salomon",
        },
        {
          id: uuidv4(),
          title: "scarpa",
          route: "/shop/men/brand/scarpa",
        },
        {
          id: uuidv4(),
          title: "under armour",
          route: "/shop/men/brand/under armour",
        },
      ],
    },
  ],
  ctaImage: CategoryMenImage,
};

export const womenLinks: NavSubmenu = {
  id: uuidv4(),
  title: "women",
  submenu: [
    {
      id: uuidv4(),
      title: "women",
      links: [
        {
          id: uuidv4(),
          title: "shop all",
          route: "/shop/women",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "collections",
      links: [
        {
          id: uuidv4(),
          title: "best seller",
          route: "/shop/women/badge/best seller",
        },
        {
          id: uuidv4(),
          title: "new",
          route: "/shop/women/badge/new",
        },
        {
          id: uuidv4(),
          title: "sale",
          route: "/shop/women/badge/sale",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "sports",
      links: [
        {
          id: uuidv4(),
          title: "running",
          route: "/shop/women/category/running",
        },
        {
          id: uuidv4(),
          title: "cross training",
          route: "/shop/women/category/cross training",
        },
        {
          id: uuidv4(),
          title: "hiking",
          route: "/shop/women/category/hiking",
        },
        {
          id: uuidv4(),
          title: "climbing",
          route: "/shop/women/category/climbing",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "brands",
      links: [
        {
          id: uuidv4(),
          title: "altra",
          route: "/shop/women/brand/altra",
        },
        {
          id: uuidv4(),
          title: "asics",
          route: "/shop/women/brand/asics",
        },
        {
          id: uuidv4(),
          title: "brooks",
          route: "/shop/women/brand/brooks",
        },
        {
          id: uuidv4(),
          title: "la sportiva",
          route: "/shop/women/brand/la sportiva",
        },
        {
          id: uuidv4(),
          title: "new balance",
          route: "/shop/women/brand/new balance",
        },
        {
          id: uuidv4(),
          title: "nike",
          route: "/shop/women/brand/nike",
        },
        {
          id: uuidv4(),
          title: "scarpa",
          route: "/shop/women/brand/scarpa",
        },
        {
          id: uuidv4(),
          title: "under armour",
          route: "/shop/women/brand/under armour",
        },
      ],
    },
  ],
  ctaImage: CategoryWomenImage,
};

export const sportsLinks: NavSubmenu = {
  id: uuidv4(),
  title: "sports",
  submenu: [
    {
      id: uuidv4(),
      title: "running",
      links: [
        {
          id: uuidv4(),
          title: "shop all",
          route: "/shop/category/running",
        },
        {
          id: uuidv4(),
          title: "men",
          route: "/shop/men/category/running",
        },
        {
          id: uuidv4(),
          title: "women",
          route: "/shop/women/category/running",
        },
        {
          id: uuidv4(),
          title: "best seller",
          route: "/shop/category/running/badge/best seller",
        },
        {
          id: uuidv4(),
          title: "new",
          route: "/shop/category/running/badge/new",
        },
        {
          id: uuidv4(),
          title: "sale",
          route: "/shop/category/running/badge/sale",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "cross training",
      links: [
        {
          id: uuidv4(),
          title: "shop all",
          route: "/shop/category/cross training",
        },
        {
          id: uuidv4(),
          title: "men",
          route: "/shop/men/category/cross training",
        },
        {
          id: uuidv4(),
          title: "women",
          route: "/shop/women/category/cross training",
        },
        {
          id: uuidv4(),
          title: "best seller",
          route: "/shop/category/cross training/badge/best seller",
        },
        {
          id: uuidv4(),
          title: "new",
          route: "/shop/category/cross training/badge/new",
        },
        {
          id: uuidv4(),
          title: "sale",
          route: "/shop/category/cross training/badge/sale",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "hiking",
      links: [
        {
          id: uuidv4(),
          title: "shop all",
          route: "/shop/category/hiking",
        },
        {
          id: uuidv4(),
          title: "men",
          route: "/shop/men/category/hiking",
        },
        {
          id: uuidv4(),
          title: "women",
          route: "/shop/women/category/hiking",
        },
        {
          id: uuidv4(),
          title: "best seller",
          route: "/shop/category/hiking/badge/best seller",
        },
        {
          id: uuidv4(),
          title: "new",
          route: "/shop/category/hiking/badge/new",
        },
        {
          id: uuidv4(),
          title: "sale",
          route: "/shop/category/hiking/badge/sale",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "climbing",
      links: [
        {
          id: uuidv4(),
          title: "shop all",
          route: "/shop/category/climbing",
        },
        {
          id: uuidv4(),
          title: "men",
          route: "/shop/men/category/climbing",
        },
        {
          id: uuidv4(),
          title: "women",
          route: "/shop/women/category/climbing",
        },
        {
          id: uuidv4(),
          title: "best seller",
          route: "/shop/category/climbing/badge/best seller",
        },
        {
          id: uuidv4(),
          title: "new",
          route: "/shop/category/climbing/badge/new",
        },
        {
          id: uuidv4(),
          title: "sale",
          route: "/shop/category/climbing/badge/sale",
        },
      ],
    },
  ],
  ctaImage: CategorySportsImage,
};
