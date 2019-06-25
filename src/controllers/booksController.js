const mongoose= require('mongoose');
const bookModel = mongoose.model('book');

module.exports = {
  async createNewBook(req, res) {
    const addNewBook = await bookModel.create(req.body);
    return res.json(addNewBook);
  },
  async listBooks(req, res) {
    // const listAllBooks = await bookModel.find();
    const {page = 1} = req.query;
    const listAllBooks = await bookModel.paginate({}, { page, limit: 10 });
    return res.json(listAllBooks);
  },
  async deleteBook(req, res){
    await bookModel.findByIdAndRemove(req.params.id);
    return res.send()
  },
  async updateBook(req, res){
    const updateBookItem = await bookModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
    return res.json(updateBookItem);
  }
}