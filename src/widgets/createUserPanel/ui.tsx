import { useState } from 'react';
import { Box, Button } from '@mui/material';

import { CreateUserDialog } from 'widgets/dialogs/createUser';

export const CreateUserPanel = () => {
  const [open, setOpen] = useState(false);

  const handleButtonClick = () => setOpen((prev) => !prev);
  const handleCloseDialog = () => setOpen(false);

  return (
    <Box justifyContent='flex-end' display='flex' sx={{ p: 2 }}>
      <Button variant='contained' onClick={handleButtonClick}>
        Create User
      </Button>
      <CreateUserDialog open={open} onClose={handleCloseDialog} />
    </Box>
  );
};
