import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { editTodo } from '../../Redux/ToDo/operations';
import { useDispatch } from 'react-redux';
import { Dispatch } from '../../Redux/store';
import AddIcon from '../images/addBytton.svg';
import { StyledButton, StyledField } from './TodoModal.styled';


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

export default function TodoModal({ day, selectedMonth, todo }: 
    { 
    day: string, 
    selectedMonth: string,
    todo: 
        { 
        title: string;
        position: string;
        description: string;
        completed: boolean;
        month:string;
        time: string;
        _id?: string;
    }}
) 

{

    console.log(todo);
    
  const [open, setOpen] = useState(false);
  const dispatch: Dispatch = useDispatch();
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div>
      <StyledButton onClick={handleOpen}><img src={AddIcon} width={10} alt="AddIcon" /></StyledButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Formik
          initialValues={{
            title: todo.title,
            position: todo.position,
            description: todo.description,
            completed: false,
            month:selectedMonth,
            time: todo.time,
            _id: todo._id
          }}
          onSubmit={async (values, action) => {
            action.resetForm();
            await dispatch(
                editTodo({
                title: values.title,
                position: day,
                description: values.description,
                completed: values.completed,
                month: selectedMonth,
                time: values.time,
                _id: todo._id
              })
            );
          }}
        >
        <Form>
   
                <StyledField type="text" id="title" name="title" placeholder="Title"/>

                <StyledField type="text" id="description" name="description"  placeholder="Description"/>
              <div>
              <label htmlFor="timeInput"></label>
                <Field
                  type="time"
                  id="time"
                  name="time"
                />
              </div>
              <div>
                <label htmlFor="completed">Completed:</label>
                <Field type="checkbox" id="completed" name="completed" />
              </div>
              <div>
                <button type="submit">Edit</button>
              </div>
        </Form>

        </Formik>
        </Box>
      </Modal>
    </div>
  );
}