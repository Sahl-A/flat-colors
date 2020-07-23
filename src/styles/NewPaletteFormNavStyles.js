const drawerWidth = 300;
export default function (theme) {
    return (
        {
            root: {
                display: 'flex',
              },
              appBar: {
                transition: theme.transitions.create(['margin', 'width'], {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.leavingScreen,
                }),
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              },
              appBarShift: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
                transition: theme.transitions.create(['margin', 'width'], {
                  easing: theme.transitions.easing.easeOut,
                  duration: theme.transitions.duration.enteringScreen,
                }), 
              },
              toolBar: {
                  display: 'flex',
                  alignItems: 'center',
              },
              form: {
                  display: 'flex',
                  alignItems: 'center',
              },
              menuButton: {
                marginRight: theme.spacing(2),
              },
              navBtns: {
                
              },
        }
    );
}