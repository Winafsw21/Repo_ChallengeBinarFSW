// Declare semua Pemain Game
var cBatu = document.getElementById("batuCom");
var cKertas = document.getElementById("kertasCom");
var cGunting = document.getElementById("guntingCom");
var com = document.getElementById("com");
var player = document.getElementById("player");
const pBatu = document.querySelector(".batuPlayer");
const pKertas = document.querySelector(".kertasPlayer");
const pGunting = document.querySelector(".guntingPlayer");

// Pilihan Komputer
function getCom() {
  const com = Math.random();
  console.log(com);
  // logika komputer
  if (com < 0.34) {
    const cBatu = document.querySelector(".batuCom");
    cBatu.style.backgroundColor = "gray";
    // cBatu.style.width = "100px";
    // cBatu.style.height = "100px";
    const pCom = cBatu.className;
    return "pilihan com :", pCom;
  }
  if (com >= 0.34 && com < 0.67) {
    const cKertas = document.querySelector(".kertasCom");
    cKertas.style.backgroundColor = "gray";
    // cKertas.style.width = "100px";
    // cKertas.style.height = "100px";
    const pCom = cKertas.className;
    return "pilihan com :", pCom;
  }
  if (com >= 0.67) {
    const cGunting = document.querySelector(".guntingCom");
    cGunting.style.backgroundColor = "gray";
    // cGunting.style.width = "100px";
    // cGunting.style.height = "100px";
    const pCom = cGunting.className;
    return "pilihan com :", pCom;
  }
}
// Akhir Pilihan Komputer
const player1 = {
  PlayerBatu: pBatu,
  PlayerKertas: pKertas,
  PlayerGunting: pGunting,
};
const player2 = {
  ComBatu: cBatu,
  ComKertas: cKertas,
  ComGunting: cGunting,
};

class game {
  constructor(props) {
    let { player, com } = props;
    this.player = player1;
    this.com = player2;
  }

  introduce() {
    console.log("Hi, ayo Bermain Suwit Jepang. Saya Memilih", this.constructor.player);
  }

  work() {
    console.log(this.constructor.player, "Melawan", this.constructor.com, "Hasilnya adalah");
  }
}

let game1 = new game({
  player: pBatu,
  com: cBatu,
});

let game2 = new game({
  player: pBatu,
  com: cKertas,
});

let game3 = new game({
  player: pBatu,
  com: cGunting,
});

let game4 = new game({
  player: pKertas,
  com: cKertas,
});

let game5 = new game({
  player: pKertas,
  com: cBatu,
});

let game6 = new game({
  player: pKertas,
  com: cGunting,
});

let game7 = new game({
  player: pGunting,
  com: cGunting,
});

let game8 = new game({
  player: pGunting,
  com: cKertas,
});
let game9 = new game({
  player: pGunting,
  com: cBatu,
});

// KONDISI DRAW
const draw = (hasil) =>
  class extends hasil {
    seri() {
      const info = document.querySelector(".info");
      return document.write("<h1> DRAW</h1>");
    }
  };

// KONDISI COM WIN
const comWin = (hasil) =>
  class extends hasil {
    ComputerMenang() {
      const info = document.querySelector(".info");
      return document.write("<h1> COM WIN</h1>");
    }
  };

// KONDISI PLAYER WIN
const playerWin = (hasil) =>
  class extends hasil {
    PemainMenang() {
      console.log("PLAYER MENANG");
      const info = document.querySelector(".info");
      return document.write("<h1> PLAYER WIN</h1>");
    }
  };

class hasil1 extends draw(game) {
  constructor(props) {
    super(props);
    this.result = props.result;
  }
  work() {
    super.work(); // dari  Class game
    super.seri(); // dari Class draw
  }
}

class hasil2 extends comWin(game) {
  constructor(props) {
    super(props);
    this.result = props.result;
  }
  work() {
    super.work(); // dari  Class game
    super.ComputerMenang(); // dari Class ComWin
  }
}

