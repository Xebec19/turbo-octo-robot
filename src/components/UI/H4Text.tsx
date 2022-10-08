import { Typography } from "@mui/material";
import { PropsWithChildren } from "react";

export const H4Text: React.FC<PropsWithChildren> = (props) => {
  return (
    <Typography gutterBottom variant="h4">
      {props.children}
    </Typography>
  );
};
