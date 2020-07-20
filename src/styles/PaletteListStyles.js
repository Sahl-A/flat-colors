export default {
    container: {
        background: 'lightblue',
        height: '100%',
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