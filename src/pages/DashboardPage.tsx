// src/pages/DashboardPage.tsx
import { Grid, Paper, Typography } from "@mui/material";
import IssuesTrendChart from "../components/dashbord/IssuesTrendChart";
import IssuesDistributionChart from "../components/dashbord/IssuesDistributionChart";
import LessonsWordCloud from "../components/dashbord/LessonsWordCloud";
import RecentLessonsList from "../components/dashbord/RecentLessonsList";

const DashboardPage = () => {
  return (
    <Grid container spacing={3}>
      {"Page1 example"}
      <Grid component="div">
        <Typography variant="h4" component="h1">
          Project Retrospective Dashboard
        </Typography>
      </Grid>

      {/* Charts Row */}
      <Grid component="div">
        <Paper sx={{ p: 2, height: "400px" }}>
          <IssuesTrendChart />
        </Paper>
      </Grid>
      <Grid component="div">
        <Paper sx={{ p: 2, height: "400px" }}>
          <IssuesDistributionChart />
        </Paper>
      </Grid>

      {/* Word Cloud */}
      <Grid component="div">
        <Paper sx={{ p: 2, height: "400px" }}>
          <LessonsWordCloud />
        </Paper>
      </Grid>

      {/* Recent Lessons */}
      <Grid component="div">
        <Paper sx={{ p: 2 }}>
          <RecentLessonsList />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default DashboardPage;
