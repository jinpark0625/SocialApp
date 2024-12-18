import { useForm, FieldValues } from "react-hook-form";

type DefaultValueType = {
  defaultValues: Record<string, string>;
};

const useFormControl = ({ defaultValues }: DefaultValueType) => {
  const formController = useForm<FieldValues>({
    defaultValues: defaultValues,
  });

  return formController;
};

export default useFormControl;
