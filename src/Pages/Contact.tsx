import { Stack, Typography, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState, ChangeEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    emailValid: "",
    message: "",
  });

  const nameError = errors.name;
  const emailError = errors.email;
  const emailValidError = errors.emailValid;
  const messageError = errors.message;

  function validateFields(formData: FormData): { [key: string]: string } {
    console.log(formData);
    const validationErrors = {
      name: formData.name === "" ? "Name is required" : "",
      email: formData.email === "" ? "Please enter a email" : "",
      emailValid:
        !formData.email.includes("@") || !formData.email.includes(".com")
          ? "Please enter a valid email"
          : "",
      message: formData.message ? "Message cannot be empty" : "",
    };

    setErrors(validationErrors);

    return validationErrors;
  }

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOnClick = () => {
    validateFields(formData);
  };
  console.log(errors);

  return (
    <Stack>
      <Stack alignItems="center">
        <Typography
          variant="h3"
          fontFamily="fantasy"
          textAlign="center"
          color={"#537FE7"}
        >
          Hello There !
        </Typography>
        <Typography
          color={"#C0EEF2"}
          pt={2}
          fontSize={"17px"}
          width="30%"
          textAlign={"center"}
          fontFamily="revert"
        >
          Got a question or a proposal, or just want to say hello? Go ahead.
        </Typography>
      </Stack>

      <form>
        <Stack
          spacing={{ xs: 1, sm: 2 }}
          useFlexGap
          flexWrap="wrap"
          pt={5}
          pb={5}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Stack gap={1}>
            <TextField
              onChange={handleOnChange}
              name="name"
              id="standard-helperText"
              label="Name"
              InputLabelProps={{
                shrink: true,
                style: { color: "#537FE7" },
              }}
              InputProps={{
                style: { color: "#C0EEF2" },
              }}
              style={{ width: "500px" }}
              variant="standard"
              focused
            />
            <Typography color={"red"} fontSize={12}>
              {" "}
              {nameError}{" "}
            </Typography>
          </Stack>
          <Stack gap={1}>
            <TextField
              name="email"
              onChange={handleOnChange}
              id="standard-helperText"
              label="Email"
              value={formData.email}
              InputLabelProps={{
                shrink: true,
                style: { color: "#537FE7" },
              }}
              InputProps={{
                style: { color: "#C0EEF2" },
              }}
              variant="standard"
              style={{ width: "500px" }}
              focused
            />
            <Typography color={"red"} fontSize={12}>
              {" "}
              {emailError !== "" ? emailError : emailValidError}{" "}
            </Typography>
          </Stack>

          <TextField
            name="message"
            onChange={handleOnChange}
            id="standard-helperText"
            label="Message"
            InputLabelProps={{
              shrink: true,
              style: { color: "#537FE7" },
            }}
            InputProps={{
              style: { color: "#C0EEF2" },
            }}
            variant="standard"
            style={{ width: "1018px" }}
            focused
          />
        </Stack>
        <Button
          variant="outlined"
          size="large"
          endIcon={<SendIcon />}
          onClick={handleOnClick}
          value={formData.message}
          sx={{
            width: "25%",
            margin: "auto",
            display: "flex",
          }}
        >
          Send
        </Button>
      </form>
    </Stack>
  );
}
