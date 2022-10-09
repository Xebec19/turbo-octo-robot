import styles from "./RegisterLayout.module.scss";
import image from "../../assets/undraw_Welcoming_re_x0qo.png";
import { Box, Card, CardContent, CardActions } from "@mui/material";
import { ButtonElm } from "../UI/ButtonElm";
import { ColumnLayout } from "../UI/ColumnLayout";
import { H4Text } from "../UI/H4Text";
import { InputElm } from "../UI/InputElm";
import React from "react";

const RegisterLayout = () => {
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
            <ButtonElm>Submit</ButtonElm>
            <ButtonElm>Register</ButtonElm>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
};

export default React.memo(RegisterLayout);
