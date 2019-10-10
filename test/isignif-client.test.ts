import { Act, User } from '../src/isignif-client'

jest.setTimeout(30000)

/**
 * Dummy test
 */
describe('User', () => {
  it('get a token', done => {
    const user = new User()
    user.email = 'support@isignif.fr'

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

describe('Act', () => {
  let token: string = ''

  beforeAll(async () => {
    const user = new User()
    user.email = 'support@isignif.fr'
    token = await user.getToken('20462046')
  })

  it('should forbid if bad token', done => {
    Act.all('toto')
      .then(() => done(new Error('Should forbid')))
      .catch(() => done())
  })

  it('should get all and then a specific one', done => {
    Act.all(token)
      .then(acts => {
        if (acts[0] === undefined) {
          return Promise.reject(new Error('Cannot find an act'))
        }

        const act = acts[0]
        return Act.get(act.id as number, token)
      })
      .then(() => done())
      .catch(e => done(e))
  })
})
