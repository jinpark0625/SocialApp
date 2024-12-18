import { useForm, FieldValues } from "react-hook-form";

type DefaultValueType = {
  defaultValues: Record<string, string>;
};

const useFormControl = ({ defaultValues }: DefaultValueType) => {
  const { control, handleSubmit, formState, setFocus } = useForm<FieldValues>({
    defaultValues: defaultValues,
  });

  return { control, handleSubmit, formState, setFocus };
};

export default useFormControl;
