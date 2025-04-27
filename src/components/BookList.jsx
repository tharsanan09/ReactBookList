function BookList({ books }) {

    const BookList = [
        {title: 'Pride and Prejudice', author: 'Jane Austen', description : 'a novel of manners that explores the complexities of love, marriage, and social expectations within the English landed gentry'},
        {title: 'To Kill a Mockingbird', author: 'Harper Lee', description : 'tells the story of Scout Finch and her brother Jem as they navigate the complexities of racism and prejudice in the small Southern town of Maycomb, Alabama, during the Great Depression'},
        {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', description : 'xplores the theme of the American Dream through the lens of Jay Gatsby, a self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy woman he loved years before'},
        {title: 'Harry Potter series', author: 'J.K. Rowling' , description : 'a seven-book fantasy novel series by J.K. Rowling that follows the life of Harry Potter, a young wizard, and his friends Ron Weasley and Hermione Granger as they navigate Hogwarts School of Witchcraft and Wizardry'},
    ]

  return (

<>

<h1 className="title">Book Lists</h1>

    <div className="book-list">
      {BookList.map((book, index) => (
        <div key={index} className="book">
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <p>{book.description}</p>
        </div>
      ))}
    </div>

</>

  );
}

export default BookList;