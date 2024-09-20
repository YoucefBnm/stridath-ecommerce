import { defaultFormFields } from "@/constants/data";
import { useState } from "react";

export function useSetFormFields() {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return {
    formFields,
    handleFieldChange,
  };
}
