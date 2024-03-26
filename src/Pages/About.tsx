import { Stack, Typography } from "@mui/material";


export default function About() {
  return (
    <Stack
      spacing={2}
      ml={2}
      mr={2}
      direction="column"
      sx={{
        height: { xs: 'auto', md: 'auto', lg: 'auto' },
        marginTop: { xs: 3, md: 10 },

      }}

    >
      <Typography variant={"h6"} fontWeight={'bold'} fontFamily={"Arial"} color="#C6D2ED" sx={{ display: { md: "block", lg: "block", xl: "block" } }}>
        ABOUT
      </Typography>

      <Typography variant="body1" fontFamily="Arial" color="#7789AB"  >
        I am a Computer Science Undergraduate student at IIT and have gained experience in web designing,
        including the application of frameworks like React,
        through coursework and personal projects.

      </Typography>
      <Typography variant="body1" fontFamily="Arial" color="#7789AB" >
        Furthermore, I have a talent for coming up with creative solutions and solving problems,
        whether it's in algorithms or real-world business situations.
        I am also good at understanding complex concepts and helping others learn and grow.
        I am confident in my ability to work well in teams and contribute positively to projects.
      </Typography>
      <Typography variant="body1" fontFamily="Arial" color="#7789AB" >
        I believe I can apply my skills effectively in a full-time industry role, 
        contributing to the success of the businesses I work with.
      </Typography>
    </Stack>
  );
}
