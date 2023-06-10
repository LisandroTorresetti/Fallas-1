import React, { useState } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { useForm } from "react-hook-form";
import { createBeer } from '../../common/services/formService';
import { Select } from '../../common/components';
import { ALL_TYPES } from '../../common/utils/constants';
import BeerType from "./beerType";

export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [beers, setBeers] = useState([])
  const [used, setUsed] = useState(false);

  const onSubmit = async (data) => {
    try {
      const posBeers = await createBeer(data)
      setBeers(posBeers.message)
      setUsed(true);
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
          beers.length === 1 && beers.map(b => BeerType(b))
        }
        {
          beers.length === 0 && used &&
            <div>
              <Typography color={'red'}>We could not find a beer for the provided specifications</Typography>
            </div>
        }
        {
          beers.length > 1 &&
            <div>
              <Typography>Current possibilities are:</Typography>
              {beers.map(b => <Typography>{b}</Typography>)}
            </div>
        }
      </Stack>
    </form>
  )
}
