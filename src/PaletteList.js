import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        textDecoration: 'none',
        color: '#000',
        fontSize: '15px',
        fontWeight: '600',
        letterSpacing: '.55px',
    }
  };

class PaletteList extends Component {

    render() {
        const { palettes , classes } = this.props;
        const miniPalettes = palettes.map(palette => (
            <Link className={classes.miniPalette} key={palette.id} to={`/palette/${palette.id}`}><MiniPalette {...palette}/></Link>
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