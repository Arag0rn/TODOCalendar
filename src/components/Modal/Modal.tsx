import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { Field, Formik } from 'formik';
import { addTodo } from '../../Redux/ToDo/operations';
import { useDispatch } from 'react-redux';
import { Dispatch } from '../../Redux/store';
import { StyledButton } from './Modal.styled';
import AddIcon from '../images/addBytton.svg';
import { ButtonModal, StyledField, StyledForm } from '../TodoModal/TodoModal.styled';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  display: 'flex',
  justifyContent: 'center',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#f5f2c6',
  borderRadius: "15px",
  border: 'none',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ day, selectedMonth }: { day: string, selectedMonth: string }) {
  const [open, setOpen] = useState(false);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch: Dispatch = useDispatch();

  return (
    <div>
      <StyledButton onClick={handleOpen}><img src={AddIcon} alt="AddIcon" /></StyledButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Formik
          initialValues={{
            title: '',
            position: '',
            description: '',
            month:'',
            time: '',
            importance: 'Medium',
          }}
          onSubmit={async (values, action) => {
            action.resetForm();
            await dispatch(
              addTodo({
                title: values.title,
                position: day,
                description: values.description,
                month: selectedMonth,
                time: values.time,
                importance: values.importance,
              })
            );
            handleClose();
          }}
        >
        <StyledForm>
   
                <StyledField type="text" id="title" name="title" placeholder="Title"/>

                <StyledField 
                type="text" 
                id="description" 
                name="description"  
                placeholder="Description"
                component="textarea"
                cols="30"
                rows="5"/>
              <div>
              <label htmlFor="timeInput"></label>
                <StyledField
                  type="time"
                  id="time"
                  name="time"
                />
              </div>
              <Field as="select" id="importance" name="importance" defaultValue="Medium">
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
               </Field>
              <div>
                <ButtonModal type="submit">Submit</ButtonModal>
              </div>
        </StyledForm>

        </Formik>
        </Box>
      </Modal>
    </div>
  );
}