import { ProductProps } from "@/types";
import {
  DocumentData,
  QueryDocumentSnapshot,
  QueryOrderByConstraint,
} from "firebase/firestore";
import { Params } from "react-router-dom";

export type sortOption =
  | "suggested"
  | "best seller"
  | "sale"
  | "low to high"
  | "high to low";

export type SortOptionsTypes = {
  [Key in sortOption]: QueryOrderByConstraint;
};

export type filtersType = {
  gender?: string[];
  category?: string[];
  brand?: string[];
  badges?: string[];
  sizes?: string[];
  colors?: string[];
};

export type fetchOptionsProps = {
  params: Params;
  sortOption: keyof SortOptionsTypes;
  lastVisible: QueryDocumentSnapshot | undefined;
  limitNumber: number;
  filters: filtersType;
};

export type SearchProductsResponse = {
  products: ProductProps[];
  count: number;
  lastVisibleItem: DocumentData;
};
export type SearchProductsOptions = {
  searchQuery: string;
  limitNumber: number;
  lastVisible: DocumentData | undefined;
};

export type fetchSuccessResponse = {
  products: ProductProps[];
  count: number;
  lastVisibleItem: DocumentData;
};

export type FetchOptions = {
  params: Readonly<Params<string>>;
  sortOption: keyof SortOptionsTypes;
  limitNumber: number;
  filters: filtersType;
  lastVisible: DocumentData | undefined;
};

export type AdditionalInfo = {
  displayName?: string;
  photoURL?: string;
};

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
  photoURL?: string;
};
