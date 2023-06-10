import React from "react";
import { FormControl, InputLabel, Select as MUISelect, MenuItem, Typography } from "@mui/material";

export default function Select({
  register,
  label,
  idLabel,
  values,
  errors,
}) {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <MUISelect
        fullWidth
        label={label}
        labelId={idLabel}
        {
          ...register(idLabel, { required: true })
        }
      >
        {values.map(value => <MenuItem value={value.value}>{value.name}</MenuItem>)}
      </MUISelect>
      {errors[idLabel] && <Typography marginTop={1} color="red">Debes completar este campo</Typography>}
    </FormControl>
  )
}