export default {
    root: {
        width: '20%',
        height: '25%',
        display: 'inline-block',
        marginBottom: '-.4rem',
        position: 'relative',
        cursor: 'pointer',
        transition: 'all .3s ease-out',
        "&:hover": {
            boxShadow: '0 0 20px 10px rgba(0,0,0,.2)',
        },
        "&:hover svg": {
            color: 'white',
            transform: 'scale(1.5)',
            cursor: 'pointer',
        },
    },
    boxContent: {
        position: 'absolute',
        bottom: '5px',
        width: '100%',
        paddingLeft: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        "& svg": {
            transition: 'all .5s',
        }
    },
};