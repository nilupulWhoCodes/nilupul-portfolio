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
        marginTop: { xs: 3, md: 8 },
        
      }}

    >
      <Typography variant={"h6"} fontWeight={'bold'} fontFamily={"Arial"} color="#C6D2ED" sx={{ display: { md: "block", lg: "block", xl: "block" } }}>
        ABOUT
      </Typography>

      <Typography variant="body1" fontFamily="Arial" color="#7789AB"  >
        I am a creative Software Developer who has experience in technologies such as Data Science & ML and Cloud Computing. I am a highly coordinated, committed and diplomatic
        software engineer with a defined capacity to operate and execute any specific role on schedule.

      </Typography>
      <Typography variant="body1" fontFamily="Arial" color="#7789AB" >
        I am able to communicate with a vast variety of individuals easily, with outstanding organizational skills. I see that I will bring my skills and expertise into practice in a full-time role in the industry, which will directly support the activities of the businesses I am involved in.
        I have the potential to build original conceptions and insights and solve a great many problems, guided by my intuitive and optimistic approach to problem solving. In algorithms as in business scenarios, I am able to apply my problems solving skills.
      </Typography>
      <Typography variant="body1" fontFamily="Arial" color="#7789AB" >
        Furthermore, I can easily and effectively understand the intensifying principles and help others to develop with great self encouragement. Therefore, I guess I am able to handle a lot of teams.

      </Typography>
    </Stack>
  );
}
