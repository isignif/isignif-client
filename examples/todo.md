
### Créer un acte

~~~ts
import { Act, ActType, Town, Signification } from 'isignif-client';


const signification = new Signification
signification.actId = act.id
signification.name = "Chez Pépé"
signification.townId = town.id
await signification.save(token).catch(e => console.error(e))
~~~

Il suffit ensuite de le confirmer. Les huissiers recevront un mail à ce moment là

~~~ts
await act.confirm()
~~~

### Récupérer et créer un message

Créer un message

~~~ts
const message = new Message()
message.actId = act.id
message.significationId = signification.id
message.content = 'bonjour le monde'
await message.save(token).catch(e => {
    throw e
})
~~~

Récupérer les messages

TODO: ajoutes d'autres exemple