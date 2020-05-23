// const { User, Act } = require('isignif-client');
const { User, Act, ActType, Town } = require("../dist/lib/isignif-client");

ActType.all();

const user = new User();
user.email = "advocate@test.isignif.fr";

let token;
let actType;

user
  .getToken("advocate@test.isignif.fr")
  .then((t) => {
    token = t;
    console.log(token)
    return ActType.all(token);
  })
  .then((actTypes) => {
    actType = actTypes.find((a) => a.name === "Acte de saisie-contrefaçon");
    if (actType === undefined) throw new Error("Cannot find act type");

    return Town.search("Lyons la foret");
  })
  .then((towns) => {
    const town = towns[0];
    if (town === undefined) throw new Error("Cannot find town");

    const act = new Act();
    act.actTypeId = Number(actType.id);
    act.reference = "Unit testing";
    return act.save(token).catch((e) => console.error(e));
  })
  .then((act) => console.log(act))
  .catch((e) => console.error(e));
// => eyJhbGci...
