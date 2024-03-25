
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import { Stack, Typography, Card } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import SuitcaseIcon from '@mui/icons-material/Work';
import CertificateIcon from '@mui/icons-material/WorkspacePremium';

export default function TimelineExpAndEdu() {
    return (
        <Stack 
        height={"100%"} width={"100"} m={2}
            spacing={2}
            sx={{
                height: { xs: 'auto', md: 'auto', lg: 'auto' },

            }}>
            <Typography variant={"h6"} fontWeight={'bold'} fontFamily={"Arial"} color="#C6D2ED"
                sx={{ display: { md: "block", lg: "block", xl: "block" } }}>
                EDUCATION & EXPERIENCE
            </Typography>
            <Timeline

                sx={{
                    [`& .${timelineOppositeContentClasses.root}`]: {
                        flex: 0.2,
                    },
                }}
            >
                <TimelineItem >
                    <TimelineOppositeContent display="none">
                    </TimelineOppositeContent>
                    <TimelineSeparator >
                        <TimelineConnector />
                        <TimelineDot sx={{ backgroundColor: "#A341FC" }}>
                            <SchoolIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent mb={4} >
                        <Card sx={{
                            width: "100%", height: "100%", border: "1px solid #A341FC",
                            borderRadius: '5px',
                            backgroundColor: 'transparent',
                        }} >
                            <Stack m={2} textAlign={"left"} spacing={4}>
                                <Stack>
                                    <Typography fontSize={"14pt"} fontWeight={"bold"} fontFamily={"arial"} color={"#C6D2ED"}>
                                        BSc (Hons) Computer Science
                                    </Typography>
                                    <Typography fontSize={"10pt"} fontWeight={"bold"} fontFamily={"arial"} color={"#314162"}>
                                        2022 SEP - PRESENT
                                    </Typography>
                                    <Typography
                                        fontSize="10pt"
                                        fontFamily="Arial"
                                        color="#7789AB"
                                    >
                                        Informatics Institute of Technology, Wellewatte,
                                        Sri Lanka which is Affiliated with the
                                        <span style={{ color: "#C6D2ED" }}> University of Westminster </span>
                                        London.
                                    </Typography>
                                </Stack>
                                <Stack>
                                    <Typography fontSize={"14pt"} fontWeight={"bold"} fontFamily={"arial"} color={"#C6D2ED"}>
                                        Diploma in Information & Communication Technology
                                    </Typography>
                                    <Typography fontSize={"10pt"} fontWeight={"bold"} fontFamily={"arial"} color={"#314162"}>
                                        2020 MAY - 2021 JAN
                                    </Typography>
                                    <Typography
                                        fontSize="10pt"
                                        fontFamily="Arial"
                                        color="#7789AB"
                                    >
                                        International College of Business and Technology, Colombo 04,
                                        Sri Lanka
                                        Distinction Pass
                                    </Typography>
                                </Stack>
                                <Stack>
                                    <Typography fontSize={"14pt"} fontWeight={"bold"} fontFamily={"arial"} color={"#C6D2ED"}>
                                        Primary and Secondary Education
                                    </Typography>
                                    <Typography fontSize={"10pt"} fontWeight={"bold"} fontFamily={"arial"} color={"#314162"}>
                                        2006 - 2021
                                    </Typography>
                                    <Typography
                                        fontSize="10pt"
                                        fontFamily="Arial"
                                        color="#7789AB"
                                    >
                                        Prince Of Wales College, Moratuwa, Sri Lanka <br />
                                        Thurstan College, Colombo 07, Sri Lanka. <br />
                                        Completed G.C.E Ordinary Level (O/L) & G.C.E Advance Level (A/L) <br />
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Card>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent display="none">
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot sx={{ backgroundColor: "#FF8A2B" }}>
                            <SuitcaseIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent mb={4}>
                        <Card sx={{
                            width: "100%", height: "100%", border: "1px solid #FF8A2B",
                            borderRadius: '5px',
                            backgroundColor: 'transparent',
                        }} >
                            <Stack m={2} textAlign={"left"} spacing={4}>
                                <Stack>
                                    <Typography fontSize={"14pt"} fontWeight={"bold"} fontFamily={"arial"} color={"#C6D2ED"}>
                                        Intern | Sampath Bank Head Office
                                    </Typography>
                                    <Typography fontSize={"10pt"} fontWeight={"bold"} fontFamily={"arial"} color={"#314162"}>
                                        2022 APR - 2022 SEP
                                    </Typography>
                                    <Typography
                                        fontSize="10pt"
                                        fontFamily="Arial"
                                        color="#7789AB"
                                    >
                                        I worked in the Credit Administration Department,
                                        mostly assisting with the file rearrangement project
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Card>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Stack>
    );
}