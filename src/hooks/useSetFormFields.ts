import { defaultFormFields } from "@/constants/constants";
import { ChangeEvent, useState } from "react";

export function useSetFormFields() {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const handleFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return {
    formFields,
    handleFieldChange,
  };
}
