import { Box, Typography, Paper, Chip, Divider } from "@mui/material";
import { useParams } from "react-router-dom";

const LessonDetailPage = () => {
  const { id } = useParams();

  // This would normally come from an API call
  const lesson = {
    id,
    title: "Sample Lesson",
    description: "This is a detailed description of what was learned.",
    project: "MeerKAT",
    category: "Technical",
    impact: "High",
    date: "2023-05-15",
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        {lesson.title}
      </Typography>
      <Paper sx={{ p: 3, mb: 2 }}>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Chip label={`Project: ${lesson.project}`} color="primary" />
          <Chip label={`Category: ${lesson.category}`} />
          <Chip label={`Impact: ${lesson.impact}`} color="secondary" />
          <Typography variant="body2" color="text.secondary">
            {lesson.date}
          </Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Typography paragraph>{lesson.description}</Typography>
      </Paper>
    </Box>
  );
};

export default LessonDetailPage;
