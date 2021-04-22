import React from 'react';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { InfoBlock } from './infoBlock';
import { TypeResort } from './types';
import { useContentBlockStyles } from './infoBlockStyles';

export const ContentBlock: Function = () => {
	const classes = useContentBlockStyles();
	const resorts = [
		{
			country: 'Италия',
			city: 'Римини',
			tags: ['Море', 'Семейный отдых'],
			description: `освоенная и используемая с целью лечения, медицинской реабилитации, 
      профилактики заболеваний и оздоровления особо охраняемая природная территория, 
      располагающая природными лечебными ресурсами и необходимыми для их эксплуатации зданиями и сооружениями`,
		},
		{
			country: 'Китай',
			city: 'Остров Хайнань',
			tags: ['Активный отдых', 'Море'],
			description: `освоенная и используемая с целью лечения, медицинской реабилитации, 
      профилактики заболеваний и оздоровления особо охраняемая природная территория, 
      располагающая природными лечебными ресурсами и необходимыми для их эксплуатации зданиями и сооружениями`,
		},
		{
			country: 'Греция',
			city: 'Крит',
			tags: ['Активный отдых', 'Достопримечательности'],
			description: `освоенная и используемая с целью лечения, медицинской реабилитации, 
      профилактики заболеваний и оздоровления особо охраняемая природная территория, 
      располагающая природными лечебными ресурсами и необходимыми для их эксплуатации зданиями и сооружениями`,
		},
	];
	const spacing: GridSpacing = 2;

	return (
		<Grid container className={classes.root} spacing={spacing}>
			<Grid item xs={12}>
				<Grid container justify='center' spacing={spacing}>
					{resorts.map((value: TypeResort, item: number) => (
						<Grid key={item} item>
							<InfoBlock {...value} />
						</Grid>
					))}
				</Grid>
			</Grid>
		</Grid>
	);
};
