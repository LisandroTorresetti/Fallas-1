import React from "react";
import { FormControl, InputLabel, Select as MUISelect, MenuItem } from "@mui/material";

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
          ...register(idLabel)
        }
      >
        {values.map(value => <MenuItem value={value.value}>{value.name}</MenuItem>)}
      </MUISelect>
      {errors[idLabel] && <span>Debes completar este campo</span>}
    </FormControl>
  )
}