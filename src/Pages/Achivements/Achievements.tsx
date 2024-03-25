import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./card.css";

import {
  Box,
  Button,
  CardActions,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { positions } from "@mui/system";

function createData(subject: string, marks: string) {
  return { subject, marks };
}

const certificates = [
  {
    year: 2019,
    img: "Certificates/Atari - GD.png",
    university: "ATARI Institute - Colombo 08",
    name: "Certificate in Graphic and Multimedia",
    result: "First Class Pass",
  },
  {
    year: 2021,
    img: "Certificates/ICBT Diploma.png",
    university: "ICBT Campus - Colombo 04 ",
    name: "Diploma in Information and Communication Technology",
    result: "Distinction Pass",
  },
  {
    year: 2019,
    img: "/Certificates/Atari - SE.png",
    name: "ATARI Certified Professional Software Developer",
    university: "ATARI Institute - Colombo 08",
    result: "First Class Pass",
  },
  {
    year: 2021,
    img: "",
    name: "G.C.E. Advanced Level Examination",
    university: "Thurston College - Colombo 07",
    result: "",
    button: true,
  },
  {
    year: 2018,
    img: "",
    name: "G.C.E. Ordinary Level Examination",
    university: "Prince Of Wales College",
    result: "",
    button: true,
  },
];

const alRows = [
  createData("General English", "A"),
  createData("ICT", "C"),
  createData("Accounting", "C"),
  createData("Economics", "S"),
  createData("Z-Score", "0.773"),
];
const olRows = [
  createData("ICT", "A"),
  createData("Music (Western)", "A"),
  createData("Science", "A"),
  createData("History", "A"),
  createData("Mathematics", "B"),
  createData("English Language", "B"),
  createData("Sinhala Language & Litt", "B"),
  createData("Business Studies", "B"),
  createData("Buddhism", "C"),
];

export default function Achievements() {
  return (
    <Stack>
      <Typography
        mt={1}
        color={"#537FE7"}
        mb={3}
        variant="h3"
        fontFamily={"fantasy"}
      >
        Achievements
      </Typography>
      <Stack
        m={3}
        display={"flex"}
        gap={3}
        direction={"row"}
        justifyContent={"space-evenly"}
        flexWrap={"wrap"}
      >
        {certificates
          .sort((a, b) => a.year - b.year)
          .map((certificate, id) => (
            <Card
              className="filpable-card"
              variant="outlined"
              sx={{
                minWidth: 310,
                width: 310,
                height: 200,
                backgroundImage: `linear-gradient(40deg, ${
                  id % 2 === 1 ? "#FFFFFF, #FFFFFF" : "#537FE7, #21E6C1"
                })`,  
              }}
            >
              <Box
                border={5}
                className="card"
                height={"95%"}
                style={{ display: "flex", alignItems: "center" }}
              >
                <CardContent className="card-front">
                  <Typography
                    variant="h6"
                    color="#000000"
                    textAlign={"center"}
                    fontWeight={"bold"}
                  >
                    {certificate.name}
                  </Typography>
                </CardContent>
                <Box
                  className="card-back"
                  height={"100%"}
                  width={"100%"}
                  position={"relative"}
                >
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontWeight={"bold"}
                      top={0}
                    >
                      {certificate.university + " (" + certificate.year + ")"}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontWeight={"bold"}
                      bottom={0}
                    >
                      {certificate.result}
                    </Typography>
                  </CardContent>
                  <CardContent
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    <Button> Expand </Button>
                  </CardContent>
                </Box>
              </Box>
            </Card>
          ))}
      </Stack>
    </Stack>
  );
}
