import { Params } from "react-router";
import { UserData } from "@/firebase/types";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { authFormSchema } from "@/utils/authFormSchema.utils";
export interface ProductProps {
  id: string;
  gender: "men" | "women";
  category: "running" | "cross training" | "hiking" | "climbing";
  brand: string;
  name: string;
  amazonLink: string;
  badge?: "best seller" | "new" | "sale";
  price: number;
  discount?: number | undefined;
  sizes: number[];
  colors: string[];
  images: {
    id: string;
    color: string;
    imagesUrls: string[];
  }[];
  details: string[];
}

export interface ProductCardProps {
  product: ProductProps;
}
export interface ProductImagesProps {
  productImages: ProductProps["images"];
  activeColor: number;
  activeImage: number;
  handleMouse: (event: "enter" | "leave") => void;
}
export interface ProductColorsProps {
  productId: ProductProps["id"];
  productColors: ProductProps["colors"];
  activeColor: number;
  setActiveColor: (index: number) => void;
}

export interface ProductDetailsProps {
  productName: ProductProps["name"];
  productGender: ProductProps["gender"];
  productCategory: ProductProps["category"];
  productBrand: ProductProps["brand"];
}

export type ProductPriceProps = {
  price: ProductProps["price"];
  discount?: ProductProps["discount"];
};

export type ProductsCarouselProps = {
  title: string;
  route: string;
  params: Readonly<Params<string>>;
};

export type FilterItemProps = {
  type: string;
  label: string;
  isChecked: boolean;
  handleChange: (checked: boolean) => void;
};

export type ProductItemDetailsProps = {
  product: ProductProps;
  activeColor: number;
  handleColorChange: (index: number) => void;
};

export interface ProductItemSegmentsProps {
  gender: ProductProps["gender"];
  category: ProductProps["category"];
  brand: ProductProps["brand"];
  badge?: ProductProps["badge"];
}

export type ProductItemSizesProps = {
  sizes: ProductProps["sizes"];
  selectedSize: number | undefined;
  setSelectedSize: (size: number) => void;
};

export type ProductItemColorsProps = {
  colors: ProductProps["images"];
  activeColor: number;
  handleMouseEnter: (index: number) => void;
};

export type ProductItemDescriptionProps = { details: ProductProps["details"] };

export interface ProductItemImageIndicProps {
  layoutId: string;
  imageUrl: string;
  index: number;
  activeColor: number;
  handleMouseEnter: (index: number) => void;
}
export interface UserAvatarProps {
  currentUser: UserData;
}

const formSchema = authFormSchema("signup");
export interface AuthInputProps {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
}

export interface AuthInputProps {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
}
