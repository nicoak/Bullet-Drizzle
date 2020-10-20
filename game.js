class GamePlay extends Phaser.Scene {
  constructor() {
    super("gamePlay");
  }

  createAnim(animName, objectName, frameR, repeat, hide) {
    this.anims.create({
      key: animName,
      frames: this.anims.generateFrameNumbers(objectName),
      frameRate: frameR,
      repeat: repeat,
      hideOnComplete: hide,
    });
  }

  setRandomVelAndBounce(objectName) {
    var randVel = Phaser.Math.Between(100, 300);
    var randBounce = Phaser.Math.Between(1, 1.01);
    objectName.setVelocity(randVel, randVel);
    objectName.setBounce(randBounce);
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

    this.enemy1 = this.add.sprite(
      configuration.width / 2 - 150,
      configuration.height / 2,
      "bandit_1",
    );

    this.createAnim("enemy1_anim", "bandit_1", 10, -1, false);

    this.enemy1.play("enemy1_anim");

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

    this.createAnim("explode", "explosion", 20, 0, true);
    this.createAnim("power_up", "power_up", 20, -1, false);

    this.powerUps = this.physics.add.group();
    this.player = this.physics.add.image(
      configuration.width / 2 - 8,
      configuration.height - 64,
      "player",
    );

    this.player.setScale(0.6);
    this.player.setCollideWorldBounds(true);
    this.spacebar = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE,
    );

    this.cursorKeys = this.input.keyboard.createCursorKeys();

    var maxPowerUps = 5;
    for (let index = 0; index < maxPowerUps; index++) {
      var powerUp = this.physics.add.sprite(16, 16, "power_up");
      this.powerUps.add(powerUp);
      powerUp.setRandomPosition(
        0,
        0,
        configuration.width,
        configuration.height,
      );
      powerUp.setScale(1.5);
      //powerUp.setVelocity(100, 100);
      powerUp.setCollideWorldBounds(true);
      //powerUp.setBounce(1);
      this.setRandomVelAndBounce(powerUp);
    }

    this.enemy1.setInteractive();

    this.input.on("gameobjectdown", this.destroyEnemy, this);
  }

  destroyEnemy(pointer, gameObject) {
    gameObject.setScale(5);
    gameObject.setTexture("explosion");
    gameObject.play("explode");
  }

  moveEnemy(enemy, speed) {
    enemy.y += speed;
    //enemy.x += speed.x;

    if (enemy.y > configuration.height) {
      this.resetEnemyPosition(enemy);
    }
  }

  margin = 30;
  resetEnemyPosition(enemy) {
    enemy.y = 0;
    var randX = Phaser.Math.Between(
      this.margin,
      configuration.width - this.margin,
    );
    enemy.x = randX;
  }

  backgroundSpeed = 10;
  scrollBackground() {
    this.background.tilePositionY += this.backgroundSpeed;
  }

  movePlayerManager() {
    if (this.cursorKeys.left.isDown) {
      this.player.setVelocityX(-gameSettings.playerSpeed);
    } else if (this.cursorKeys.right.isDown) {
      this.player.setVelocityX(gameSettings.playerSpeed);
    } else {
      this.player.setVelocityX(0);
    }

    if (this.cursorKeys.up.isDown) {
      this.player.setVelocityY(-gameSettings.playerSpeed);
    } else if (this.cursorKeys.down.isDown) {
      this.player.setVelocityY(gameSettings.playerSpeed);
    } else {
      this.player.setVelocityY(0);
    }
  }

  update() {
    this.enemies.forEach((enemy) => {
      this.moveEnemy(enemy, 2);
    });

    this.scrollBackground();

    this.movePlayerManager();
    if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
      console.log("Fire");
    }
  }
}
