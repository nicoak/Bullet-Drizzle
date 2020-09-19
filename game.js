class GamePlay extends Phaser.Scene {
  constructor() {
    super("gamePlay");
  }

  create() {
    //this.add.text(80, 40, "DA' GAME", { font: "30px Arial", fill: "blue" });
    this.background = this.add.tileSprite(
      0,
      0,
      configuration.width,
      configuration.height,
      "gameBackground",
    );
    this.background.setOrigin(0, 0);

    this.enemy1 = this.add.image(
      configuration.width / 2 - 150,
      configuration.height / 2,
      "bandit_1",
    );
    this.enemy2 = this.add.image(
      configuration.width / 2 - 50,
      configuration.height / 2,
      "bandit_2",
    );
    this.enemy3 = this.add.image(
      configuration.width / 2 + 50,
      configuration.height / 2,
      "bandit_3",
    );
    this.enemy4 = this.add.image(
      configuration.width / 2 + 150,
      configuration.height / 2,
      "bandit_4",
    );

    this.enemies = [this.enemy1, this.enemy2, this.enemy3, this.enemy4];

    this.enemies.forEach((enemy) => {
      enemy.setScale(0.4);
    });
  }

  moveEnemy(enemy, speed) {
    enemy.y += speed;
    //enemy.x += speed.x;

    if (enemy.y > configuration.height) {
      this.resetEnemyPosition(enemy);
    }
  }

  resetEnemyPosition(enemy) {
    enemy.y = 0;
    var randX = Phaser.Math.Between(20, configuration.width - 20);
    enemy.x = randX;
  }

  backgroundSpeed = 10;
  scrollBackground() {
    this.background.tilePositionY += this.backgroundSpeed;
  }

  update() {
    this.enemies.forEach((enemy) => {
      this.moveEnemy(enemy, 2);
    });

    this.scrollBackground();
  }
}
