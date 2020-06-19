import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PaletteList extends Component {

    render() {
        console.log(this.props);
        const { palettes } = this.props;
        return(
            palettes.map(palette => (
                <Link style={{display: 'block'}} to={`/palette/${palette.id}`}>${palette.paletteName}</Link>
            ))
        )
    }
}

export default PaletteList;