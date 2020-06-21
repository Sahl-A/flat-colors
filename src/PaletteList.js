import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import MiniPalette from './MiniPalette';

const styles = {
    container: {
        background: 'lightblue',
        height: '100%',
    },
    root: {
        maxWidth: "50rem",
        margin: "0 auto",
    },
    nav: {
        margin: '2rem 0',
        fontSize: '2rem',
        cursor: 'pointer',
        display: 'inline-block',
    },
    miniPalettes: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gridAutoRows: 'minmax(150px, max-content)',
        gridGap: '3rem',
    },
    miniPalette: {
        color: '#000',
        fontSize: '15px',
        fontWeight: '600',
        letterSpacing: '.55px',
        cursor: 'pointer',
    }
  };

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