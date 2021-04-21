import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { makeStyles, Button } from '@material-ui/core';

const styles = makeStyles((theme) => ({
	active: {
		backgroundColor: '	#00CED1',
	},
	btn: {
		marginLeft: '10px',
		marginRight: '10px',
		textTransform: 'none',
	},
	white: {
		color: 'white',
	},
	gold: {
		color: '#FFD700',
	},
}));

type ListItemLinkProps = {
	startIcon?: React.ReactElement;
	endIcon?: React.ReactElement;
	primary: string;
	to: string;
	color?: 'white' | 'gold';
};

export const CustomLink: React.FC<ListItemLinkProps> = (
	props: ListItemLinkProps
) => {
	const classes = styles();
	const { color, startIcon, endIcon, primary, to } = props;

	const renderLink = React.useMemo(
		() =>
			React.forwardRef<any, Omit<NavLinkProps, 'to'>>((itemProps, ref) => (
				<NavLink
					to={to}
					ref={ref}
					{...itemProps}
					activeClassName={classes.active}
				/>
			)),
		[to, classes.active]
	);

	return (
		<Button
			className={`${classes.btn} ${color === undefined ? '' : classes[color]}`}
			disableRipple
			component={renderLink}
			startIcon={startIcon}
			endIcon={endIcon}
		>
			{primary}
		</Button>
	);
};
