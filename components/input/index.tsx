import { TextField as MaterialTextField } from "@material-ui/core";

export const TextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => <MaterialTextField {...input} {...custom} />;
