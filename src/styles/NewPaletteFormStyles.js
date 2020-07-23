const drawerWidth = 350;
export default function (theme) {
    return (
        {
            root: {
                display: 'flex',
              },
              hide: {
                display: 'none',
              },
              drawer: {
                width: drawerWidth,
                flexShrink: 0,
              },
              drawerPaper: {
                width: drawerWidth,
              },
              drawerHeader: {
                display: 'flex',
                alignItems: 'center',
                padding: theme.spacing(0, 1),
                // necessary for content to be below app bar
                ...theme.mixins.toolbar,
                justifyContent: 'flex-end',
              },
              content: {
                flexGrow: 1,
                height: 'calc(100vh - 36px)',
                padding: theme.spacing(3),
                transition: theme.transitions.create('margin', {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.leavingScreen,
                }),
                marginLeft: -drawerWidth,
              },
              contentShift: {
                transition: theme.transitions.create('margin', {
                  easing: theme.transitions.easing.easeOut,
                  duration: theme.transitions.duration.enteringScreen,
                }),
                marginLeft: 0,
              },
              drawerContent: {
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: '100%',
              },
              drawerH1: {
                fontFamily: 'Roboto',
                fontWeight: '400',
                fontSize: '2.2rem',
              },
        }
    );
}