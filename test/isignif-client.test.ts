import { Act, User, ActType, Signification, Town, Message } from '../src/isignif-client'

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

describe('Town', () => {
  it('search a town', done => {
    Town.search('Lyon')
      .then(() => done())
      .catch(e => done(e))
  })
})

describe('with token', () => {
  let token: string = ''

  beforeAll(async () => {
    const user = new User()
    user.email = 'support@isignif.fr'
    token = await user.getToken('20462046')
  })

  describe('ActType', () => {
    it('should get all act types', done => {
      ActType.all(token)
        .then(() => done())
        .catch(e => done(e))
    })
  })

  describe('Act / signification', () => {
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

    it('should create an act', async () => {
      const actTypes = await ActType.all(token)
      const actType = actTypes.find(a => a.name === 'Acte de saisie-contrefaçon')
      if (actType === undefined) throw new Error('Cannot find act type')

      const towns = await Town.search('Lyons la foret')
      const town = towns[0]
      if (town === undefined) throw new Error('Cannot find town')

      const act = new Act()
      act.actTypeId = Number(actType.id)
      act.reference = 'Unit testing'
      await act.save(token).catch(e => {
        throw e
      })

      const signification = new Signification()
      signification.actId = act.id
      signification.name = 'Chez Pépé'
      signification.townId = town.id
      await signification.save(token).catch(e => {
        throw e
      })

      await act.confirm(token).catch(e => {
        throw e
      })

      // write a message on signification

      const message = new Message()
      message.actId = act.id
      message.significationId = signification.id
      message.content = 'bonjour le monde'
      await message.save(token).catch(e => {
        throw e
      })

      // get all signification messages

      const messages = await Message.all(act.id as number, signification.id as number, token).catch(
        e => {
          throw e
        }
      )

      expect(messages).toHaveLength(1)
    })
  })

  // describe('Signification', () => {
  //   let token: string = ''
  //   let act: Act = new Act()

  //   beforeAll(async () => {
  //     const acts = await Act.all(token);

  //     if (acts[0] === undefined) {
  //       throw new Error('Cannot find an act')
  //     }

  //     act = acts[0]
  //   });

  // });
})
