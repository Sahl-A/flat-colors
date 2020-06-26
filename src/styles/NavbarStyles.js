export default {
    Navbar: {
        display: 'flex',
        margin: '0',
        padding: '0',
        alignItems: 'center',
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
        margin: '0 2rem 0 auto',
    },
    
    selectItem : {
        width: '12rem',
    },
};