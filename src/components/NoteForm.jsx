import { Field, Form, Formik } from 'formik';
import { useMemo } from 'react';

const NoteForm = ({ note, type, handleCloseForm, handleSubmitForm }) => {
  const initialValues = useMemo(() => {
    return {
      title: note?.title ?? '',
      desc: note?.desc ?? '',
    };
    // whenever the note update or value change then values will be stores in initial values
  }, [note]);

  return (
    <>
      <div className='form'>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { resetForm }) => handleSubmitForm({ ...values, _id: note?._id ?? '' }, resetForm)}
        >
          <Form>
            <Field name='title' type='text' placeholder='Title' />

            <Field component='textarea' name='desc' placeholder='Description' />

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button className='cursor-pointer secondary' onClick={handleCloseForm}>
                Cancel
              </button>

              <button type='submit' className='cursor-pointer primary'>
                {type === 'edit' ? 'Update' : 'Add'}
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default NoteForm;
