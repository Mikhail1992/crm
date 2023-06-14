import { useState } from 'react';
import { Box, Button } from '@mui/material';

import { CreateProjectDialog } from 'widgets/dialogs/createProject';

export const CreateProjectPanel = () => {
  const [open, setOpen] = useState(false);

  const handleButtonClick = () => setOpen((prev) => !prev);
  const handleCloseDialog = () => setOpen(false);

  return (
    <Box justifyContent='flex-end' display='flex' sx={{ p: 2 }}>
      <Button variant='contained' onClick={handleButtonClick}>
        Create Project
      </Button>
      <CreateProjectDialog open={open} onClose={handleCloseDialog} />
    </Box>
  );
};
