import { Stack, Typography, Button, Grid } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Instagram from '@mui/icons-material/Instagram';
import Facebook from '@mui/icons-material/Facebook';
import About from './About';
import TimelineExpAndEdu from './TimelineExpAndEdu';
import Certificates from './Certificates';
import Projects from './Projects';
import GlowingCursor from '../Components/GlowingCursor';


const Home = () => {

  const handleDownload = () => {
    
    const fileUrl = '/CV - Nilupul Samarathunga.pdf';
    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = 'CV - Nilupul Samarathunga.pdf';
    anchor.click();
  };

  return (
    <Grid container direction="row" sx={{ backgroundColor: "transparent" }}>

      <Grid item xs={12} md={6} lg={6} sx={{
        position: { md: 'fixed', lg: 'fixed' },
        top: { md: 95, lg: 95 },
        left: { md: 75, lg: 75 },
        height: { xs: '60vh', md: 'auto', lg: 'auto' },
        overflowY: { md: 'hidden', lg: 'hidden' },
        width: { xs: '100%', md: '50%', lg: '50%' },
      }}>
        <Stack
          gap={2}
          direction="column"
          sx={{
            justifyContent: { xs: 'center', sm: 'center' },
            alignItems: { xs: 'center', sm: 'flex-start' },
            width: "100%",
            height: "100%",
          }}
        >
          <Typography variant="h2" fontFamily="fantasy" color="#C6D2ED" width="100%" sx={{
            fontSize: {
              xs: "45px", md: "40pt"
            }
          }} >
            Nilupul Suramya
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "18px", md: "15pt"
              }
            }}
            fontFamily="Arial" color="#C6D2ED" width="100%" fontWeight={"bold"}>
            Computer Science Student
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "15px", md: "12pt"
              }
            }}
            fontFamily="Arial" color="#7789AB" width="100%">
            I build pixel-perfect, engaging, and accessible digital experiences.
          </Typography>
          <Stack sx={{ height: { md: "10vh", xs: "auto" } }} width={"100%"} justifyContent={"center"}>
            <Button
              sx={{ width: { sm: "100%", xs: "100%", md: "35%", lg: "35%" } }}

              size="small"
              component="label"
              variant="contained"
              endIcon={<DownloadIcon />}
              onClick={handleDownload}
            >
              Resume
            </Button>
          </Stack>
          <Stack
            direction="row"
            color="#7789AB"
            spacing={2}
            height="12vh"
            sx={{
              alignItems: { xs: 'center', md: 'flex-end' },
              '& > a': {
                textDecoration: 'none',
                color: '#7789AB',
                '&:hover': {
                  color: '#C6D2ED',
                  cursor: 'pointer'
                }
              }
            }}
          >
            <a
              target='_blank'
              href="https://github.com/nilupulWhoCodes"
              rel="noopener noreferrer"
            >
              <GitHub />
            </a>
            <a
              target='_blank'
              href="https://www.linkedin.com/in/nilupul-samarathunga"
            >
              <LinkedIn />
            </a>
            <a
              target='_blank'
              href="https://www.instagram.com/_niluwa.ns_/?hl=en"
            >
              <Instagram />
            </a>
            <a
              target='_blank'
              href="https://web.facebook.com/nilupul.suramya.7"
            >
              <Facebook />
            </a>
          </Stack>
        </Stack>

      </Grid>
      <Grid item xs={12} md={6} lg={6} sm={12} sx={{ mt: { md: 0 }, ml: { md: '50%' }, }}>
        <Stack direction="column" gap={18}>
          <About />
          <TimelineExpAndEdu />
          <Certificates />
          <Projects />
        </Stack>
      </Grid>
    </Grid >
  );
};

export default Home;
