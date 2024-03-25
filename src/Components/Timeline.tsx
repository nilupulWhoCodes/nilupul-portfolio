import { Timeline as MuiTimeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";
// import { makeStyles, createTheme, ThemeProvider } from "@mui/styles";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Paper, Typography } from "@mui/material";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import CachedIcon from "@mui/icons-material/Cached";
import ErrorIcon from "@mui/icons-material/Error";

// const useStyles = makeStyles({
//   timelinecss: {
//     transform: "rotate(90deg)",
//   },
//   timelineContentContainer: {
//     textAlign: "left",
//   },
//   timelineContent: {
//     display: "inline-block",
//     transform: "rotate(-90deg)",
//     textAlign: "center",
//     minWidth: 50,
//   },
//   timelineIcon: {
//     transform: "rotate(-90deg)",
//   },
// });

// const classes = useStyles();
export default function Timeline() {
  return (
    <>a</>
    // <MuiTimeline className={classes.timeline} align="alternate">
    //   <TimelineItem>
    //     <TimelineSeparator>
    //       <TimelineConnector />
    //     </TimelineSeparator>
    //     <TimelineContent className={classes.timelineContentContainer}>
    //       <Paper className={classes.timelineContent}>
    //         <Typography>Eat</Typography>
    //       </Paper>
    //     </TimelineContent>
    //   </TimelineItem>
    //   <TimelineItem>
    //     <TimelineSeparator>
    //       <PauseCircleFilledIcon
    //         color="primary"
    //         className={classes.timelineIcon}
    //       />
    //       <TimelineConnector />
    //     </TimelineSeparator>
    //     <TimelineContent className={classes.timelineContentContainer}>
    //       <Paper className={classes.timelineContent}>
    //         <Typography>Code</Typography>
    //       </Paper>
    //     </TimelineContent>
    //   </TimelineItem>
    //   <TimelineItem>
    //     <TimelineSeparator>
    //       <CachedIcon color="primary" className={classes.timelineIcon} />
    //       <TimelineConnector />
    //     </TimelineSeparator>
    //     <TimelineContent className={classes.timelineContentContainer}>
    //       <Paper className={classes.timelineContent}>
    //         <Typography>Sleep</Typography>
    //       </Paper>
    //     </TimelineContent>
    //   </TimelineItem>
    //   <TimelineItem>
    //     <TimelineSeparator>
    //       <CachedIcon color="primary" className={classes.timelineIcon} />
    //       <TimelineConnector />
    //     </TimelineSeparator>
    //     <TimelineContent className={classes.timelineContentContainer}>
    //       <Paper className={classes.timelineContent}>
    //         <Typography>Repeat</Typography>
    //       </Paper>
    //     </TimelineContent>
    //   </TimelineItem>
    //   <TimelineItem>
    //     <TimelineSeparator>
    //       <ErrorIcon color="primary" className={classes.timelineIcon} />
    //     </TimelineSeparator>
    //     <TimelineContent className={classes.timelineContentContainer}>
    //       <Paper className={classes.timelineContent}>
    //         <Typography>Sleep</Typography>
    //       </Paper>
    //     </TimelineContent>
    //   </TimelineItem>
    // </MuiTimeline>
  );
}
