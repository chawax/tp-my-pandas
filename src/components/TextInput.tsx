import { ChangeEventHandler } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

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
  placeholder,
  onChange,
}: TextInputProps) => {
  let className = '';
  if (error) {
    className = error ? 'is-invalid' : 'is-valid';
  }
  return (
    <FormGroup>
      <Label for={name}>
        {label}
        {required && <sup> *</sup>}
      </Label>
      <Input
        id={name}
        name={name}
        type="text"
        value={value}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </FormGroup>
  );
};

export default TextInput;
