import sizes from './sizesHelper';
export default {
    Navbar: {
        display: 'flex',
        margin: '0',
        padding: '0',
        alignItems: 'center',
        justifyContent: 'space-between',
        [sizes.down['sm']]: {
            flexWrap: 'wrap',
        },
    },
    
    NavbarTitle: {
        padding: '1rem 1rem',
        background: 'rgba(0, 0, 0, .1)',
        margin: '0 1rem 0 0',
        fontWeight: '300',
        fontSize: '1.5rem',
        fontFamily: 'Roboto',
        textDecoration: 'none',
        color: 'inherit',
        [sizes.down['xs']]: {
            width: '100%',
            margin: 0,
        },
    },
    container: {
        display: 'flex',
        [sizes.down['sm']]: {
            width: '100%',
            padding: '0 1rem',
            justifyContent: 'space-between',
        },
        [sizes.down['xs']]: {
            flexWrap: 'wrap',
        },

    },
    Slider: {
        width: '19rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& p': {
            display: 'inline-block',
            width: '8rem',
        },
        [sizes.down['xs']]: {
            margin: '0 auto',
        },
        '& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:hover, .rc-slider-handle:focus' : {
            width: '14px',
            height: '14px',
            background: 'green',
            border: 'green',
            outline: 'none',
            boxShadow: 'none',
            marginTop: '-4px',
        },
        '& .rc-slider-track' : {
            background: 'transparent',
        },
        '& .rc-slider-rail' : {
            height: '8px',
        },
    },
    
    selectContainer: {
        margin: '0 2rem',
        [sizes.down['xs']]: {
            margin: '1rem auto',
            background: 'rgba(0, 0, 0, .1)',
        },
    },
    
    selectItem : {
        width: '12rem',
    },
};