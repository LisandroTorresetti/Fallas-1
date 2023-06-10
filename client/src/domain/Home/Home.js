import React from 'react';
import { Button, Stack } from '@mui/material';
import { useForm } from "react-hook-form";
import { createRequest } from '../../common/services/formService';
import { Select } from '../../common/components';
import { ALL_TYPES } from '../../common/utils/constants';

export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async data => await createRequest(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={5} justifyContent="center" alignItems="center">
        {ALL_TYPES.map(type => <Select register={register} errors={errors} {...type} />)}
        <div>
          <Button type='submit' variant='contained'>Enviar</Button>
        </div>
      </Stack>
    </form>
  )
}
