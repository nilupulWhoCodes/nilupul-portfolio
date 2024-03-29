import { Stack, Typography, TextField, Button, Card, InputAdornment } from "@mui/material";
import { useState, ChangeEvent } from "react";
import PersonIcon from '@mui/icons-material/Person';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import MessageIcon from '@mui/icons-material/Message';
import emailJs from '@emailjs/browser';
import { Snackbar, SnackbarContent } from '@mui/material';

export default function Contact() {
  const [showElements, setShowElements] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    emailSendMessage: "",
  });

  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastSeverity, setToastSeverity] = useState('success'); // 'success' or 'error'


  const [errors, setFormValidationErrors] = useState<{
    name: string;
    emailValidError: boolean | null;
    message: string;
    sendEmailError: string;
  }>({
    name: '',
    emailValidError: null,
    message: '',
    sendEmailError: '',
  });


  const emailValidation = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      setFormValidationErrors((prevDetails) => ({
        ...prevDetails,
        emailValidError: true

      }));
      return false;
    }
    if (!emailRegex.test(email)) {
      setFormValidationErrors((prevDetails) => ({
        ...prevDetails,
        emailValidError: true

      }));
      return false;
    }
    return true;
  }
  console.log(errors);
  const handleSetEmail = (event: ChangeEvent<HTMLInputElement>) => {

    if (event.target.value !== "") {

      if (emailValidation(event.target.value)) {
        setFormValidationErrors((prevDetails) => ({
          ...prevDetails,
          emailValidError: false

        }));
        setFormData((prevState) => ({
          ...prevState,
          email: event.target.value
        }))
      }
    }

  }
  const handleStartButtonClick = () => {
    setShowElements(!showElements);
  };


  function validateNameAndMessage() {

    let validForm = false;

    if (formData.name === "") {
      setFormValidationErrors((prevDetails) => ({
        ...prevDetails,
        name: "Please enter your name"

      }));
      return validForm;
    }

    if (formData.message === "") {
      setFormValidationErrors((prevDetails) => ({
        ...prevDetails,
        message: "Please enter your message"

      }));
      return validForm;
    }

    return true;
  }

  // const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const handleSubmitButton = () => {
    if (validateNameAndMessage()) {
      setFormValidationErrors((prevDetails) => ({
        ...prevDetails,
        emailValidError: null

      }));
      setShowElements(!showElements);
      emailJs.send('service_pebhefh', 'template_4w2aohk', formData, 'vaJUdE76G87YUHcuL')
        .then((response) => {
          setToastSeverity('success');
          setToastMessage('Message sent successfully');
          setToastOpen(true);
          setFormData((prevData) => ({
            ...prevData,
            emailSendMessage: "Message sent successfully"
          }));
        })
        .catch((error) => {
          setToastSeverity('error');
          setToastMessage('Error sending the message');
          setToastOpen(true);
          setFormValidationErrors((prevData) => ({
            ...prevData,
            sendEmailError: "Error sending the message"
          }));
        });
    }
  };






  return (
    <Stack spacing={2}>
      <Snackbar open={toastOpen} autoHideDuration={6000} onClose={() => setToastOpen(false)}>
        <SnackbarContent
          message={toastMessage}
          style={{ backgroundColor: toastSeverity === 'success' ? '#4CAF50' : '#f44336' }}
        />
      </Snackbar>
      <Typography variant={"h6"} fontWeight={'bold'} fontFamily={"Arial"} color="#C6D2ED"
        sx={{ display: { md: "block", lg: "block", xl: "block" } }}>
        CONTACT ME
      </Typography>
      <>
        <Card sx={{
          backgroundColor: "#0B2447",
        }}>
          <Stack m={2} >
            {showElements ? (
              <Stack spacing={1}>
                <Typography variant={"subtitle1"} textAlign={"center"} color={"#7789AB"}> Got a question or a proposal, or just want to say hello? Go ahead.</Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "18px", md: "15pt"
                    }
                  }}
                  textAlign={"center"}
                  fontFamily="Arial" color="#C6D2ED" width="100%" fontWeight={"bold"}>
                  What's your email?
                </Typography>
                <TextField
                  id="outlined-search"
                  label="Email"
                  type="text"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon style={{ color: '#909FC1', opacity: 0.5 }} /> {/* Change color here */}
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        {errors.emailValidError === false ? <CheckIcon style={{ color: 'green' }} /> : errors.emailValidError === true ? <ClearIcon style={{ color: 'red' }} /> : ""}

                      </InputAdornment>
                    ),
                    inputProps: {
                      style: { color: '#B4BDDB' }
                    }
                  }}
                  InputLabelProps={{
                    style: { color: '#909FC1', opacity: 0.5 },
                  }}
                  onChange={handleSetEmail}
                />

                <Button disabled={errors.emailValidError !== false} onClick={handleStartButtonClick} variant="contained" sx={{ backgroundColor: "#6D67E4" }}>Start</Button>

              </Stack>
            ) :
              <Stack spacing={1}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "18px", md: "15pt"
                    }
                  }}
                  textAlign={"center"}
                  fontFamily="Arial" color="#C6D2ED" width="100%" fontWeight={"bold"}>
                  What's your name?
                </Typography>
                <TextField
                  id="outlined-search"
                  label="Name"
                  type="text"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon style={{ color: '#909FC1', opacity: 0.5 }} />
                      </InputAdornment>
                    ),
                    inputProps: {
                      style: { color: '#B4BDDB' }
                    }
                  }}
                  InputLabelProps={{
                    style: { color: '#909FC1', opacity: 0.5 },
                  }}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    setFormData((prevData) => ({
                      ...prevData,
                      name: event.target.value
                    }));
                    setFormValidationErrors((prevData) => ({
                      ...prevData,
                      name: ""
                    }));
                  }}
                />
                <Typography variant="caption" color="red">
                  {errors.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "18px", md: "15pt"
                    }
                  }}
                  textAlign={"center"}
                  fontFamily="Arial" color="#C6D2ED" width="100%" fontWeight={"bold"}>
                  How can I assist you?
                </Typography>
                <TextField
                  id="outlined-search"
                  label="Message"
                  type="text"
                  multiline
                  rows={3}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MessageIcon style={{ color: '#909FC1', opacity: 0.5 }} />
                      </InputAdornment>
                    ),
                    inputProps: {
                      style: { color: '#B4BDDB' }
                    }
                  }}
                  InputLabelProps={{
                    style: { color: '#909FC1', opacity: 0.5 },
                  }}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    setFormData((prevData) => ({
                      ...prevData,
                      message: event.target.value
                    }));
                    setFormValidationErrors((prevData) => ({
                      ...prevData,
                      message: ""
                    }));

                  }}
                />
                <Typography variant="caption" color="red">
                  {errors.message}
                </Typography>
                <Button onClick={handleSubmitButton} variant="contained" sx={{ backgroundColor: "#6D67E4" }}>Submit</Button>
              </Stack>
            }
          </Stack>

        </Card>
      </>
    </Stack >
  );
}
