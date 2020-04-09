import React from "react";

import {Button, CardContent, Container, Collapse, Grid, Typography} from "@material-ui/core";

const CollapseArea = props =>
{
	return (
		<Collapse in={props.expanded} timeout="auto" unmountOnExit>
			<CardContent>
				<Container>
					<InternalGrid OS={props.OS} produceSnackbar={props.produceSnackbar}/>
				</Container>
			</CardContent>
		</Collapse>
	);
};

const InternalGrid = props =>
{
	return (
		<Grid container
			  justify={'center'}
			  alignItems={'center'}
			  alignContent={'center'}
			  spacing={3}
		>
			<Grid item xs={12}>
				<Typography variant={'h6'} align={'center'} gutterBottom>Project Explorer</Typography>
				<Typography variant={'body2'} align={'center'}>
					View my projects! With this interactive client built on the Electron framework, you can demo some
					of my creations at home! This explorer showcases a live demo, but to view the source code for my
					projects, check out my GitHub page.
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<ClientOptions {...props}/>
			</Grid>
		</Grid>
	)
};

const ClientOptions = props =>
{
	let OS = props.OS;

	let notReadyMessage = "This Feature Will Be Available In A Future Release.";

	return (
		<Grid container
			  justify={'center'}
			  alignItems={'center'}
			  alignContent={'center'}
			  spacing={2}
		>
			<Grid item>
				<GreenButton text={`Download the ${OS} Client`} onClick={() =>
					props.produceSnackbar(notReadyMessage, "info")
				}/>
			</Grid>
			<Grid item>
				<GreenButton text={"View the Web Client"} onClick={() =>
					props.produceSnackbar(notReadyMessage, "info")
				}/>
			</Grid>
		</Grid>
	);
};

const GreenButton = props =>
{
	return <Button variant="contained" color={"secondary"} size={'small'} onClick={props.onClick}>{props.text}</Button>

};

export default CollapseArea;
