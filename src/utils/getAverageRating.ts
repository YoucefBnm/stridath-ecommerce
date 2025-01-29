import { ProductProps } from "@/types";

export const getAverageRating = (reviews: ProductProps["reviews"]): number => {
  if (reviews.length === 0) return 0;

  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  return totalRating / reviews.length;
};
