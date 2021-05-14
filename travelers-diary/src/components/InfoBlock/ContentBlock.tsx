import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import { InfoBlock } from "./InfoBlock";
import { TypeResort } from "./types";
import { useContentBlockStyles } from "./infoBlockStyles";
import { RootState } from "../../store/types/types";

export const ContentBlock: React.FC = () => {
    const classes = useContentBlockStyles();
    const spacing: GridSpacing = 2;
    const counter = useSelector((state: RootState) => state.reducer.allResorts);
    const [resorts, setResorts] = useState<TypeResort[]>([]);

    console.log("counter");
    console.log(counter);

    useEffect(() => {
        /*      getAllResorts().then(
            (response) => {
                setResorts(response);
            },
            (error) => {
                console.log(error);
            }
        );*/
    }, []);

    return (
        <Grid container className={classes.root} spacing={spacing}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    {resorts.map((value: TypeResort, index: number) => (
                        <Grid item key={index}>
                            <InfoBlock {...value} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};
