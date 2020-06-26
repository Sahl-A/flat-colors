export default {
    Palette: {
        height: '100vh',
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
        color: 'rgba(255, 255, 255, .8)'
    },
}