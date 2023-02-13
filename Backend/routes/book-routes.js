const express = require("express");
const router = express.Router();
const Book = require("../model/Book");

const booksController = require("../controllers/books-controller");

router.get("/", booksController.getAllBooks);
/*router.get("/", async (req, res, next) => {
    // This route will provide all the books
    let books;
    try {
        books = await Book.find();
    } catch (err) {
        console.log(err);
    }

    if (!books) {
        return res.status(404).json({message:"No Books Found"});
    }
    return res.status(200).json({books});
});*/

router.post("/", booksController.addBook);
router.get("/:id", booksController.getById)
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);

module.exports = router;