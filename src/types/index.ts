import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { authFormSchema } from "@/utils/authFormSchema.utils";

export interface ProductSizeProps {
  size: string;
  quantity: number;
}
export interface ProductColorsProps {
  id: string;
  color: string;
  imagesUrl: string[];
  sizes: ProductSizeProps[];
}
export interface ReviewProps {
  userId: string;
  displayName: string;
  reviewText: string;
  rating: number;
  date: string;
}

export type genderType = "men" | "women";
export type sportType = "running" | "training" | "hiking" | "climbing";
export interface ProductProps {
  id: string;
  gender: genderType;
  sport: sportType;
  brand: string;
  name: string;
  price: number;
  colors: string[];
  sizes: string[];
  images: ProductColorsProps[];
  reviews: ReviewProps[];
  details: string[];
  features: string[];
  releaseDate: string;
  featured: boolean;
  sale: boolean;
  salePrice: number;
}

export interface ProductCardImagesProps {
  productImages: ProductProps["images"];
  activeColor: number;
  activeImage: number;
  handleMouse: (event: "enter" | "leave") => void;
}
export interface ProductCardColorsProps {
  productId: ProductProps["id"];
  productColors: ProductProps["colors"];
  activeColor: number;
  setActiveColor: (index: number) => void;
}
export interface ProductCardDetailsProps {
  productName: ProductProps["name"];
  productGender: ProductProps["gender"];
  productSport: ProductProps["sport"];
  productBrand: ProductProps["brand"];
}

export interface ProductPriceProps {
  price: ProductProps["price"];
  salePrice: ProductProps["salePrice"];
  isOnSale: ProductProps["sale"];
  className?: string;
}

const formSchema = authFormSchema("signup");
export interface AuthInputProps {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
}
