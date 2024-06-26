import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Box } from '@mui/material';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type TProp = {
  fullDialogOpen: boolean;
  setFullDialogOpen: any;
  children: React.ReactNode
}


export default function FullScreenDialog({ fullDialogOpen, setFullDialogOpen, children }: TProp) {


  const handleClose = () => {
    setFullDialogOpen(false);
  };

  return (
    <React.Fragment>

      <Dialog
        fullScreen
        open={fullDialogOpen}
        onClose={handleClose}
        TransitionComponent={Transition}
      >

        <Box sx={{ width: "100%", overflowX: "hidden" }}>
          {children}
        </Box>
      </Dialog>
    </React.Fragment>
  );
}

