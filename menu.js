class Menu extends Phaser.Scene {
  constructor() {
    super("gameMenu");
  }

  preload() {
    this.load.image("gameBackground", "assets/img/bg_dark_purple.png");
    this.load.spritesheet(
      "bandit_1",
      "assets/img/spaceShips_001_spritesheet.png",
      {
        frameWidth: 136,
        frameHeight: 100,
      },
    );
    this.load.image("bandit_2", "assets/img/spaceShips_003.png");
    this.load.image("bandit_3", "assets/img/spaceShips_005.png");
    this.load.image("bandit_4", "assets/img/spaceShips_007.png");

    this.load.spritesheet(
      "explosion",
      "assets/img/explosion.png",
      { frameWidth: 16, frameHeight: 16 },
    );
  }

  create() {
    this.add.text(80, 40, "Main Menu");
    this.scene.start("gamePlay");
  }
}