class hasil3 extends playerWin(game) {
  constructor(props) {
    super(props);
    this.result = props.result;
  }
  work() {
    super.work(); // dari  Class game
    super.PemainMenang(); // dari Class PlayerWin
  }
}

// Instantiate draw pada class hasil
const kondisi11 = new hasil1({
  player: pBatu,
  com: cBatu,
  result: "SERI",
});

const kondisi12 = new hasil1({
  player: pKertas.className,
  com: cKertas.className,
  result: "SERI",
});

const kondisi13 = new hasil1({
  player: pGunting.className,
  com: cGunting.className,
  result: "SERI",
});

// Instantiate comWin pada class hasil
const kondisi21 = new hasil2({
  player: pGunting.className,
  com: cBatu.className,
  result: "Computer Menang",
});

const kondisi22 = new hasil2({
  player: pBatu,
  com: cKertas,
  result: "Computer Menang",
});

const kondisi23 = new hasil2({
  player: pKertas.className,
  com: cGunting.className,
  result: "Computer Menang",
});

// Instantiate PlayerWin pada class hasil
const kondisi31 = new hasil3({
  player: pGunting.className,
  com: cKertas.className,
  result: "Pemain Menang",
});

const kondisi32 = new hasil3({
  player: pBatu,
  com: cGunting,
  result: "Pemain Menang",
});

const kondisi33 = new hasil3({
  player: pKertas.className,
  com: cBatu.className,
  result: "Pemain Menang",
});

function HasilPermainan(player, com) {
  // Hasil Draw
  if (player == "batuPlayer" && com == "batuCom") {
    return "   DRAW    ";
  }
  if (player == "kertasPlayer" && com == "kertasCom") {
    return "   DRAW    ";
  }
  if (player == "guntingPlayer" && com == "guntingCom") {
    return "   DRAW    ";
  }

  // Hasil Com Win
  if (player == "guntingPlayer" && com == "batuCom") {
    return "COM WIN";
  }
  if (player == "batuPlayer" && com == "kertasCom") {
    return "COM WIN";
  }
  if (player == "kertasPlayer" && com == "guntingCom") {
    return "COM WIN";
  }

  // Hasil Player Win
  if (player == "batuPlayer" && com == "guntingCom") {
    return "PLAYER WIN";
  }
  if (player == "kertasPlayer" && com == "batuCom") {
    return "PLAYER WIN";
  }
  if (player == "guntingPlayer" && com == "kertasCom") {
    return "PLAYER WIN";
  }
}

// Aksi Player
pBatu.addEventListener("click", function () {
  pBatu.style.backgroundColor = "gray";
  // pBatu.style.width = "120px";
  // pBatu.style.height = "100px";
  const pilihComputer = getCom();
  const pilihPlayer = pBatu.className;
  console.log(" Com :" + pilihComputer);
  console.log("Player :" + pilihPlayer);
  const point = HasilPermainan(pilihPlayer, pilihComputer);
  const info = document.querySelector(".vs");
  info.innerHTML = point;
});

pKertas.addEventListener("click", function () {
  pKertas.style.backgroundColor = "gray";
  // pKertas.style.width = "120px";
  // pKertas.style.height = "100px";
  console.log("pilihan human", pKertas.className);
  const pilihComputer = getCom();
  const pilihPlayer = pKertas.className;
  console.log(" Com :" + pilihComputer);
  console.log("Player :" + pilihPlayer);
  const point = HasilPermainan(pilihPlayer, pilihComputer);
  const info = document.querySelector(".vs");
  info.innerHTML = point;
});

pGunting.addEventListener("click", function () {
  pGunting.style.backgroundColor = "gray";
  // pGunting.style.width = "120px";
  // pGunting.style.height = "100px";
  const pilihComputer = getCom();
  const pilihPlayer = pGunting.className;
  console.log(" Com :" + pilihComputer);
  console.log("Player :" + pilihPlayer);
  const point = HasilPermainan(pilihPlayer, pilihComputer);
  const info = document.querySelector(".vs");
  info.style.size = "45px";
  info.innerHTML = point;
});
