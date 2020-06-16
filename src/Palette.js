import React, { Component } from 'react';

class Pallette extends Component {

    render() {
        console.log(this.props)
        return(
            <div className="Palette">
                {/* Nav bar goes here */}
                    <div className="Palette-colors"></div>
                {/* footer goes here */}
            </div>
        )
    }
}

export default Pallette;