const { nanoid } = require('nanoid');

const addNoteHandler = (request, h) => {
  const { title, tags, body } = request.payload;

  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;
};
const getAllNotesHandler = () => ({
  status: "success",
  data: {
    notes,
  },
});

module.exports = { addNoteHandler, getAllNotesHandler };
