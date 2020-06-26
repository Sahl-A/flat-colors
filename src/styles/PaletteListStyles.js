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
        color: '#000',
        fontSize: '15px',
        fontWeight: '600',
        letterSpacing: '.55px',
        cursor: 'pointer',
    }
  };