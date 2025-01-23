import { genderType, ProductProps, sportType } from "@/types";
import {
  DocumentData,
  QueryDocumentSnapshot,
  QueryOrderByConstraint,
} from "firebase/firestore";
import { Params } from "react-router-dom";

export type sortOption =
  | "featured"
  | "new"
  | "sale"
  | "low to high"
  | "high to low";

export type SortOptionsTypes = {
  [Key in sortOption]: QueryOrderByConstraint;
};

export type filtersType = {
  gender?: genderType[];
  sport?: sportType[];
  brand?: string[];
  sizes?: string[];
  availableColors?: string[];
};

export type fetchOptions = {
  params: Params;
  sortOption: keyof SortOptionsTypes;
  limitNumber: number;
  filters: filtersType;
  lastVisible: QueryDocumentSnapshot | undefined;
};

export type fetchSuccessResponse = {
  products: ProductProps[];
  count: number;
  lastVisibleItem: DocumentData;
};
