import { Stack } from "@mui/material";
import { PropsWithChildren } from "react";

export const ColumnLayout: React.FC<PropsWithChildren> = (props) => {
  return (
    <Stack direction="column" spacing={2}>
      {props.children}
    </Stack>
  );
};
