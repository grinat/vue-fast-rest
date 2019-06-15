export const URLS = {
  book: 'http://site.com/book',
  books: 'http://site.com/books',
  createBook: 'http://site.com/book-create',
  removeBook: 'http://site.com/book-remove',
  updateBook: 'http://site.com/book-update'
}

export function createFixtures() {
  return {
    [URLS.books]: {
      // axios Response Schema
      // `data` is the response that was provided by the server
      data: {
        data: [
          {id: 1, title: 'I Love Dad with The Very Hungry Caterpillar'},
          {id: 2, title: 'Arduino Projects: The Complete Beginner\'s Guide'}
        ],
        _meta: {}
      },
      status: 200,
      headers: {},
      config: {},
      request: {}
    },
    [URLS.book]: {
      data: {
        id: 20, title: 'Just Me and My Dad'
      }
    },
    [URLS.createBook]: {
      data: {}
    },
    [URLS.removeBook]: {
      data: {}
    },
    [URLS.updateBook]: {
      data: {}
    }
  }
}
