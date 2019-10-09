# iSignif client

**en cours de développment**

Client javascript pour utiliser l'API de iSignif. 

> Cette librairie est utilisée pour l'application Web [Vue.JS de isignif](https://github.com/isignif/vue-app/)

## Instalation

TODO: publier sur NPM

## Exemple

Obetnir un jeton JWT pour un utilisateur:

~~~ts
const user = new User();
user.email = 'test@isignif.fr';

const token = await user.getToken('mon_password');
// => eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
~~~

On peu ensuite récupérer les actes de cet utilisateur facilement

~~~ts
const acts = await Act.all(token)
~~~

TODO: ajoutes d'autres exemple
