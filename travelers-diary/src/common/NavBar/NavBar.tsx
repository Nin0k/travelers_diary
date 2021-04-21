import { AppBar, makeStyles, Toolbar, Button, Grid } from '@material-ui/core';
import React from 'react';
import { CustomLink } from './../CustomLink/CustomLink';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const styles = makeStyles((theme) => ({
	NavBar: {
		background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
	},
	btn: {
		marginLeft: '10px',
		marginRight: '10px',
		textTransform: 'none',
		color: 'white',
	},
}));

export const NavBar: React.FC = () => {
	const classes = styles();
	return (
		<AppBar position='static' className={classes.NavBar}>
			<Toolbar>
				<Grid container direction='row' justify='flex-start'>
					<CustomLink to='/about' primary='О проекте' color='gold' />
					<CustomLink to='/main' primary='Главная' color='gold' />
					<CustomLink to='/news' primary='Новости' color='gold' />
				</Grid>
				<Grid container direction='row' justify='flex-end'>
					<CustomLink to='lk' primary='Мой дневник' color='white' />
					<Button startIcon={<ExitToAppIcon />} className={classes.btn}>
						Выйти
					</Button>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};
