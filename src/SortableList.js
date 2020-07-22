import React from 'react';
import {SortableContainer} from 'react-sortable-hoc';
import DraggableColorBox from './DraggableColorBox';

const SortableList = SortableContainer((props) => {
    const {colors, handleDeleteColor} = props;

    return(
        <div style={{height: '100%'}}>
            {colors.map((color, i) => (
                <DraggableColorBox 
                    key= {color.name}
                    color={color.color} 
                    colorName={color.name}
                    deleteColor={()=> handleDeleteColor(color.name)}
                    index={i}
                    />
            ))}
        </div>
    )
})

export default SortableList;