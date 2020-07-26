export default {
    root: {
        height: "100%",
        background: "white",
        borderRadius: '5px',
        padding: '.7rem .7rem 0 .7rem',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        boxSizing: 'border-box',
        position: 'relative',
        "&:hover button": {
            opacity: 1,
            cursor: 'pointer',
            backgroundColor: 'red',
        },
    },
    miniColorBoxes: {
        height: '90%',
        borderRadius: '5px',
        overflow: 'hidden',
        display: 'flex',
        flexWrap: 'wrap',
    },
    miniBox: {
        width: '20%',
        height: '25%',
        display: 'inline-block',
        marginBottom: '-.25rem'

    },
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '.7rem 0'
        
    },
    deleteButton: {
        position: 'absolute',
        right: 0,
        top: 0,
        "& button": {
            backgroundColor: 'red',
            border: 'none',
            color: 'white',
            padding: '.5rem',
            opacity: 0,
            transition: 'all .3s ease-in',
            outline: 'none',
        },
    }
  };