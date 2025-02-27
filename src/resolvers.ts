const listOfAuthors = [
    { id: 1, name: 'Yogesh', book: ['1', '2', '3'] },
    { id: 2, name: 'Golu', book: ['4'] }
];

const listOfBooks = [
    { id: 1, title: "Let'em cook", publishedYear: 2025, authorId: 1 },
    { id: 2, title: "COkk'em cook", publishedYear: 2025, authorId: 1 },
    { id: 3, title: "COkk'em cookinggg", publishedYear: 2025, authorId: 1 },
    { id: 4, title: "cooking'em cook", publishedYear: 2025, authorId: 2 }
];

export const resolvers = {
    Book: {
        author: (parent: any, args: any, context: any, info: any) => {
            return listOfAuthors.find(authorDetail => authorDetail.id === parent.authorId)
        }
    },
    Author: {
        book: (parent: any, args: any, context: any, info: any) => {
            return listOfBooks.filter(bookDetails => Number(bookDetails.authorId) === parent.id)
        }
    },
    Query: {
        authors: () => listOfAuthors,
        books: () => listOfBooks  // Fixed "book" to "books"
    },

    Mutation: {
        addBook: (parent: any, args: any, context:any, info: any) => {
            args = {
                ...args,
                authorId: Number(args.authorId),
                id: listOfBooks.length + 1
            }
            listOfBooks.push(args);
            return args
        }
    }
};

