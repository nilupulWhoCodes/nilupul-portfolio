import {
  faBootstrap,
  faCss3,
  faFigma,
  faHtml5,
  faJs,
  faLaravel,
  faMicrosoft,
  faPhp,
  faReact,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";
import { faO, faP } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Grid, Stack, Typography } from "@mui/material";

export default function Skills() {
  const frontEndSkill = {
    HTML: faHtml5,
    CSS: faCss3,
    Javascript: faJs,
    Bootstrap: faBootstrap,
    React: faReact,
  };
  const backEndSkill = { PHP: faPhp, Laravel: faLaravel, "Oracle DB": faO };
  const otherSkills = {
    Figma: faFigma,
    "Ms Word": faWindows,
    "Ms Excel": faMicrosoft,
    "Abode Photoshop": faP,
    "Adobe Premire Pro": faP,
  };

  return (
    <Stack>
      <Typography fontFamily="fantasy" color={"#537FE7"} variant="h3" mt={1}>
        My Skills
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <Stack width={"100%"}>
            <Typography
              fontFamily="monospace"
              fontStyle={"revert"}
              mt={2}
              color={"#C0EEF2"}
              variant="h5"
            >
              Front End
            </Typography>
            <Stack mt={2} gap={2}>
              {Object.entries(frontEndSkill).map(([skill, icon]) => (
                <Button
                  startIcon={<FontAwesomeIcon icon={icon} />}
                  sx={{
                    fontFamily: "cursive",
                    color: "#E9F8F9",
                    width: "75%",
                    border: "solid 1px",
                    "&:hover": {
                      backgroundColor: "blue",
                      color: "#FFFFFF",
                      fontWeight: "bold",
                      cursor: "auto",
                    },
                  }}
                  size="small"
                >
                  {skill}
                </Button>
              ))}
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Stack >
            <Typography
              fontFamily="monospace"
              fontStyle={"revert"}
              mt={2}
              color={"#C0EEF2"}
              variant="h5"
            >
              Back End
            </Typography>
            <Stack mt={2} gap={2} >
              {Object.entries(backEndSkill).map(([skill, icon]) => (
                <Button
                  startIcon={<FontAwesomeIcon icon={icon} />}
                  sx={{
                    fontFamily: "cursive",
                    color: "#E9F8F9",
                    width: "75%",
                    "&:hover": {
                      backgroundColor: "blue",
                      color: "#FFFFFF",
                      fontWeight: "bold",
                    },
                    border: "solid 1px",
                    cursor: "auto",
                  }}
                  size="small"
                >
                  {skill}
                </Button>
              ))}
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Stack width={"100%"}>
            <Typography
              fontFamily="monospace"
              fontStyle={"revert"}
              mt={2}
              color={"#C0EEF2"}
              variant="h5"
            >
              Other
            </Typography>
            <Stack mt={2} gap={2}>
              {Object.entries(otherSkills).map(([skill, logo]) => (
                <Button
                  startIcon={<FontAwesomeIcon icon={logo} />}
                  sx={{
                    fontFamily: "cursive",
                    color: "#E9F8F9",
                    width: "75%",
                    "&:hover": {
                      backgroundColor: "blue",
                      color: "#FFFFFF",
                      fontWeight: "bold",
                    },
                    border: "solid 1px",
                    cursor: "auto",
                  }}
                  size="small"
                >
                  {skill}
                </Button>
              ))}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}
