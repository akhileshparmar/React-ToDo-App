import React, { useState } from "react";

const Input = (props) => {
  const [note, newnote] = useState({
    title: "",
    description: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    newnote((prevdata) => {
      return {
        ...prevdata,
        [name]: value,
      };
    });
  };

  const AddNote = () => {
    if (note.title.length === 0) {
      alert("Fill Out Title field");
    } else if (note.description.length === 0) {
      alert("Fill Out Description field");
    } else {
      props.note(note);

      newnote({
        title: "",
        description: "",
      });
    }
  };

  return (
    <>
      <div>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    name="title"
                    onChange={InputEvent}
                    value={note.title}
                    placeholder="Title"
                    className="form-control"
                    id="recipient-name"
                    autoComplete="off"
                    required={true}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="description"
                    onChange={InputEvent}
                    value={note.description}
                    className="form-control"
                    placeholder="Description"
                    id="message-text"
                    required={true}
                  ></textarea>
                </div>
                <div className="form-group text-center">
                  <button
                    type="button"
                    onClick={AddNote}
                    className="btn btn-success"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.5em"
                      height="1.5em"
                      fill="currentColor"
                      class="bi bi-plus"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Input;
