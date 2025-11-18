import '../App.css';
import { Box, Typography, Stack } from '@mui/material';
import placeholderImg from '../assets/placeholder.jpg';

export default function ProfilePage() {
  return (
    <Stack paddingTop={'5rem'} paddingBottom={'3rem'} width={'100%'} direction={'row'} spacing={2} alignItems={'flex-start'} justifyContent={'center'}>
        {/**
         * Left Side Box
         * 
         * Feel free to change the text within the typography line
         * to reflect changes in the app in the about section
         * 
         * Ex.) <Typography ...>CHANGE TEXT HERE</Typography>
         * 
         */}
        <Box maxWidth={'50%'}>
          <Stack spacing={5}>
            <Box>
                {/* sx is CSS styling for React components */}
                <Typography variant='h1' sx={{/*fontSize: '50px',*/ color: 'primary.main'}}>Aspiring</Typography>
                <Typography variant='h1' sx={{color: 'tertiary.main'}}>--Enter position--</Typography>
            </Box>
            <Box>
                <Typography variant='h2' sx={{fontWeight: 'bold', color: 'primary.main'}} >Education</Typography>
                <Typography variant='h3' sx={{color: 'primary.main'}}>Virginia Tech, Class of --Enter Grad Year--</Typography>
            </Box>
            <Box maxWidth={'83%'}>
                <Typography variant='h2' sx={{fontWeight: 'bold', color: 'primary.main'}}>What's my story?</Typography>
                <Typography variant='p' sx={{color: 'secondary.main'}}>--Enter in your story--</Typography>
            </Box>
          </Stack>
        </Box>

        {/**
         * Right Side Box
         * 
         * Here is a box that has an image you can upload to 
         * showcase yourself! Add the jpg image file into the 
         * assets folder (/assets/yourimage.jpg)
         * 
         * YOU ARE ALLOWED TO TOUCH ONLY THE IMAGE IMPORT ABOVE
         * Ex.) import YOURIMAGE from '../../assets/yourimage.jpg';
         *    - make sure to change the src={} to have YOURIMAGE below
         * 
         */}
        <Box width={'40%'}>
          <Box
            component="img"
            src={placeholderImg}
            alt="Placeholder"
            sx={{
              borderRadius: '44px',
              width: '100%',       
              height: 'auto',      
            }}
          />
        </Box>
      </Stack>
  );
}