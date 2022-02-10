import React, { useContext, useEffect, useRef, useState } from 'react';
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';
import AddNote from '../components/AddNote'



const Notes = () => {
    const context = useContext(noteContext);
    const { notes, getNotes , editNote} = context;

    useEffect(() => {
        //eslint-disable-next-line
        getNotes()

    }, []);
    const ref = useRef(null);
    const refClose = useRef(null);
    const [note, setNote] = useState({ id: '', etitle: "", edescription: "", etag: "" });


    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id : currentNote._id , etitle: currentNote.title , edescription: currentNote.description , etag: currentNote.tag});
    }
    const handleAddNote = (e) => {
        ref.current.click();
        editNote(note.id , note.etitle, note.edescription, note.etag);
       
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }


    return <div className='row my-3'>
        <AddNote />

        <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form >
                            <div className="form-group" className='my-3'>
                                <input className="form-control" id="etitle" value={note.etitle} name='etitle' onChange={onChange} placeholder="Title" />

                            <div className="form-group" className='my-3'>
                                <textarea className="form-control" id="edescription" value={note.edescription}  name='edescription' onChange={onChange} placeholder='Note???' rows="3"></textarea>
                            </div>
                            
                            </div>
                            <div className="form-group" className='my-3'>
                                <input className="form-control" id="etag" name='etag' value={note.etag} onChange={onChange} placeholder="Tag" />
                            </div>
                            

                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button ref={refClose} onClick={handleAddNote} disabled={note.etitle.length<5 || note.edescription.length<5}  type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        <h2>Your Notes</h2>
        {notes.map((note) => {
            return <Noteitem key={note._id} updateNote={updateNote} note={note} />
        })}
    </div>
}

export default Notes
