import React from "react";
import { useTheme, Theme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
import { useSortFormStyles, MenuProps } from "./sortFormStyle";
import { TypeSelect } from "./types";

export const SelectForSort: React.FC<TypeSelect> = ({
    id,
    nameSelect,
    nameFilter,
    multiple,
}) => {
    const classes = useSortFormStyles();
    const [personName, setPersonName] = React.useState<string[]>([]);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setPersonName(event.target.value as string[]);
    };
    /*
    const handleChangeMultiple = (
        event: React.ChangeEvent<{ value: unknown }>
    ) => {
        const { options } = event.target as HTMLSelectElement;
        const value: string[] = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
                
            }
        }
        setPersonName(value);
    };
*/
    return (
        <FormControl className={classes.formControl}>
            <InputLabel id={`${id}-label`}>{nameSelect}</InputLabel>
            <Select
                labelId={`${id}-label`}
                id={id}
                multiple={multiple}
                value={personName}
                onChange={handleChange}
                input={<Input id={`${id}--multiple`} />}
                renderValue={(selected) => (
                    <div className={classes.chips}>
                        {console.log(selected)}
                        {multiple ? (
                            (selected as string[]).map((value) => (
                                <Chip
                                    key={value}
                                    label={value}
                                    className={classes.chip}
                                />
                            ))
                        ) : (
                            <Chip
                                key={selected as string}
                                label={selected as string}
                                className={classes.chip}
                            />
                        )}
                    </div>
                )}
                MenuProps={MenuProps}
            >
                {nameFilter.map((name) => (
                    <MenuItem key={name} value={name}>
                        {multiple && (
                            <Checkbox checked={personName.indexOf(name) > -1} />
                        )}
                        <ListItemText primary={name} />
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
