import { Box, Typography } from "@mui/material";

const ReportsPage = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Reports
      </Typography>
      <Typography paragraph>
        This page will contain generated reports and analytics.
      </Typography>
      {/* Report components will be added here */}
    </Box>
  );
};

export default ReportsPage;
