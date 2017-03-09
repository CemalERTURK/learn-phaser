
Game.pause = function (game) { };
        
         var platforms;
        var pauseText;

Game.pause.prototype = {
  preload: function () {
            //game.stage.backgroundColor = "#dddddd";
            game.load.image('pause-window-back', 'resources/pause-window-back.png');
            game.load.image('close-icon', 'resources/close-icon.png');
            game.load.image('button-back-big', 'resources/button-back-big.png');
            game.load.image('home-button-back', 'resources/home-button-back.png');
            game.load.image('restart-icon', 'resources/restart-icon.png');
            game.load.image('home-icon', 'resources/home-icon.png');
            game.load.image('sound-icon', 'resources/sound-icon.png');


        },

       create: function () {
            platforms = game.add.group();
            var pauseWindowBack = platforms.create(0, 0, 'pause-window-back');
            var buttonBackBig2 = platforms.create(game.world.centerX -85,100, 'button-back-big');
            var homeButtonBack1 = platforms.create(game.world.centerX + 20, 220, 'home-button-back');
            var homeButtonBack2 = platforms.create(game.world.centerX - 100, 220, 'home-button-back');

            btnClose = game.add.button(game.world.centerX + 105, 8, 'close-icon', this.buttonClose, this);
            btnRestart = game.add.button(game.world.centerX -22,122, 'restart-icon', this.buttonRestart, this);
            btnHome = game.add.button(game.world.centerX -82,230, 'home-icon', this.buttonHome, this);
            btnSound = game.add.button(game.world.centerX +37,235, 'sound-icon', this.buttonSound, this);


            pauseWindowBack.tint=0xdddddd;
            buttonBackBig2.tint=0x00868b;
            homeButtonBack1.tint=0xa020f0;
            homeButtonBack2.tint=0xcd2626;
            buttonClose.tint=0x3a5fcd;
          //  game.add.image(game.world.centerX, game.world.centerY, 'shop-icon').anchor.set(1);
            pauseText = game.add.text(95, 40, 'Paused', { fontSize: '32px', fill: '#3a5fcd' });


        },
        update:function () { },
             buttonClose:function (){},
             buttonRestart:function (){},
             buttonHome:function (){},
             buttonSound:function (){}


    
}