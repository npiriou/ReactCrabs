class CardObj {
  constructor(
    number,
    tier,
    name,
    HPStart,
    HPCurrent,
    nbShAtt,
    nbPiAtt,
    nbMaAtt,
    passive,
    passiveDescription,
    illustration,
  ) {
    this.number = number;
    this.tier = tier;
    this.name = name;
    this.HPStart = HPStart;
    this.HPCurrent = HPCurrent;
    this.nbShAtt = nbShAtt;
    this.nbPiAtt = nbPiAtt;
    this.nbMaAtt = nbMaAtt;
    this.passive = passive;
    this.passiveDescription = passiveDescription;
    this.illustration = illustration;
  }
}

const CARDS = [];
CARDS.push(
  new CardObj(1, 1, "Spartiate", 1, 1, 1, 1, 0, "", "", "img/spartiate.png"),
);
CARDS.push(new CardObj(0, 5, "Yéti", 5, 5, 1, 1, 1, "", "", "img/yeti.png"));
CARDS.push(
  new CardObj(2, 1, "Grosse Mite", 1, 1, 0, 2, 0, "", "", "img/mite.png"),
);
CARDS.push(
  new CardObj(3, 1, "Croisé", 1, 1, 1, 0, 1, "", "", "img/croise.png"),
);
CARDS.push(new CardObj(4, 1, "Péon", 2, 2, 0, 1, 0, "", "", "img/peon.png"));
CARDS.push(
  new CardObj(5, 1, "Barbare", 1, 1, 2, 0, 0, "", "", "img/barbare.png"),
);

export default CARDS;
