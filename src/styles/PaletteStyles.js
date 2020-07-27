import sizes from './sizesHelper'
export default {
    Palette: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    }, 
    colors: {
        height: '90%',
    },
    SingleColorBox: {
        width: '20%',
        height: '50%',
        display: 'inline-block',
        position: 'relative',
        marginBottom: '-.4rem',
        textAlign: 'center',
    },
    goBackContainer: {
        backgroundColor: 'black',
        color: 'rgba(255, 255, 255, .8)',
        [sizes.down['lg']]: {
            width: '75%',
            height: '33.3333333333%'
        },
        [sizes.down['md']]: {
            width: '100%',
            height: '25%'
        },
        [sizes.down['sm']]: {
            width: '50%',
            height: '20%'
        },
        [sizes.down['xs']]: {
            width: '100%',
            height: '10%'
        },
    },
    goBack: {
        position: 'absolute',
        left: '50%',
        bottom: '50%',
        transform: 'translate(-50%,50%)',
        textTransform: 'uppercase',
        background: 'rgba(255, 255, 255, .5)',
        height: '30px',
        width: '90px',
        lineHeight: '30px',
        transition: 'all .3s ease-in-out',
        textDecoration: 'none',
        color: 'rgba(255, 255, 255, .8)',

        
    },
}