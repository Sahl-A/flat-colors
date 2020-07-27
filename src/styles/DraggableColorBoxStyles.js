import sizes from './sizesHelper';

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
        [sizes.down['lg']]: {
            width: '25%',
            height: '20%',
        },
        [sizes.down['md']]: {
            width: '33.3333333333%',
            height:'14.2857%',
        },
        [sizes.down['sm']]: {
            width: '100%',
            height:'5%',
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