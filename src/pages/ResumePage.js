import '../App.css';
import { Box } from '@mui/material';
import ResumeCard from "../components/ResumeCard"

export default function ResumePage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', paddingTop: '2rem', alignItems: 'center', justifyContent: 'center'}}>
        {/**
         * Please add in your resume pdf file in the public folder
         * and pass the path to the resumePdf prop
         * 
         * For example, if your resume pdf is 'resume.pdf' then input
         * <ResumeCard resumePdf="/resume.pdf" />
         * 
         * instead of 
         * <ResumeCard />
         * 
         * If it's MYRESUME_2025.pdf then put
         * <ResumeCard resumePdf="/MYRESUME_2025.pdf" /> instead
         */}
        <ResumeCard resumePdf={`${process.env.PUBLIC_URL}/resume.pdf`} />
    </Box>
  );
}