import { TextField, Grid, InputLabel } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

function CustomTextField({ name, label, required }) {
  const { control } = useFormContext();
  const isError = false;
  return (
    <Grid item xs={12} sm={6}>
      <InputLabel>{label}</InputLabel>
      <Controller
        defaultValue=""
        render={({ field }) => <TextField {...field} />}
        name={name}
        control={control}
        label={label}
        fullWidth
        error={isError}
        required={required}
        variant="outlined"
      />
    </Grid>
  );
}

export default CustomTextField;
