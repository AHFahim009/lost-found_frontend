import { log } from "console";
import { ReactNode } from "react"
import { useForm, SubmitHandler, FieldValues, FormProvider } from "react-hook-form"


type TFormProp = {
  children: ReactNode,
  onSubmit: SubmitHandler<FieldValues>;
} & TConfig

type TConfig = {
  defaultValues?: Record<string, any>
  resolver?: any;
}

const UseForm = ({ children, onSubmit, defaultValues, resolver }: TFormProp) => {
  const formConfig: TConfig = {}
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues
  }
  if (resolver) {
    formConfig["resolver"] = resolver
  }
  const methods = useForm(formConfig)
  const { handleSubmit, reset, } = methods;

  const submit: SubmitHandler<FieldValues> = async (data) => {
    await onSubmit(data)
    // reset()
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submit)}>{children}</form>
    </FormProvider >
  )
}
export default UseForm