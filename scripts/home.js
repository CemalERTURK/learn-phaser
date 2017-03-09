var Game = {};
Game.home = function (game) { };
var platforms;

 function clicked (event) {
        // Only act if paused 
            var btn = this.buttonBackBig.getBounds();
            if ((event.clientX >= btn.x) && (event.clientY >= btn.y) && (event.clientX <= (btn.x + btn.width)) && (event.clientY <= (btn.y + btn.height))) {
            game.state.start('gameplay');
                
        }
    }
Game.home.prototype = {
    preload: function () {
        // this.stage.backgroundColor = "#cd2626";
        game.load.image('game-logo', 'resources/game-logo.png');
        game.load.image('play-icon', 'resources/play-icon.png');
        game.load.image('leaderboard-icon', 'resources/leaderboard-icon.png');
        game.load.image('settings-icon', 'resources/settings-icon.png');
        game.load.image('shop-icon', 'resources/shop-icon.png');
        game.load.image('best-score-text', 'resources/best-score-text.png');
        game.load.image('facebook-full', 'resources/facebook-full.png');
        game.load.image('twitter-full', 'resources/twitter-full.png');
        game.load.image('button-back-big', 'resources/button-back-big.png');
        game.load.image('home-button-back', 'resources/home-button-back.png');


    },


    create: function () {
        this.stage.backgroundColor = "#dddddd";
        game.input.onDown.add(clicked, self);

        platforms = game.add.group();
        buttonBackBig = platforms.create(game.world.centerX - 80, 200, 'button-back-big');
        var gameLogo = platforms.create(game.world.centerX - 160, 30, 'game-logo');
        var homeButtonBack1 = platforms.create(game.world.centerX - 170, 320, 'home-button-back');
        var homeButtonBack2 = platforms.create(game.world.centerX - 40, 320, 'home-button-back');
        var homeButtonBack3 = platforms.create(game.world.centerX + 90, 320, 'home-button-back');
        var bestScore = platforms.create(game.world.centerX - 135, 410, 'best-score-text');
        buttonBackBig.tint = 0x00868b;
        homeButtonBack1.tint = 0xa020f0;
        homeButtonBack2.tint = 0xd2691e;
        homeButtonBack3.tint = 0xcd2626;

        //this.createPlayButton();
        // this.createLeaderboardButton();
        // this.createSettingsdButton();
        // this.createShopButton();
        // this.createFacebookButton();
        // this.createTwitterdButton();
        btnPlay = this.game.add.button(game.world.centerX - 10, 222, 'play-icon', this.buttonPlay, this);
        bntLeaderboard = game.add.button(game.world.centerX - 150, 330, 'leaderboard-icon', this.buttonLeaderboard, this);
        btnSettings = game.add.button(game.world.centerX - 20, 330, 'settings-icon', this.buttonSettings, this);
        btnShop = game.add.button(game.world.centerX + 110, 330, 'shop-icon', this.buttonShop, this);
        btnFacebook = game.add.button(game.world.centerX - 150, 510, 'facebook-full', this.buttonFacebook, this);
        btnTwitter = game.add.button(game.world.centerX + 30, 510, 'twitter-full', this.buttonTwitter, this);


        //  game.add.image(game.world.centerX, game.world.centerY, 'shop-icon').anchor.set(1);


    },
    update: function () { },

    buttonPlay: function () {
        game.state.start('gameplay');

    },

 
    // createPlayButton: function () {
    //     buttonPlay = this.game.add.button(game.world.centerX - 10, 222, 'play-icon', this.actionOnClick, this);
    // },
    buttonLeaderboard: function () { 
        this.stage.backgroundColor = "#000000";

    },
    buttonSettings: function () { 
        this.stage.backgroundColor = "#d11era";

    },
    buttonShop: function () {
        this.stage.backgroundColor = "#afff00";

    },
    buttonFacebook: function () {
        this.stage.backgroundColor = "#c2c200";

    },
    buttonTwitter: function () {
        this.stage.backgroundColor = "#000000";

    },



}