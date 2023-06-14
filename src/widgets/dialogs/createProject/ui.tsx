import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from '@mui/material';
import { useProjectsStore } from 'entities/project/model';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface IProps {
  open: boolean;
  onClose: () => void;
}

const schema = yup
  .object({
    name: yup.string().required(),
    description: yup.string().required(),
  })
  .required();

export const CreateProjectDialog = ({ open, onClose }: IProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const createProject = useProjectsStore((state) => state.createProject);

  const onSubmit = handleSubmit(async (data) => {
    await createProject(data);
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
        <TextField
          label='Project description'
          margin='dense'
          multiline
          fullWidth
          error={!!errors.description?.message}
          helperText={errors.description?.message}
          {...register('description')}
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
