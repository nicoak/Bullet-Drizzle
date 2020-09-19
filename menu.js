class Menu extends Phaser.Scene {
  constructor() {
    super("gameMenu");
  }

  preload() {
    this.load.image("gameBackground", "assets/img/bg_dark_purple.png");
    this.load.image("bandit_1", "assets/img/spaceShips_001.png");
    this.load.image("bandit_2", "assets/img/spaceShips_003.png");
    this.load.image("bandit_3", "assets/img/spaceShips_005.png");
    this.load.image("bandit_4", "assets/img/spaceShips_007.png");
  }

  create() {
    this.add.text(80, 40, "Main Menu");
    this.scene.start("gamePlay");
  }
}
