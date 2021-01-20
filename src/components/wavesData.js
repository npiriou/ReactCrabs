class Wave {
  constructor(
    waveNumber,
    name,
    resiSh,
    resiPi,
    resiMa,
    accuracy,
    number,
    passive = null,
  ) {
    this.waveNumber = waveNumber;
    this.name = name;
    this.resiSh = resiSh;
    this.resiPi = resiPi;
    this.resiMa = resiMa;
    this.accuracy = accuracy;
    this.number = number;
    this.passive = passive;
  }
}
const WAVES = [];
WAVES.push(new Wave(1, "Crabs", 2, 3, 2, 5, 5));
WAVES.push(new Wave(2, "Wolves", 3, 3, 2, 5, 6));
WAVES.push(new Wave(3, "Vicious Snakes", 5, 4, 3, 3, 4));
WAVES.push(new Wave(4, "Trolls", 4, 4, 5, 4, 8));
WAVES.push(new Wave(5, "Eagles", 6, 2, 5, 4, 7));
WAVES.push(new Wave(6, "Assassins", 5, 6, 4, 2, 6));
WAVES.push(new Wave(7, "Raptors", 3, 3, 3, 3, 9, "INIT"));
WAVES.push(new Wave(8, "Poisoners", 4, 5, 999, 3, 6, "OS"));
WAVES.push(new Wave(9, "Golems", 5, 6, 3, 4, 12));
WAVES.push(new Wave(10, "Boss", 999, 6, 6, 2, 6, "TWICE"));
WAVES.push(new Wave(11, "Centaurs", 3, 5, 4, 4, 15));
WAVES.push(new Wave(12, "Fanatics", 3, 5, 5, 3, 12, "RR1&2"));
WAVES.push(new Wave(13, "Thiefs", 3, 5, 4, 4, 15, "STEAL1"));
WAVES.push(new Wave(14, "Pterodactyl", 6, 2, 4, 2, 10, "INIT"));
WAVES.push(new Wave(15, "Ethereals", 999, 999, 4, 2, 10));
WAVES.push(new Wave(16, "Mammoths", 6, 6, 6, 4, 15));

export default WAVES;
