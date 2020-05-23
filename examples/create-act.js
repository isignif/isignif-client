// const { User, Act, ActType, Town, Signification } = require('isignif-client');
const { User, Act, ActType, Town, Signification } = require("../dist/lib/isignif-client");

const user = new User();
user.email = "advocate@test.isignif.fr";

let token;
let actType;
let act;

user
  .getToken("advocate@test.isignif.fr")
  .then((t) => {
    token = t;
    return ActType.all(token);
  })
  .then((actTypes) => {
    actType = actTypes.find((a) => a.name === "Acte de saisie-contrefaçon");
    if (actType === undefined) throw new Error("Cannot find act type");

    act = new Act();
    act.actTypeId = Number(actType.id);
    act.reference = "Unit testing";
    act.token = token;
    return act.save(token).catch((e) => console.error(e));
  })
  .then(() => {
    return Town.search("Lyons la foret");
  })
  .then((towns) => {
    const town = towns[0];
    if (town === undefined) throw new Error("Cannot find town");

    const signification = new Signification;
    signification.actId = act.id;
    signification.name = "Chez Pépé";
    signification.townId = town.id;
    signification.token = token;
    return signification.save(token);
  })
  .catch((e) => console.error(e))
  .then(() => act.confirm())
  .then(() => console.log('Act was sent'))
// => eyJhbGci...
