import moment from 'moment/moment';
import { ReactComponent as EditIcon } from '../assets/images/icons/edit.svg';
import { ReactComponent as DeleteIcon } from '../assets/images/icons/trash.svg';
import postNoteIcon from '../assets/images/note.png';

const Note = ({ note, handleOpenForm, handleDeleteNote }) => {
  const today = new Date();

  const noteAddedOn = new Date(note.date);

  const isToday = today.toLocaleDateString() === noteAddedOn.toLocaleDateString();

  const isSameYear = today.getFullYear() === noteAddedOn.getFullYear();

  return (
    <>
      <div>
        <div className='note-card center'>
          <img src={postNoteIcon} height={60} alt='' />

          <div className='actions'>
            <EditIcon onClick={handleOpenForm} />
            <DeleteIcon onClick={handleDeleteNote} />
          </div>
        </div>

        <h4 className='mb-0 truncate text-center mt-1 title'>{note.title || 'No Title'}</h4>

        <p className='time text-center my-0'>
          {note.date
            ? isToday
              ? moment(note.date).format('h:mm A')
              : isSameYear
              ? moment(note.date).format('MMM DD')
              : moment(note.data).format('MMM DD, YYYY')
            : '-'}
        </p>
      </div>
    </>
  );
};

export default Note;
