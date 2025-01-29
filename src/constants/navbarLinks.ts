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
          title: "featured",
          route: "/shop/men/isFeatured/featured",
        },
        {
          id: uuidv4(),
          title: "sale",
          route: "/shop/men/isonsale/sale",
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
          route: "/shop/men/sport/running",
        },
        {
          id: uuidv4(),
          title: "training",
          route: "/shop/men/sport/training",
        },
        {
          id: uuidv4(),
          title: "hiking",
          route: "/shop/men/sport/hiking",
        },
        {
          id: uuidv4(),
          title: "climbing",
          route: "/shop/men/sport/climbing",
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
          title: "featured",
          route: "/shop/women/isfeatured/featured",
        },
        {
          id: uuidv4(),
          title: "sale",
          route: "/shop/women/isonsale/sale",
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
          route: "/shop/women/sport/running",
        },
        {
          id: uuidv4(),
          title: "training",
          route: "/shop/women/sport/training",
        },
        {
          id: uuidv4(),
          title: "hiking",
          route: "/shop/women/sport/hiking",
        },
        {
          id: uuidv4(),
          title: "climbing",
          route: "/shop/women/sport/climbing",
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
          route: "/shop/sport/running",
        },
        {
          id: uuidv4(),
          title: "men",
          route: "/shop/men/sport/running",
        },
        {
          id: uuidv4(),
          title: "women",
          route: "/shop/women/sport/running",
        },
        {
          id: uuidv4(),
          title: "featured",
          route: "/shop/sport/running/isfeatured/featured",
        },
        {
          id: uuidv4(),
          title: "sale",
          route: "/shop/sport/running/isonsale/sale",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "training",
      links: [
        {
          id: uuidv4(),
          title: "shop all",
          route: "/shop/sport/training",
        },
        {
          id: uuidv4(),
          title: "men",
          route: "/shop/men/sport/training",
        },
        {
          id: uuidv4(),
          title: "women",
          route: "/shop/women/sport/training",
        },
        {
          id: uuidv4(),
          title: "featured",
          route: "/shop/sport/training/isfeatured/featured",
        },
        {
          id: uuidv4(),
          title: "sale",
          route: "/shop/sport/training/isonsale/sale",
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
          route: "/shop/sport/hiking",
        },
        {
          id: uuidv4(),
          title: "men",
          route: "/shop/men/sport/hiking",
        },
        {
          id: uuidv4(),
          title: "women",
          route: "/shop/women/sport/hiking",
        },
        {
          id: uuidv4(),
          title: "featured",
          route: "/shop/sport/hiking/isfeatured/featured",
        },
        {
          id: uuidv4(),
          title: "sale",
          route: "/shop/sport/hiking/isonsale/sale",
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
          route: "/shop/sport/climbing",
        },
        {
          id: uuidv4(),
          title: "men",
          route: "/shop/men/sport/climbing",
        },
        {
          id: uuidv4(),
          title: "women",
          route: "/shop/women/sport/climbing",
        },
        {
          id: uuidv4(),
          title: "featured",
          route: "/shop/sport/climbing/isfeatured/featured",
        },
        {
          id: uuidv4(),
          title: "sale",
          route: "/shop/sport/climbing/isonsale/sale",
        },
      ],
    },
  ],
  ctaImage: CategorySportsImage,
};
