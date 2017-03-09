
Game.gameover = function (game) { };
          
Game.gameover.prototype = {
  preload: function () {
            game.load.image('facebook-full', 'resources/facebook-full.png');
            game.load.image('shop-icon', 'resources/shop-icon.png');
            game.load.image('home-button-back', 'resources/home-button-back.png');
            game.load.image('restart-icon', 'resources/restart-icon.png');
            game.load.image('home-icon', 'resources/home-icon.png');
            game.load.image('twitter-full', 'resources/twitter-full.png');

        },

       create: function () {
           platforms = game.add.group();
            // var pauseWindowBack = platforms.create(0, 0, 'pause-window-back');
            // var buttonBackBig2 = platforms.create(game.world.centerX - 85, 100, 'button-back-big');
            var homeButtonBack1 = platforms.create(game.world.centerX - 160, 440, 'home-button-back');
            var homeButtonBack2 = platforms.create(game.world.centerX - 48, 425, 'home-button-back');
            var homeButtonBack3 = platforms.create(game.world.centerX + 80, 440, 'home-button-back');

            buttonFacebook = game.add.button(game.world.centerX - 150, 300, 'facebook-full', facebookButton, this);
            buttonTwitter = game.add.button(game.world.centerX + 30, 300, 'twitter-full', twitterButton, this);
            buttonHome = game.add.button(game.world.centerX - 140, 450, 'home-icon', homeButton, this);            
            buttonRestart = game.add.button(game.world.centerX - 25, 445, 'restart-icon', restartButton, this);
            buttonShop = game.add.button(game.world.centerX + 100, 450, 'shop-icon', shopButton, this);

            homeButtonBack2.scale.setTo(1.2, 1.25);
            // buttonClose = game.add.button(game.world.centerX + 105, 8, 'close-icon', closeButton, this);
            // buttonSound = game.add.button(game.world.centerX + 37, 235, 'sound-icon', soundButton, this);
            // pauseWindowBack.tint = 0xdddddd;
            homeButtonBack2.tint = 0x00868b; //yeşil
            homeButtonBack1.tint = 0xa020f0; //mor
            homeButtonBack3.tint = 0xcd2626;  //kırmızı
            // buttonClose.tint = 0x3a5fcd; //mavi
            // game.add.image(game.world.centerX, game.world.centerY, 'shop-icon').anchor.set(1);
            var gameOwerStyle = { font: "65px Arial", fill: "#3a5fcd", align: "center" };
            var yourScoreStyle = { font: "40px Arial", fill: "#00868b", align: "center" };
            var yourScore2Style = { font: "85px Arial", fill: "#00868b", align: "center" };
            gameOwerText = game.add.text(42, 70, 'Awesome!!', gameOwerStyle);
            yourScoreText = game.add.text(50, 200, 'Your\nScore', yourScoreStyle);
            yourScoreText2 = game.add.text(200, 200, yourScore, yourScore2Style);


        },
        update: function () { },
       facebookButton: function () { },
       restartButton: function () { },
       homeButton: function () { },
       twitterButton: function () { },
       shopButton: function () { }



    
}