import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import MiniPalette from './MiniPalette';
import styles from './styles/PaletteListStyles';
import { green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class PaletteList extends Component {

    miniPaletteHandler = (id) => {
        this.props.routerProps.history.push(`/palette/${id}`);
    }

    render() {
        const { palettes , classes, deletePalette } = this.props;
        const miniPalettes = palettes.map(palette => (
            <CSSTransition key={palette.id} in={true} appear timeout={500} mountOnEnter={false} unmountOnExit={false} classNames="fade">
                    <div 
                        className={ classes.miniPalette }
                        key={palette.id}
                        onClick={()=>this.miniPaletteHandler(palette.id)} >
                            <MiniPalette {...palette} deletePalette={deletePalette} id={palette.id}/>
                    </div>
            </CSSTransition>
        ))
        return(
            <div className={classes.container}>
                <div className={classes.root}>
                    <nav className={classes.nav}>
                        <div>Flat UI Colors</div>
                        <div style={{fontSize: '1rem', display: 'flex', alignItems: 'center'}}>
                            <Icon style={{ color: green[500], marginRight: '5px' }}>add_circle</Icon>
                            <Link to="/create-palette">Create Palette</Link>
                        </div>
                    </nav>
                    {/* <div className={classes.miniPalettes}> */}
                        <TransitionGroup className={classes.miniPalettes}>
                            {miniPalettes}
                        </TransitionGroup>
                    {/* </div> */}
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList);