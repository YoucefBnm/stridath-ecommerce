import { CardDescription, CardTitle } from "@/components/ui/card";
import { authType } from "@/utils/authFormSchema.utils";
import { FC } from "react";

type VisitorProps = {
  authType: authType;
};
const Visitor: FC<VisitorProps> = ({ authType }) => {
  return (
    <div className="flex items-center flex-wrap  gap-2">
      <CardTitle className="capitalize font-heading">{authType}</CardTitle>
      <CardDescription>
        Create your account to get members benefits like fast checkout, coupons,
        discounts, special offers, and ournewest shoes and collections.
      </CardDescription>
    </div>
  );
};

export default Visitor;
