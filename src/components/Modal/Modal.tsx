import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { addTodo } from '../../Redux/ToDo/operations';
import { useDispatch } from 'react-redux';
import { Dispatch } from '../../Redux/store';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  display: 'flex',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: "15px",
  border: 'none',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ day, selectedMonth }: { day: string, selectedMonth: string }) {
  const [open, setOpen] = useState(false);
  console.log(selectedMonth);
  
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch: Dispatch = useDispatch();

  return (
    <div>
      <Button onClick={handleOpen}>Add TO DO</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Formik
          initialValues={{
            id: null,
            title: '',
            position: '',
            description: '',
            completed: false,
            month:''
          }}
          onSubmit={async (values, action) => {
            action.resetForm();
            await dispatch(
              addTodo({
                id: values.id,
                title: values.title,
                position: day,
                description: values.description,
                completed: values.completed,
                month: selectedMonth
              })
            );
          }}
        >
        <Form>
              <div>
                <label htmlFor="title">Title:</label>
                <Field type="text" id="title" name="title" />
              </div>
              <div>
              <label htmlFor="description">Description:</label>
                <Field type="text" id="description" name="description" />
              </div>
              <div>
                <label htmlFor="completed">Completed:</label>
                <Field type="checkbox" id="completed" name="completed" />
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
        </Form>

        </Formik>
        </Box>
      </Modal>
    </div>
  );
}