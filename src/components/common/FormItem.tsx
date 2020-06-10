import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { OutputSelector } from "reselect";

import { Errors } from "../login/Errors";

import { IAppState } from "../../app/app.types";

import {
  Grid,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  SvgIconTypeMap,
} from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

export const FormItem: FunctionComponent<{
  label: string;
  value: string;
  handleValueChange: (event: any) => void;
  selector: OutputSelector<IAppState, string[], (res: string[]) => string[]>;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}> = ({ label, value, handleValueChange, selector, Icon }) => {
  const errors = useSelector(selector);

  return (
    <Grid item>
      <FormControl variant="outlined">
        <InputLabel>{label}</InputLabel>
        <OutlinedInput
          type={label}
          value={value}
          onChange={handleValueChange}
          startAdornment={
            <InputAdornment position="start">
              <Icon />
            </InputAdornment>
          }
          labelWidth={60}
        />
      </FormControl>
      {errors ? <Errors errors={errors} /> : null}
    </Grid>
  );
};
