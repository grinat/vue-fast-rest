const URLS = {
  book: '/book',
  books: '/books',
  createBook: '/book-create',
  removeBook: '/book-remove',
  updateBook: '/book-update'
}

function createFixtures() {
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
      request: {},
      method: 'get'
    },
    [URLS.book]: {
      data: {
        id: 20, title: 'Just Me and My Dad'
      },
      method: 'get'
    },
    [URLS.createBook]: {
      data: {},
      method: 'post'
    },
    [URLS.removeBook]: {
      data: {},
      method: 'delete'
    },
    [URLS.updateBook]: {
      data: {},
      method: 'patch'
    }
  }
}

module.exports.URLS = URLS
module.exports.createFixtures = createFixtures
