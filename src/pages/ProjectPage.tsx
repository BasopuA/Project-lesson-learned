import { Box, Typography } from "@mui/material";

const ProjectsPage = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Projects
      </Typography>
      <Typography paragraph>
        This page will display a list of all projects and their status.
      </Typography>
      {/* Project list or table will be added here */}
    </Box>
  );
};

export default ProjectsPage;
