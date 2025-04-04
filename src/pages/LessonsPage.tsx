import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import LessonsTable from "../features/lessons/LessonsTable";
import AddLessonDialog from "../features/lessons/AddLessonDialog";
import { useState } from "react";

const LessonsPage = () => {
  const [openAddDialog, setOpenAddDialog] = useState(false);

  return (
    <Box component="div" sx={{ width: "100%" }}>
      <Grid container spacing={3}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h4" component="h1">
            Lessons Learned
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpenAddDialog(true)}
          >
            Add New Lesson
          </Button>
        </Box>

        <Paper sx={{ p: 2 }}>
          <LessonsTable />
        </Paper>
      </Grid>
      <AddLessonDialog
        open={openAddDialog}
        onClose={() => setOpenAddDialog(false)}
      />
    </Box>
  );
};

export default LessonsPage;
