import React from "react";
import { Container } from "@material-ui/core";
import { SelectForSort } from "./SelectForSort";
import { TypeSelect } from "./types";
import { useSortFormStyles } from "./sortFormStyle";

const filterForSort: string[] = ["по рекомендациям", "новые", "страрые"];
const filterForTags: string[] = [
    "Достопремичательности",
    "Море",
    "Горы",
    "Семейный отдых",
    "Активный отдых",
];
const filterForCountry: string[] = ["Италия", "Китай", "Греция"];

const names = [
    {   
        id: 's001',
        nameSelect: "Сортировать",
        nameFilter: filterForSort,
        multiple: false,
    },
    {
        id: 't002',
        nameSelect: "Тег",
        nameFilter: filterForTags,
        multiple: true,
    },
    {
        id: 'c003',
        nameSelect: "Страна",
        nameFilter: filterForCountry,
        multiple: true,
    },
];

export const SortForm: React.FC = () => {
    const classes = useSortFormStyles();

    return (
        <Container className={classes.formConteiner}>
            {names.map((value: TypeSelect, item: number) => (
                <SelectForSort {...value} key={item}/>
            ))}
        </Container>
    );
}
