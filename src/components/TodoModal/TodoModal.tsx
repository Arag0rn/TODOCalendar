import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { deleteTodo, editTodo } from '../../Redux/ToDo/operations';
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

export default function TodoModal({todo }: 
    { 
    todo: 
        { 
        title: string;
        position: string;
        description: string;
        month:string;
        time: string;
        importance: string;
        _id?: string;
    }}
) 

{   
  const [open, setOpen] = useState(false);
  const dispatch: Dispatch = useDispatch();
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDeleteTodo = (_id: string) => {
    dispatch(deleteTodo(_id));
  };


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
            month:todo.month,
            time: todo.time,
            importance: todo.importance,
            _id: todo._id
          }}
          onSubmit={async (values, action) => {
            action.resetForm();
            await dispatch(
                editTodo({
                title: values.title,
                position: todo.position,
                description: values.description,
                month: todo.month,
                time: values.time,
                importance: values.importance,
                _id: todo._id
              })
            );
             handleClose()
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
              <Field as="select" id="importance" name="importance">
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
               </Field>
              </div>
              <div>
                <button type="submit">Edit</button>
                <button 
                    type="button" 
                    onClick={() => todo._id && handleDeleteTodo(todo._id)}>
                    Delete
                  </button>
              </div>
        </Form>

        </Formik>
        </Box>
      </Modal>
    </div>
  );
}