import { Controller, useForm } from 'react-hook-form';
import { Button } from 'reactstrap';
import TextInput from './TextInput';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export type PandaFormValues = {
  name: string;
  interests: string;
  image: string;
};

export type PandaFormProps = {
  initialValues?: PandaFormValues;
  onCancel: () => void;
  onSubmit: (values: PandaFormValues) => void;
};

const PandaForm = ({ onCancel, onSubmit, initialValues }: PandaFormProps) => {
  const pandaValidationSchema = yup.object().shape({
    name: yup.string().required('Veuillez saisir un nom de panda.'),
    interests: yup
      .string()
      .required("Veuillez saisir les centre d'intérêt du panda."),
    image: yup
      .string()
      .required('Veuillez saisir une URL de photo pour le panda.')
      .url('Veuillez saisir une URL valide.'),
  });

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<PandaFormValues>({
    mode: 'onChange',
    defaultValues: initialValues,
    resolver: yupResolver(pandaValidationSchema),
  });
  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextInput
            label="Nom"
            placeholder="Saisissez le nom du panda"
            error={errors.name?.message}
            {...field}
          />
        )}
      />
      <Controller
        name="interests"
        control={control}
        render={({ field }) => (
          <TextInput
            label="Centres d'intérêt"
            placeholder="Saisissez les centres d'intérêt du panda (séparés par une virgule)."
            error={errors.interests?.message}
            {...field}
          />
        )}
      />
      <Controller
        name="image"
        control={control}
        rules={{
          required: { value: true, message: 'Image obligatoire' },
          pattern: { value: /https?:\/\//, message: 'URL invalide' },
        }}
        render={({ field }) => (
          <TextInput
            label="Image"
            placeholder="Saisissez l'url de la photo du panda"
            error={errors.image?.message}
            {...field}
          />
        )}
      />
      <Button color="primary" style={{ marginRight: 10 }} disabled={!isValid}>
        Valider
      </Button>
      <Button onClick={onCancel}>Annuler</Button>
    </form>
  );
};

export default PandaForm;
