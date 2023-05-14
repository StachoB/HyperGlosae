import { useState, useEffect } from 'react';
import { Trash3 } from 'react-bootstrap-icons';

function DeleteText({id, text, rubric, backend}) {

  const [editedDocument, setEditedDocument] = useState({
    text: (rubric) ? `{${rubric}} ${text}` : text
  });

  let originalText = text;
  useEffect(() => {
    backend.getDocument(id)
      .then((x) => {
        setEditedDocument(x);
      });
  }, [editedDocument._id]);

  useEffect(() => {
    setEditedDocument({ ...editedDocument, text: '' });
  }, [editedDocument.text]);

  let handleClick = () => {
    backend.putDocument(editedDocument);
    javascript:location.reload();
  };

  if (originalText != null && originalText != '') {
    return (
      <>
        <button type="button" className="btn" onClick={handleClick}>
          <Trash3 title="Delete this reference" />
        </button>
      </>
    );
  }
}
export default DeleteText;