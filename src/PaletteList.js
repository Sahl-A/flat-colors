import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import MiniPalette from './MiniPalette';
import styles from './styles/PaletteListStyles';
import { green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';

class PaletteList extends Component {

    miniPaletteHandler = (id) => {
        this.props.routerProps.history.push(`/palette/${id}`)
    }

    render() {
        const { palettes , classes } = this.props;
        const miniPalettes = palettes.map(palette => (
            <div 
                className={classes.miniPalette} 
                key={palette.id}
                onClick={()=>this.miniPaletteHandler(palette.id)} >
                    <MiniPalette {...palette}/>
            </div>
        ))
        return(
            <div className={classes.container}>
                <div className={classes.root}>
                    <nav className={classes.nav}>
                        <div>Flat UI Colors</div>
                        <div style={{fontSize: '1rem', display: 'flex', alignItems: 'center'}}>
                            <Icon style={{ color: green[500], marginRight: '5px' }}>add_circle</Icon>
                            <Link to="/palette/new">Create Palette</Link>
                        </div>
                    </nav>
                    <div className={classes.miniPalettes}>
                        {miniPalettes}
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList);