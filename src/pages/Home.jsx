import { useContext, useEffect, useState } from 'react';

import { ReactComponent as AddIcon } from '../assets/images/icons/plus.svg';
import Note from '../components/Note';
import NoteForm from '../components/NoteForm';
import { TitleContext } from '../context/TitleContext';
import { generateRandomId } from '../utils';

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [noteForm, setNoteForm] = useState({ isOpen: false });

  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle('All Notes');

    return () => {
      setTitle('');
    };
    // eslint-disable-next-line
  }, []);

  // get stored notes from local storage
  useEffect(() => {
    // we'll parse values because in local storage values are stored in stringify
    const storedNotes = JSON.parse(localStorage.getItem('myNotes'));
    setNotes(storedNotes);
  }, []);

  const handleOpenForm = ({ data, type }) => setNoteForm({ isOpen: true, data: data ?? {}, type });

  const handleCloseForm = () => setNoteForm({ isOpen: false, data: {}, type: 'add' });

  const handleDeleteNote = id => {
    if (notes) {
      const result = notes.filter(note => note._id !== id);
      localStorage.setItem('myNotes', JSON.stringify(result));
      setNotes(result);
    }
  };

  const handleSubmitForm = (values, resetForm) => {
    // condition to check if the values in notes are not empty
    // we can also do it with formik validation for that we've to install yup library

    if (values._id) {
      // if id already exists then we'll update the note
      const noteIndex = notes.findIndex(item => item._id === values._id);
      notes[noteIndex] = { ...values, data: new Date() };

      localStorage.setItem('myNotes', JSON.stringify(notes));
    } else {
      const today = new Date();

      let storeNote = [];

      if (notes?.length) {
        storeNote = [...notes, { ...values, _id: generateRandomId(), date: today }];
      } else {
        storeNote = [{ ...values, _id: generateRandomId(), date: today }];
      }

      if (Object.values(values).some(value => value !== '')) {
        localStorage.setItem('myNotes', JSON.stringify(storeNote));
      }

      setNotes(storeNote);
    }

    // to clear values in formik
    resetForm();

    // to close the form after submit
    handleCloseForm();
  };

  return (
    <>
      {noteForm.isOpen ? (
        <NoteForm note={noteForm.data} type={noteForm.type} handleCloseForm={handleCloseForm} handleSubmitForm={handleSubmitForm} />
      ) : (
        <div className='notes-wrapper'>
          <div className='note-card center'>
            <AddIcon height={40} width={40} color='#b0b0b0' onClick={() => handleOpenForm({ type: 'add' })} />
          </div>

          {notes?.length > 0 ? (
            !noteForm.isOpen &&
            notes?.map(note => (
              <Note
                key={note._id}
                note={note}
                handleOpenForm={() => {
                  handleOpenForm({ data: note, type: 'edit' });
                }}
                handleDeleteNote={() => handleDeleteNote(note._id)}
              />
            ))
          ) : (
            <div className='no-notes'>
              <span>
                No notes added yet. <br /> Click on add button to create a note.
              </span>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
