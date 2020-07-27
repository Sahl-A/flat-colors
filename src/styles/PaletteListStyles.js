import sizes from './sizesHelper';
import image from './background.svg'

export default {
    container: {
        backgroundColor: '#2c7aaa',
        backgroundImage: `url(${image})`,
        paddingBottom: '2.4rem',
        [sizes.down['md']]: {
            padding: '0 2rem'
        }
    },
    root: {
        maxWidth: "50rem",
        margin: "0 auto",
    },
    nav: {
        padding: '2rem 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'white',
        
        "& div": {
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '2rem',
        },
        "& a": {
            color: 'white',
            paddingBottom: '5px',
        },

    },
    miniPalettes: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gridAutoRows: 'minmax(170px, max-content)',
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