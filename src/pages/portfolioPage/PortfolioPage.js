import '../../App.css';
import { Box } from '@mui/material';
import ProjectCard from '../../components/ProjectCard';
import PersonalProjects from './PersonalProjects.json';

export default function PortfolioPage() {
  return (
    <>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, pt: 3 }}>
            {PersonalProjects.map((project, index) => (
                <ProjectCard key={index} 
                    image={project.image}
                    title={project.name} 
                    children={project.description} 
                    link={project.link}/>
                    
            ))}
        </Box>
    </>
  );
}