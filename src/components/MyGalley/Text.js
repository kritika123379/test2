import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./Text.css";


class Text  extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
               


                <div style={{color:"white"}}>

                <Grid container spacing={3} style={{color:"white"}}>
        <Grid item xs><h2>Special <br/><i class="fas fa-air-freshener"></i> Activities</h2>
          <Paper ><p style={{color:"white"}}>Donec sodales sagittis  magna .Sad consequat ,leo egatApplying padding to the parent with at least half the spacing value applied to the child:</p></Paper>
        </Grid>
        <Grid item xs><h2>Travel <br/> <span><i class="fas fa-plane"></i></span>Arrangements</h2>
          <Paper > <p style={{color:"white"}}>Donec sodales sagittis  magna .Sad consequat ,leo egat Applying padding to the parent with at least half the spacing value applied to the child:</p>
          </Paper>
        </Grid>
        <Grid item xs><h2>Private <br/><span><i class="fas fa-user"></i></span> Guide</h2>
          <Paper>  <p style={{color:"white"}}>Donec sodales sagittis  magna .Sad consequat ,leo egat Applying padding to the parent with at least half the spacing value applied to the child:</p>
          </Paper>
        </Grid>
        <Grid item xs><h2>Private <br/><span><i class="fab fa-gg-circle"></i></span> Guide</h2>
          <Paper>  <p style={{color:"white"}}>Donec sodales sagittis  magna .Sad consequat ,leo egat Applying padding to the parent with at least half the spacing value applied to the child:</p>
          </Paper>
        </Grid>
      </Grid>
                        
      </div>
                    
                </React.Fragment>
            </div>
        );
    }
}

export default Text;
