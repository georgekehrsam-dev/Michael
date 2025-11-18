import { Card, CardActions, CardContent, CardMedia, IconButton, Typography, useTheme } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

export default function ProjectCard({image, title, children, link}) {
    const theme = useTheme();
    return (
        <Card sx={{ width: 540, borderRadius: '20px', bgcolor: 'background.secondary' }}>
            <CardMedia
                sx={{ 
                    minHeight: 280,
                    marginTop: '8px',
                    marginRight: '8px',
                    marginLeft: '8px',
                    borderRadius: '12px',
                    backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 0%, ${theme.palette.background.secondary} 100%), url(${process.env.PUBLIC_URL}/${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
                title="project"
            />
            <CardContent>
                <Typography variant="h5" fontWeight={'bold'} sx={{color: 'primary.main'}} >
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'secondary.main' }}>
                    {children}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton size="small" 
                    color= "primary"
                    sx={{bgcolor: 'background.main'}}
                    component="a" href={link} target="_blank" rel="noopener noreferrer">
                    <LanguageIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
