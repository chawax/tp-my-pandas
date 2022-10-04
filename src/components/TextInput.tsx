import { ChangeEventHandler } from 'react';
import { FormFeedback, FormGroup, Input, InputProps, Label } from 'reactstrap';

export type TextInputProps = {
  label: string;
  name: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  error?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | undefined>;
};

const TextInput = ({
  label,
  error,
  name,
  required,
  value,
  ...props
}: TextInputProps) => {
  let extraProps: InputProps = { ...props };
  if (error) {
    extraProps = { ...props, invalid: true };
  } else if (!!value) {
    extraProps = { ...props, valid: true };
  }

  return (
    <FormGroup>
      <Label for={name}>
        {label}
        {required && <sup> *</sup>}
      </Label>
      <Input id={name} name={name} type="text" value={value} {...extraProps} />
      <FormFeedback>{error}</FormFeedback>
    </FormGroup>
  );
};

export default TextInput;
