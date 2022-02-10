import React, {useContext, useState} from 'react';
import noteContext from '../context/notes/noteContext';


const AddNote = () => {
    const context = useContext(noteContext);
    const { addnote } = context;
    const [note, setNote] = useState({title :"", description : "", tag: ""});

    const handleAddNote = (e) =>{
        e.preventDefault();
        addnote(note.title, note.description, note.tag);
        setNote({title :"", description : "", tag: ""})
    }

    const onChange= (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }
    return <div>
        <h2>Add a Note</h2>

        <form >
            <div className="form-group" className='my-3'>
                <input className="form-control" id="title" name='title' value={note.title} onChange={onChange} placeholder="Title" />
            </div>

            <div className="form-group" className='my-3'>
                <textarea className="form-control" id="description" value={note.description} name='description' onChange={onChange} placeholder='Note???' rows="3"></textarea>
            </div>
            <div className="form-group" className='my-3'>
                <input className="form-control" id="tag"  name='tag' value={note.tag} onChange={onChange} placeholder="Tag" />
            </div>
            <button type="button" disabled={note.title.length<5 || note.description.length<5} onClick={handleAddNote} className="btn btn-primary my-2">Add Note</button>

        </form>
    </div>;
};

export default AddNote;
