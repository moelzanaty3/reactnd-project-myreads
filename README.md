# My Reads

---

## Project Purpose:

This project built for the Udacity React Nanodegree Program. 
    The purpose of the project is to demonstrate understanding of the basic structure and operation of a React-based app.

## How to Load the App

The project uses Node.js and the Create-React-App starter. If you do not have Node >= 6.x installed, you can download it here: [Node.js](https://nodejs.org/en/)

Once Node is installed, navigate to the directory where you want to store the app

```
git clone https://github.com/mohammedelzanaty/reactnd-project-myreads.git
cd reactnd-project-myreads
npm install
npm start
```

## Documentation
### What's included
Within the download you'll find the following directories and files:
```
|-- package.json
`-- src
    |-- App.js
    |-- App.test.js
    |-- Component
    |   |-- Autocomplete
    |   |   |-- Autocomplete.js
    |   |   |-- AutocompleteItem.js
    |   |   `-- SearchInput.js    
    |   |-- BookShelf
    |   |   |-- BookDetailButton.js
    |   |   |-- BookShelfContainer.js
    |   |   `-- BookShelfItem.js
    |   |-- MyBookList
    |   |   `-- MyBookList.js
    |   |-- Notification
    |   |   `-- Info.js
    |   `-- Search
    |       `-- SearchBooks.js
    |-- fire.js 
    |-- icons
    |-- index.css
    |-- index.js
    |-- style
    |   `-- App.css
    `-- utils
        |-- BooksAPI.js
        |-- ClickOutsideBehavior.js
        |-- Common.js
        `-- SearchKeywords.js

```

## How to Use the App

- Books are sorted into three categories: Currently Reading, Want to Read and Read
- To change a book's category or remove a book from the list, click on the green button on the book cover
- To add new books, click on the green + button at the bottom of the page.
  Enter an author's name or subject. Up to 20 items will be returned.

_Note: The backend API is limited to a fixed set of [search terms](#search-terms) -- see below for valid search options_


### Resources and Documentation:

- [Create-react-app Documentation](https://github.com/facebookincubator/create-react-app)
- [React Router Documentation](http://knowbody.github.io/react-router-docs/)
- [React Training/React Router](https://reacttraining.com/react-router/web/api/BrowserRouter)
- [React API](https://facebook.github.io/react/docs/react-api.html)

### Udacity Resources:

- [Project starter template](https://github.com/udacity/reactnd-project-myreads-starter)
- [Project Rubric](https://review.udacity.com/#!/rubrics/918/view)
- [Udacity CSS Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/css.html)
- [Udacity HTML Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/index.html)
- [Udacity JavaScript Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)

#### Search Terms

'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'History', 'History', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Program Javascript', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'

_This project is licensed under the terms of the MIT license._



## Copyright and License
A Project [starter code](https://github.com/udacity/reactnd-project-myreads-starter) contributed by Udacity.
