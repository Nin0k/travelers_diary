import React, { useState, useEffect } from "react";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import { InfoBlock } from "./InfoBlock";
import { TypeResort } from "./types";
import { useContentBlockStyles } from "./infoBlockStyles";
import { getAllResorts } from "./getAllResorts";

export const ContentBlock: React.FC = () => {
    const classes = useContentBlockStyles();
    const spacing: GridSpacing = 2;
    const [resorts, setResorts] = useState<TypeResort[]>([]);

    useEffect(() => {
        getAllResorts().then(
            (response) => {
                setResorts(response);
            },
            (error) => {
                console.log(error);
            }
        );
    },[]);

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
