import { AppBar, Avatar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import { Link, useLocation } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import ProfileIcon from '@mui/icons-material/Person';

export default function NavBar({ name, linkedInProfileURL }) {
    const navItems = [
        {id: "about", label: "About", path: "/about"},
        {id: "resume", label: "Resume", path: "/resume"},
        {id: "portfolio", label: "Portfolio", path: "/portfolio"},
    ];

    const location = useLocation();

    return (
        <AppBar position="static" color="transparent" elevation={0} >
            <Toolbar 
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: '10px',
                    height: '40px',
                }}>

                {/* LEFT SECTION */}
                <Stack direction="row" spacing={2} sx={{ flex: 1, justifyContent: 'flex-start', alignItems: "center"}}>
                    <Avatar sx={{width: 56, height: 56, bgcolor: 'background.main'}}>
                        <ProfileIcon fontSize="large"/>
                    </Avatar>
                    <Typography variant="h5" sx={{ color: 'primary.main'}}>{name}</Typography>
                </Stack>

                {/* MIDDLE SECTION */}
                <Stack direction={'row'} sx={{flex: 1, justifyContent: "center", alignItems: "flex-end", height:'90%'}}>
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Button
                                key={item.id}
                                component={Link}
                                to={item.path}
                                sx={{
                                    borderRadius: "20px",
                                    color: isActive ? "purple" : "grey",
                                    borderColor: isActive ? "purple" : "transparent",
                                    "&:hover": {
                                        backgroundColor: "transparent",
                                        color: "purple",
                                    },
                                }}
                                >
                                {item.label}
                                </Button>
                        )
                    })}
                </Stack>

                {/* RIGHT SECTION */}
                <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                        key="contact"
                        variant="contained"
                        sx={{
                            borderRadius: "20px",
                            textTransform: 'none',
                        }}
                        startIcon={<StarIcon/>}
                        onClick={() => window.open(linkedInProfileURL, '_blank')}
                        >
                        Contact Me
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}