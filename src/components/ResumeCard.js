import { Box, Card, CardContent, Typography, IconButton } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

export default function ResumeCard({ resumePdf }) {

    return (
        <Card sx={{ overflowY: 'auto'}}>
            {resumePdf ? (
                <>
                    <Box sx={{ position: 'relative', }}>
                        <Box component="embed" src={`${resumePdf}#zoom=78&toolbar=0`} type="application/pdf" sx={{ width: '110vh', height: '90vh', borderRadius: '8px',}}/>
                        <IconButton
                            href={resumePdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                position: 'absolute',
                                bottom: 16,
                                right: 16,
                                backgroundColor: 'white',
                                boxShadow: 2,
                                '&:hover': {
                                    backgroundColor: '#f0f0f0',
                                },
                            }}
                        >
                            <DownloadIcon />
                        </IconButton>
                    </Box>
                    
                </>
            ) : (
                <CardContent>
                    <Typography variant="h6" align="center">
                        Please Provide resume PDF
                    </Typography>
                </CardContent>
            )}
        </Card>
    );
}