import { cn } from "@/utils/shadcn";
import { FC } from "react";

type ProductReviewProps = {
  rating: number;
  maxRating: number;
  reviewsLength: number;
  className?: string;
};
const ProductReview: FC<ProductReviewProps> = ({
  rating,
  maxRating = 5,
  reviewsLength,
  className,
}) => {
  const filledStars = Math.floor(rating);
  const fractionalPart = rating - filledStars;
  const emptyStars = maxRating - filledStars - (fractionalPart > 0 ? 1 : 0);

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex items-center">
        {[...Array(filledStars)].map((_, index) => (
          <svg
            key={`filled-${index}`}
            className="w-4 h-4 text-gray-800"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
          </svg>
        ))}
        {fractionalPart > 0 && (
          <svg
            className="w-4 h-4 text-gray-800"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <defs>
              <linearGradient id="half">
                <stop
                  offset={`${fractionalPart * 100}%`}
                  stopColor="currentColor"
                />
                <stop
                  offset={`${fractionalPart * 100}%`}
                  stopColor="rgb(209 213 219)"
                />
              </linearGradient>
            </defs>
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z"
              fill="url(#half)"
            />
          </svg>
        )}
        {[...Array(emptyStars)].map((_, index) => (
          <svg
            key={`empty-${index}`}
            className="w-4 h-4 text-gray-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
          </svg>
        ))}
      </div>
      <p className="text-sm underline">{reviewsLength} reviews</p>
      <p className="sr-only">{rating}</p>
    </div>
  );
};

export default ProductReview;
