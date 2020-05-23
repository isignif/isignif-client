// const { User, Act } = require('isignif-client');
const { User, Act } = require("../dist/lib/isignif-client");

const user = new User();
user.email = "advocate@test.isignif.fr";

user
  .getToken("advocate@test.isignif.fr")
  .then((token) => Act.all(token))
  .then((acts) => console.log(acts));
// => eyJhbGci...
