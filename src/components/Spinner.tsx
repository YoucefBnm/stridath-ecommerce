import { cn } from "@/utils/shadcn";

const Spinner = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "border-gray-200 animate-spin rounded-full size-5 border-2 inline-block border-t-gray-900",
        className
      )}
    />
  );
};

export default Spinner;
