import styles from "./RegisterLayout.module.scss";
import image from "../../assets/undraw_Welcoming_re_x0qo.png";
import { Box, Card, CardContent, CardActions, Input } from "@mui/material";
import { ButtonMid } from "../UI/ButtonMid";
import { ColumnLayout } from "../UI/ColumnLayout";
import { H4Text } from "../UI/H4Text";
import { InputElm } from "../UI/InputElm";
import React, { useRef } from "react";

const RegisterLayout = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.gridContainer}>
      <img src={image} alt="register" />
      <Box>
        <Card>
          <CardContent>
            <H4Text>Register</H4Text>
            <ColumnLayout>
              <InputElm label="firstName" type="text" required ref={emailInputRef} />
              <InputElm label="lastName" type="text"/>
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

export default React.memo(RegisterLayout);
