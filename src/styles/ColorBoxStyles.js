import chroma from 'chroma-js';
import sizes from '../styles/sizesHelper';

export default {
    ColorBox: {
        width: '20%',
        height: props => props.isSingleColorBox? '50%': '25%',
        display: 'inline-block',
        position: 'relative',
        marginBottom: '-.4rem',
        textAlign: 'center',
        color: props => chroma(props.color).luminance() >.5 ? 'black' : 'white',
        "&:hover button": {
            opacity: 1,
        },
        [sizes.down['lg']]: {
            width: '25%',
            height: props => props.isSingleColorBox? '33.3333333333%': '20%',
        },
        [sizes.down['md']]: {
            width: '33.3333333333%',
            height: props => props.isSingleColorBox? '25%': '14.2857%',
        },
        [sizes.down['sm']]: {
            width: '50%',
            height: props => props.isSingleColorBox? '20%': '10%',
        },
        [sizes.down['xs']]: {
            width: '100%',
            height: props => props.isSingleColorBox? '10%': '5%',
        },
    },
    ColorBoxMore: {
        position: 'absolute',
        right: '0',
        bottom: '0',
        background: 'rgba(255, 255, 255, .5)',
        textTransform: 'uppercase',
        height: '30px',
        width: '70px',
        lineHeight: '30px',
        marginBottom: '.1rem',
        textDecoration: 'none',
        color: 'inherit',
    },
    ColorBoxName: {
        position: 'absolute',
        left: '10px',
        bottom: '10px',
        color: 'inherit',
        fontSize: '12px',
        display: 'block',
        letterSpacing: '1px',
    },
    ColorBoxCopy: {
        position: 'absolute',
        left: '50%',
        bottom: '50%',
        transform: 'translate(-50%,50%)',
        textTransform: 'uppercase',
        cursor: 'pointer',
        background: 'rgba(255, 255, 255, .5)',
        height: '30px',
        width: '90px',
        lineHeight: '30px',
        opacity: '0',
        transition: 'all .3s ease-in-out',
        border: 'none',
        fontSize: 'inherit',
        color: 'inherit',
        "&:focus": {
            border: 'none',
            outline: 'none',
        },
        "&:active ": {
            border: 'none',
            outline: 'none',
        },
        [sizes.down['xs']]: {
            fontSize: '.9rem',
        },
    },
    copyMsg: {
        opacity: '0',
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        transform: 'scale(.5)',
        zIndex: '-1',
        color: 'inherit',
        '& h1': {
            textShadow: '1px 2px rgba(255,255,255,.2)',
            background: 'rgba(255,255,255,.2)',
            padding: '20px 0',
            width: '100%',
            textAlign: 'center',
            marginBottom: '-.5rem',
            border: '1px solid rgba(255,255,255,.1)',
        },
    },
    showMsg: {
        opacity: 1,
        zIndex: 20,
        transform: 'scale(2)',
        transition: 'all .3s ease-in-out',
        transitionDelay: '.2s',
    },
    copyOverlay: {
        width: '100%',
        height: '100%',
        opacity: 0,
        transition: 'transform 1s',
        transform: 'scale(.5)',
    },
    showOverlay: {
        opacity: 1,
        transform: 'scale(10)',
        zIndex: 10,
        position: 'absolute',
        [sizes.down['lg']]: {
            transform: 'scale(20)'
        },
        [sizes.down['md']]: {
            transform: 'scale(20)'
        },
        [sizes.down['sm']]: {
            transform: 'scale(25)'
        },
        [sizes.down['xs']]: {
            transform: 'scale(50)'
        },
    },
  };