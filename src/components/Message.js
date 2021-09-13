import React from 'react';
import Grid from '@material-ui/core/Grid';
import ListItemText from '@material-ui/core/ListItemText';

import '../App.css';
export const MessageText = ({ someText, id }) => {

    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <ListItemText align="right" primary={someText} key={`list-itemT-1-${id}`}></ListItemText>
                </Grid>
                <Grid item xs={12}>
                    <ListItemText align="right" secondary="09:30" key={`list-itemT-2-${id}`}></ListItemText>
                </Grid>
            </Grid>
        </div>

    )
}
