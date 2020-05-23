// const { User } = require('isignif-client');
const { User } = require("../dist/lib/isignif-client");

const user = new User();
user.email = "advocate@test.isignif.fr";

user.getToken("advocate@test.isignif.fr").then((token) => console.log(token));
// => eyJhbGci...
