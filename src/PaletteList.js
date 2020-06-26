import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import MiniPalette from './MiniPalette';
import styles from './styles/PaletteListStyles';

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
                        <span>Flat UI Colors</span>
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