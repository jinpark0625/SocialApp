import { useForm, UseFormReturn, DefaultValues } from "react-hook-form";

type UseFormControlProps<T> = {
  defaultValues: DefaultValues<T>;
};

const useFormControl = <T extends Record<string, any>>({
  defaultValues,
}: UseFormControlProps<T>): UseFormReturn<T> => {
  const formController = useForm<T>({
    defaultValues,
  });

  return formController;
};

export default useFormControl;
