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
        maxWidth: "45rem",
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
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gridAutoRows: '150px',
        gridGap: '3rem',
    }
  };

class PaletteList extends Component {

    render() {
        const { palettes , classes } = this.props;
        const miniPalettes = palettes.map(palette => (
            <Link to={`/palette/${palette.id}`}><MiniPalette /></Link>
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