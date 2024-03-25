import {
  Card,
  Chip,
  Stack,

  Typography,
} from "@mui/material";
import image from './image.png'
import { useState } from "react";

function createData(
  year: number,
  project: string,
  madeto: string,
  by: string[],
  link: string
) {
  return { year, project, madeto, by, link };
}


const projects = [
  {
    name: 'Portfolio',
    languages: ['React', 'Material-UI'],
    description: "Portfolio showcasing projects built with React and Material-UI (MUI)",
    image: "portfolio.png"
  },
  {
    name: 'Expense Calculator',
    languages: ['React', 'Node JS', 'Mongo DB', 'Express JS', 'Material-UI'],
    description: "Personal project where users can calculate their daily expenses.",
    image: ""
  }
];

export default function Project() {

  return (
    <Stack m={2} spacing={2} sx={{
      height: { xs: 'auto', md: 'auto', lg: 'auto' },

    }}>
      <Typography variant={"h6"} fontWeight={'bold'} fontFamily={"Arial"} color="#C6D2ED"
        sx={{ display: { md: "block", lg: "block", xl: "block" } }}>
        PROJECTS
      </Typography>
      {
        projects.map((project) => (
          <Card
            sx={{
              backgroundColor: "transparent",
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: "#2C3B60",
                cursor: "pointer",
                "& .img": {
                  border: "1px solid #7789AB",
                },
                "& .no-img": {
                  border: "1px solid red",
                },
              },
            }}
          >
            <Stack direction={"row"} width={"100%"} m={3} >
              {project.image ? (
                <Stack width="40%" height={"auto"} sx={{ display: { xs: "none", md: "flex" } }}>
                  <img
                    className="img"
                    src={project.image ? require(`../assets/images/${project.image}`) : ""}
                    alt="project-cv"
                    width="100%"

                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                </Stack>
              ) : (
                <Stack width="35%" display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{ display: { xs: "none", md: "flex" } }} >
                  <Typography color={"#314162"}>
                    No Image Found
                  </Typography>

                </Stack>
              )}


              <Stack m={1} width={"100%"}>
                <Stack width={"100%"}>
                  <Typography fontSize={"14pt"} fontWeight={"bold"} fontFamily={"arial"} color={"#C6D2ED"}>
                    {project.name}
                  </Typography>
                  <Typography
                    fontSize="10pt"
                    fontFamily="Arial"
                    color="#7789AB"
                    width={"90%"}
                  >
                    {project.description}
                  </Typography>
                </Stack>
                <Stack direction={"row"} width={"100%"} gap={1} flexWrap={"wrap"}>
                  {
                    project.languages.map((lang) => (
                      <Chip
                        sx={{
                          marginTop: 1,
                          backgroundColor: "#122B39",
                          color: "#50C5B6",
                          border: "none",
                          fontSize: 12,
                          fontWeight: "bold"
                        }}
                        variant="outlined"
                        label={lang}
                        size="small"
                      />
                    ))
                  }

                </Stack>
              </Stack>
            </Stack>
          </Card>
        ))}

    </Stack>
  );
}
