import NoteModel from './NoteModel'

interface BookModel {
  _id: string,
  name: string,
  describe: string,
  notes: Array<NoteModel>,
  createdAt: string,
  updatedAt: string
}

export default BookModel
