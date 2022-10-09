import styles from "./LoginLayout.module.scss";
import image from "../../assets/undraw_secure_login_pdn4.png";
import { Box, Card, CardContent, CardActions } from "@mui/material";
import { ButtonMid } from "../UI/ButtonMid";
import { H4Text } from "../UI/H4Text";
import { ColumnLayout } from "../UI/ColumnLayout";
import { InputElm } from "../UI/InputElm";
import React from "react";

const Login = () => {
  return (
    <div className={styles.gridContainer}>
      <img src={image} alt="login" />
      <Box>
        <Card>
          <CardContent>
            <H4Text>Login</H4Text>
            <ColumnLayout>
              <InputElm label="Email" type="text" required />
              <InputElm
                label="Password"
                type="password"
                helperText="Password should have minimum 8 characters."
                required
              />
            </ColumnLayout>
          </CardContent>
          <CardActions>
            <ButtonMid>Submit</ButtonMid>
            <ButtonMid>Register</ButtonMid>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
};

export default React.memo(Login);
