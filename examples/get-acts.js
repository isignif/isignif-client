// const { User, Act } = require('isignif-client');
const { User, Act, configuration } = require("../dist/lib/isignif-client");
configuration.apiUrl = "https://test.isignif.fr/api/v1";

const user = new User();
user.email = "advocate@test.isignif.fr";

user
  .getToken("advocate@test.isignif.fr")
  .then((token) => Act.all(token))
  .then((acts) => console.log(acts));
// => eyJhbGci...
