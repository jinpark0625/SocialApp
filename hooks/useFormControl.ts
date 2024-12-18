import { useForm, FieldValues } from "react-hook-form";

type DefaultValueType = {
  defaultValues: Record<string, string>;
};

const useFormControl = ({ defaultValues }: DefaultValueType) => {
  const { control, handleSubmit, formState } = useForm<FieldValues>({
    defaultValues: defaultValues,
  });

  return { control, handleSubmit, formState };
};

export default useFormControl;
