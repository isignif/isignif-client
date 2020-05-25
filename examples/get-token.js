// const { User } = require('isignif-client');
const { User, configuration } = require("../dist/lib/isignif-client");
configuration.apiUrl = "https://test.isignif.fr/api/v1";

const user = new User();
user.email = "advocate@test.isignif.fr";

user.getToken("advocate@test.isignif.fr").then((token) => console.log(token));
// => eyJhbGci...
