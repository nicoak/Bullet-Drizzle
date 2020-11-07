class Menu extends Phaser.Scene {
  constructor() {
    super("gameMenu");
  }

  loadSpritesheet(name, path, frameW, frameH) {
    this.load.spritesheet(
      name,
      "assets/img/" + path,
      { frameWidth: frameW, frameHeight: frameH },
    );
  }

  preload() {
    // Fondo
    this.load.image("gameBackground", "assets/img/bg_dark_purple.png");

    // Enemigos
    this.load.spritesheet(
      "bandit_1",
      "assets/img/spaceShips_001_spritesheet.png",
      {
        frameWidth: 136,
        frameHeight: 100,
      },
    );

    this.load.spritesheet(
      "bandit_2",
      "assets/img/spaceShips_002_spritesheet.png",
      {
        frameWidth: 106,
        frameHeight: 85,
      },
    );

    this.load.spritesheet(
      "bandit_3",
      "assets/img/spaceShips_003_spritesheet.png",
      {
        frameWidth: 100,
        frameHeight: 100,
      },
    );

    this.load.spritesheet(
      "bandit_4",
      "assets/img/spaceShips_007_spritesheet.png",
      {
        frameWidth: 172,
        frameHeight: 155,
      },
    );


/*
    this.load.image("bandit_2", "assets/img/spaceShips_003.png");
    this.load.image("bandit_3", "assets/img/spaceShips_005.png");
    this.load.image("bandit_4", "assets/img/spaceShips_007.png");*/


    // Player
    this.load.spritesheet(
      "player",
      "assets/img/player_spritesheet.png",
      {
        frameWidth: 98,
        frameHeight: 80,
      },
    );

    // Proyectil
    this.load.spritesheet(
      "bullet",
      "assets/img/bullet_spritesheet.png",
      {
        frameWidth: 13,
        frameHeight: 57,
      },
    );

    

    // VFX
    this.loadSpritesheet("explosion", "explosion.png", 16, 16);
    this.loadSpritesheet("power_up", "power-up.png", 16, 16);

    //SFX y Musica
    this.load.audio("shoot_sfx", ["assets/snd/08shoot.ogg", "assets/snd/08shoot.mp3"]);
    this.load.audio("explosion_sfx", ["assets/snd/04enemyexplosion.ogg", "assets/snd/04enemyexplosion.mp3"]);
    this.load.audio("powerup_sfx", ["assets/snd/bulletchange01.ogg", "assets/snd/bulletchange01.mp3"]);
    this.load.audio("game_music", "assets/snd/game_music.ogg");

  }



  create() {
    this.add.text(80, 40, "Main Menu");


    this.scene.start("gamePlay");
  }
}
