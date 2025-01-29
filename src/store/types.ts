import { sortOption } from "@/firebase/types";
import { ProductProps } from "@/types";
import { DocumentSnapshot } from "firebase/firestore";

export interface ShopCollectionStateType {
  readonly products: ProductProps[];
  readonly lastVisible: undefined | DocumentSnapshot;
  readonly count: null | number;
  readonly selectedSortOption: sortOption;
  readonly isFetching: boolean;
  readonly isLoadingMore: boolean;
  readonly error: null | string;
}
