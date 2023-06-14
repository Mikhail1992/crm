import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from '@mui/material';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useUsersStore } from 'entities/user/model';

interface IProps {
  open: boolean;
  onClose: () => void;
}

const schema = yup
  .object({
    name: yup.string().required(),
  })
  .required();

export const CreateUserDialog = ({ open, onClose }: IProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const createUser = useUsersStore((state) => state.createUser);

  const onSubmit = handleSubmit(async (data) => {
    await createUser(data);
    onClose();
  });

  return (
    <Dialog open={open} onClose={onClose} maxWidth='md' fullWidth>
      <DialogContent dividers>
        <TextField
          label='Project name'
          margin='dense'
          fullWidth
          autoFocus
          error={!!errors.name?.message}
          helperText={errors.name?.message}
          {...register('name')}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant='contained' onClick={onSubmit}>
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};
