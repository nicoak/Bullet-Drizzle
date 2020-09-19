var gameSettings = {
  playerSpeed: 400,
};

var configuration = {
  width: 480,
  height: 800,
  backgroundColor: 0x000000,
  scene: [Menu, GamePlay],
  pixelArt: false,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
};

var game = new Phaser.Game(configuration);
