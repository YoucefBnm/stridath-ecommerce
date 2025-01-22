export interface ProductSizeProps {
  size: string;
  quantity: number;
}
export interface ProductColorsProps {
  id: string;
  color: string;
  images: string[];
  sizes: ProductSizeProps[];
}
export interface ReviewProps {
  userId: string;
  displayName: string;
  reviewText: string;
  rating: number;
  date: string;
}
export interface ProductProps {
  id: string;
  gender: "men" | "women";
  sport: "running" | "training" | "hiking" | "climbing";
  brand: string;
  name: string;
  price: number;
  availableColors: string[];
  sizes: string[];
  colors: ProductColorsProps[];
  reviews: ReviewProps[];
  details: string[];
  features: string[];
  realeaseDate: string;
  isFeatured: boolean;
  isOnsale: boolean;
  salePrice: number;
}

export interface ProductCardImagesProps {
  productImages: ProductProps["colors"];
  activeColor: number;
  activeImage: number;
  handleMouse: (event: "enter" | "leave") => void;
}
export interface ProductCardColorsProps {
  productId: ProductProps["id"];
  productColors: ProductProps["availableColors"];
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
  isOnSale: ProductProps["isOnsale"];
}
