import React, { useState } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { useForm } from "react-hook-form";
import { createBeer } from '../../common/services/formService';
import { Select } from '../../common/components';
import { ALL_TYPES } from '../../common/utils/constants';

export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [beers, setBeers] = useState([])

  const onSubmit = async (data) => {
    try {
      const posBeers = await createBeer(data)
      setBeers(posBeers.message)
    } catch (error) {
      console.log(error)
      console.log(errors)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={5} justifyContent="center" alignItems="center">
        {ALL_TYPES.map(type => <Select register={register} errors={errors} {...type} />)}
        <div>
          <Button type='submit' variant='contained'>Enviar</Button>
        </div>
        {
          beers.map(b => <Typography>{b}</Typography>)
        }
      </Stack>
    </form>
  )
}
