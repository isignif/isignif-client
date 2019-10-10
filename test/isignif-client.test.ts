import { User } from '../src/isignif-client'

/**
 * Dummy test
 */
describe('User', () => {
  it('get a token', done => {
    const user = new User()
    user.email = 'support@isignif.fr'
    user.getToken('20462046')

    user
      .getToken('20462046')
      .then(token => {
        expect(token).toBeTruthy()
        done()
      })
      .catch(e => {
        done(e)
      })
  })
})
