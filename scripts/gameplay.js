Game.gameplay = function (game) { };

var counter = 0;
var text = 0;
var platforms;
var scoreText;
var score = 0;
var sprites = [];
var i = 1;
var imageList = ['segment-2', 'segment-3', 'segment-4', 'segment-5', 'segment-6'];
var enemy;
var tmp = 0;
var btnPause;
var pauseWindowBack;
var pauseText;
var graphics;
var genel;
// And finally the method that handels the pause menu
function unpause(event) {
    // Only act if paused
    if (game.paused) {
        var btn = btnClose.getBounds();
        if ((event.clientX >= btn.x) && (event.clientY >= btn.y) && (event.clientX <= (btn.x + btn.width)) && (event.clientY <= (btn.y + btn.height))) {
            pauseText.destroy();
            platforms.destroy();
            game.paused = false;
        }
        var a = this.buttonBackBig2.getBounds();
        if ((event.clientX >= a.x) && (event.clientY >= a.y) && (event.clientX <= (a.x + a.width)) && (event.clientY <= (a.y + a.height))) {
            // pauseText.destroy();
            // platforms.destroy();
            game.paused = false;
            game.state.start('gameplay');

        }
        var a = this.homeButtonBack.getBounds();
        if ((event.clientX >= a.x) && (event.clientY >= a.y) && (event.clientX <= (a.x + a.width)) && (event.clientY <= (a.y + a.height))) {
            game.paused = false;
            game.state.start('home');

        }
        var a = this.soundButtonBack.getBounds();
        if ((event.clientX >= a.x) && (event.clientY >= a.y) && (event.clientX <= (a.x + a.width)) && (event.clientY <= (a.y + a.height))) {
            // pauseText.destroy();
            // platforms.destroy();
            // game.paused = false;
            alert('3');
        }

    }
}
// function hareket(event) {
//     sprin.angle = sprin.angle - 100;
//     // threshold = 123 //some magical number
//     // if (Math.abs(event.clientX) < Math.abs(event.clientY)) {
//     //     delta = clientY;
//     //     if (event.clientX < 400 / 2) delta = -delta;
//     //     k = (delta / 600) * threshold;
//     // } 
//     // else {
//     //     delta = event.clientX;
//     //     if (event.clientY > 600 / 2) delta = -delta
//     //     k = (delta / 400) * threshold //
//     // }
//     // currentAngle += k * deltaTime    //delta time is elapsed time has passed since previous frame
//     // sprin.angel=currentAngle;

// }

Game.gameplay.prototype = {
    update: function () {

    },

    preload: function () {
        game.stage.backgroundColor = "#dddddd";
        game.load.image('pause-btn-white', 'resources/pause-btn-white.png');
        game.load.image('circle-enemy', 'resources/circle-enemy.png');
        game.load.image('segment-2', 'resources/segment-2.png');
        game.load.image('segment-3', 'resources/segment-3.png');
        game.load.image('segment-4', 'resources/segment-4.png');
        game.load.image('segment-5', 'resources/segment-5.png');
        game.load.image('segment-6', 'resources/segment-6.png');

        game.load.image('pause-window-back', 'resources/pause-window-back.png');
        game.load.image('close-icon', 'resources/close-icon.png');
        game.load.image('button-back-big', 'resources/button-back-big.png');
        game.load.image('home-button-back', 'resources/home-button-back.png');
        game.load.image('restart-icon', 'resources/restart-icon.png');
        game.load.image('home-icon', 'resources/home-icon.png');
        game.load.image('sound-icon', 'resources/sound-icon.png');


    },


    create: function () {
        this.stage.backgroundColor = '#dddddd';
        game.input.onDown.add(unpause, self);
       // game.input.onDown.add(hareket, self);
        platforms = game.add.group();
        //game.renderer.renderSession.roundPixels = true;
        //CreateEnemy(i);


        //  Create a Circle
        circle = new Phaser.Circle(game.world.centerX, game.world.centerY, 68);
        circle2 = new Phaser.Circle(game.world.centerX, game.world.centerY, 100);


        //  And display our circle on the top
        var graphics = game.add.graphics(0, 0);
        graphics.lineStyle(1, 0x000000, 1);
        // graphics.drawCircle(circle.x, circle.y, circle.diameter);
        // graphics.lineStyle(20, 0xffffff, 1);       
        // graphics.drawCircle(circle2.x, circle2.y, circle.diameter);

        p = new Phaser.Point();

        this.CreateLevels(i);
        this.CreateEnemy()
        //sprites[0].destroy();

        btnPause = game.add.button(340, 540, 'pause-btn-white', this.buttonPause, this);
        btnPause2 = game.add.button(100, 540, 'circle-enemy', this.buttonPause2, this);
        btnPause.tint = 0x3a5fcd;
        //  game.physics.arcade.collide(buttonPause, platforms);
        // game.physics.arcade.collide(scoreText, platforms);
        //  game.physics.arcade.overlap(buttonPause, scoreText, collectStar, null, this);

        var ScoreStyle = { font: "45px Arial", fill: "#3a5fcd", align: "center", float: "right" };

        //  game.add.image(game.world.centerX, game.world.centerY, 'shop-icon').anchor.set(1);
        //   scoreText = game.add.text(150, 540, 'score:'+score, ScoreStyle); //300*540
        //enemy = game.add.sprite(64, 100, 'circle-enemy');
        game.time.events.loop(Phaser.Timer.SECOND, this.CreateEnemy, this);
        // var enemy2 = game.add.sprite(64, 200, 'circle-enemy');
        //  game.add.tween(sprite).to( { x: '+300' }, 2000, Phaser.Easing.Linear.None, true);
        //btnClose = game.add.button(game.world.centerX + 105, 108, 'close-icon',kapat);
        //this.pauseButton = this.game.add.sprite(0, 0, 'pauseButton');
        // this.pauseButton.inputEnabled = true;
        // this.pauseButton.events.onInputUp.add(function () {
        //     this.game.paused = true;
        // }, this);
        // this.buttonPause.add(function () {
        //     if (this.game.paused) this.game.paused = false;
        // }, this);

        spri = game.add.sprite(150, 150, 'sound-icon');
        spri.anchor.setTo(0.5);


        sprin = game.add.sprite(200, 150, 'home-icon');
        sprin.anchor.setTo(0.5);
        game.physics.enable(sprin, Phaser.Physics.ARCADE);


        // graphics.beginFill(0xFF0000, 1);
        graphics.drawCircle(circle.x, circle.y, circle.diameter);
        graphics.add=spri;

        genel.add(spri,sprin); 
    // var parent = game.add.group();
    // parent.position.set(game.world.centerX, game.world.centerX);
    
    // cem = game.add.sprite(100, 0, "segment-2", 0, parent);
    // cem.anchor.set(0.5);
    // game.physics.arcade.enable(cem);
    // cem.tint=0xffffff;
    // parent.update = function() {
    //     this.angle = 1;
    //     cem.angle += 1;
    // }
    },



    CreateEnemy: function () {
        if (i === 1) {

            if (tmp === 0) {
                var tints = [0xcd2626, 0x3a5fcd, 0xd2691e, 0xa020f0, 0x32cd32, 0x1c0f45]; //kırmızı,mavi,turuncu,mor,yeşil,lacivert
                var x = Math.floor((Math.random() * 400));
                var renk = Math.floor((Math.random() * 2));
                enemy = game.add.sprite(x, 0, 'circle-enemy');
                enemy.tint = tints[renk];
                tmp = 1;
            }
            else {
                var tints = [0xcd2626, 0x3a5fcd, 0xd2691e, 0xa020f0, 0x32cd32, 0x1c0f45]; //kırmızı,mavi,turuncu,mor,yeşil,lacivert
                var x = Math.floor((Math.random() * 400));
                var renk = Math.floor((Math.random() * 2));
                enemy = game.add.sprite(x, 600, 'circle-enemy');
                enemy.tint = tints[renk];
                tmp = 0;
            }

        }
        if (i === 2) {
            if (tmp === 0) {
                var tints = [0xcd2626, 0x3a5fcd, 0xd2691e, 0xa020f0, 0x32cd32, 0x1c0f45]; //kırmızı,mavi,turuncu,mor,yeşil,lacivert
                var x = Math.floor((Math.random() * 400));
                var renk = Math.floor((Math.random() * 3));
                enemy = game.add.sprite(x, 0, 'circle-enemy');
                enemy.tint = tints[renk];
                tmp = 1;
            }
            else {
                var tints = [0xcd2626, 0x3a5fcd, 0xd2691e, 0xa020f0, 0x32cd32, 0x1c0f45]; //kırmızı,mavi,turuncu,mor,yeşil,lacivert
                var x = Math.floor((Math.random() * 400));
                var renk = Math.floor((Math.random() * 3));
                enemy = game.add.sprite(x, 600, 'circle-enemy');
                enemy.tint = tints[renk];
                tmp = 0;
            }
        }
        if (i === 3) {
            if (tmp === 0) {
                var tints = [0xcd2626, 0x3a5fcd, 0xd2691e, 0xa020f0, 0x32cd32, 0x1c0f45]; //kırmızı,mavi,turuncu,mor,yeşil,lacivert
                var x = Math.floor((Math.random() * 400));
                var renk = Math.floor((Math.random() * 4));
                enemy = game.add.sprite(x, 0, 'circle-enemy');
                enemy.tint = tints[renk];
                tmp = 1;
            }
            else {
                var tints = [0xcd2626, 0x3a5fcd, 0xd2691e, 0xa020f0, 0x32cd32, 0x1c0f45]; //kırmızı,mavi,turuncu,mor,yeşil,lacivert
                var x = Math.floor((Math.random() * 400));
                var renk = Math.floor((Math.random() * 4));
                enemy = game.add.sprite(x, 600, 'circle-enemy');
                enemy.tint = tints[renk];
                tmp = 0;
            }
        }
        if (i === 4) {
            if (tmp === 0) {
                var tints = [0xcd2626, 0x3a5fcd, 0xd2691e, 0xa020f0, 0x32cd32, 0x1c0f45]; //kırmızı,mavi,turuncu,mor,yeşil,lacivert
                var x = Math.floor((Math.random() * 400));
                var renk = Math.floor((Math.random() * 5));
                enemy = game.add.sprite(x, 0, 'circle-enemy');
                enemy.tint = tints[renk];
                tmp = 1;
            }
            else {
                var tints = [0xcd2626, 0x3a5fcd, 0xd2691e, 0xa020f0, 0x32cd32, 0x1c0f45]; //kırmızı,mavi,turuncu,mor,yeşil,lacivert
                var x = Math.floor((Math.random() * 400));
                var renk = Math.floor((Math.random() * 5));
                enemy = game.add.sprite(x, 600, 'circle-enemy');
                enemy.tint = tints[renk];
                tmp = 0;
            }
        }
        if (i === 5) {
            if (tmp === 0) {
                var tints = [0xcd2626, 0x3a5fcd, 0xd2691e, 0xa020f0, 0x32cd32, 0x1c0f45]; //kırmızı,mavi,turuncu,mor,yeşil,lacivert
                var x = Math.floor((Math.random() * 400));
                var renk = Math.floor((Math.random() * 6));
                enemy = game.add.sprite(x, 0, 'circle-enemy');
                enemy.tint = tints[renk];
                tmp = 1;
            }
            else {
                var tints = [0xcd2626, 0x3a5fcd, 0xd2691e, 0xa020f0, 0x32cd32, 0x1c0f45]; //kırmızı,mavi,turuncu,mor,yeşil,lacivert
                var x = Math.floor((Math.random() * 400));
                var renk = Math.floor((Math.random() * 6));
                enemy = game.add.sprite(x, 600, 'circle-enemy');
                enemy.tint = tints[renk];
                tmp = 0;
            }
        }
        // enemy = game.add.sprite(45, 200, 'circle-enemy');
        // enemy = game.add.sprite(100, 234, 'circle-enemy');
        // enemy = game.add.sprite(88, 156, 'circle-enemy');

        //    var ScoreStyle = { font: "32px Arial", fill: "#3a5fcd", align: "center", float: "right" };

        //         scoreText = game.add.text(150, 540, 'score: ' + score, ScoreStyle); //300*540


    },
    update: function () {
        this.EnemyMovement(i);
        this.ClearLevels();
        this.CreateLevels(i);
        game.physics.enable(sprites, Phaser.Physics.ARCADE);
        // game.physics.enable(enemy, Phaser.Physics.ARCADE);
        game.physics.arcade.collide(sprites, enemy);
        //game.physics.arcade.collide(enemy, platforms);

        game.physics.arcade.overlap(sprites, enemy, this.CollectEnemy, null, this);

        // if (game.input.mousePointer.isDown) {
        //     threshold = 123; //some magical number
        //     if (abs(deltaX) < abs(deltaY)) {
        //         delta = delta.y;
        //         if (inputPosition.x < screenWidth / 2) delta = -delta;
        //         k = (delta / screenHeight) * threshold;
        //     } else {
        //         delta = delta.x
        //         if (inputPosition.y > screenHeight / 2) delta = -delta;
        //         k = (delta / screenWidth) * threshold ;//
        //     }
        //     currentAngle += k * deltaTime;   //delta time is elapsed time has passed since previous frame

        // }

        spri.rotation = game.physics.arcade.angleToPointer(spri);
        genel.rotation = game.physics.arcade.angleToPointer(genel);
        // sprites[0].rotation = game.physics.arcade.angleToPointer(sprites[0]);
        // sprites[1].rotation = game.physics.arcade.angleToXY(sprites[1], game.world.centerX, game.world.centerY - 35);

        scoreText = game.add.text(150, 540, 'score:' + score); //300*540

        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            sprin.angle--;
        }


    },
    CollectEnemy: function () {
        enemy.kill();

        score += 10;
        // scoreText.text = 'Score: ' + score;

    },
    EnemyMovement: function (level) {
        var tints = [0xcd2626, 0x3a5fcd, 0xd2691e, 0xa020f0, 0x32cd32, 0x1c0f45]; //kırmızı,mavi,turuncu,mor,yeşil,lacivert
        var x = [];
        var y = [];
        switch (level) {
            case 1: {
                tween = game.add.tween(enemy).to({ x: game.world.centerX, y: game.world.centerY }, 2000, Phaser.Easing.Linear.None, true);
            }
            case 2: {
                tween = game.add.tween(enemy).to({ x: game.world.centerX, y: game.world.centerY }, 2000, Phaser.Easing.Linear.None, true);
            }
            case 3: {
                tween = game.add.tween(enemy).to({ x: game.world.centerX, y: game.world.centerY }, 2000, Phaser.Easing.Linear.None, true);
            }
            case 4: {
                tween = game.add.tween(enemy).to({ x: game.world.centerX, y: game.world.centerY }, 2000, Phaser.Easing.Linear.None, true);
            }
            case 5: {
                tween = game.add.tween(enemy).to({ x: game.world.centerX, y: game.world.centerY }, 2000, Phaser.Easing.Linear.None, true);
            }
        }

    },
    buttonPause2: function () {
        // var ScoreStyle = { font: "65px Arial", fill: "#3a5fcd", align: "center", float: "right" };

        // scoreText = game.add.text(150, 540, 'score:'+score, ScoreStyle); //300*540
        score += 10;
        if (score === 50) {
            i = 2;
        }
        if (score === 100) {
            i = 3;
        }
        if (score === 150) {
            i = 4;

        }
        if (score === 200) {
            i = 5;
        }
        game.paused = false;

    },
    buttonClose: function () {

        // platforms.destroy(); 
        // game.paused = false;
        // pauseText.destroy();
    },
    buttonPause: function () {
        game.paused = true;

        // game.paused = true;
        platforms = game.add.group();
        pauseWindowBack = platforms.create(this.game.world.centerX - 140, this.game.world.centerY - 200, 'pause-window-back');

        buttonBackBig2 = platforms.create(game.world.centerX - 85, 190, 'button-back-big');
        soundButtonBack = platforms.create(game.world.centerX + 20, 310, 'home-button-back');
        homeButtonBack = platforms.create(game.world.centerX - 100, 310, 'home-button-back');

        btnClose = platforms.create(game.world.centerX + 105, 108, 'close-icon', this.buttonClose, this);


        // btnClose = game.add.button(game.world.centerX + 105, 108, 'close-icon', this.buttonClose, this);
        btnRestart = platforms.create(game.world.centerX - 22, 212, 'restart-icon', this.buttonRestart, this);
        btnHome = platforms.create(game.world.centerX - 82, 320, 'home-icon', this.buttonHome, this);
        btnSound = platforms.create(game.world.centerX + 37, 325, 'sound-icon', this.buttonSound, this);


        pauseWindowBack.tint = 0xdddddd;
        buttonBackBig2.tint = 0x00868b;
        soundButtonBack.tint = 0xa020f0;
        homeButtonBack.tint = 0xcd2626;
        btnClose.tint = 0x3a5fcd;
        //  game.add.image(game.world.centerX, game.world.centerY, 'shop-icon').anchor.set(1);
        pauseText = game.add.text(150, 130, 'Paused', { fontSize: '32px', fill: '#3a5fcd' });

        // btnClose.events.onInputUp.add(function () {
        //     game.paused = false;
        // });

        // btnClose.events.onInputDown.add(function () {
        //     game.paused = false;
        // });
        // this.game.paused = true;


    },

    buttonRestart: function () { },
    buttonHome: function () { },
    buttonSound: function () { },


    collectStar: function () { },
    homeButton: function () { },

    ClearLevels: function () {
        if (sprites[1]) {
            sprites[0].destroy();
            sprites[1].destroy();
        }
        if (sprites[2]) {
            sprites[0].destroy();
            sprites[1].destroy();
            sprites[2].destroy();
        }
        if (sprites[3]) {
            sprites[0].destroy();
            sprites[1].destroy();
            sprites[2].destroy();
            sprites[3].destroy();
        }
        if (sprites[4]) {
            sprites[0].destroy();
            sprites[1].destroy();
            sprites[2].destroy();
            sprites[3].destroy();
            sprites[4].destroy();0.55
        }
        if (sprites[5]) {
            sprites[0].destroy();
            sprites[1].destroy();
            sprites[2].destroy();
            sprites[3].destroy();
            sprites[4].destroy();
            sprites[5].destroy();
        }                                                                                                                                                                                                                                                                                                                                                   
    },

    CreateLevels: function (level) {

        var tints = [0xcd2626, 0x3a5fcd, 0xd2691e, 0xa020f0, 0x32cd32, 0x1c0f45]; //kırmızı,mavi,turuncu,mor,yeşil,lacivert
        var angelYDeltas = [34, 120, 90, 72, 60];
        var angle = 360 / (level + 1);
        var x = [];
        var y = [];                                                                                                             
        switch (level) {
            case 1: {
                x.push(0);
                x.push(0);

                y.push(35);
                y.push(-35);                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                
            }
            case 2: {

                x.push(0);
                x.push(-40); //-40
                x.push(40); //40

                y.push(45);    //45
                y.push(-22);//-24
                y.push(-22);//-24

            }
            case 3: {

                x.push(0);
                x.push(-50);//-50
                x.push(0);                                                                                                                                                                                                                                                                      
                x.push(50);//50

                y.push(50); //50
                y.push(0);
                y.push(-50);//-500.55
                y.push(0);

            }
            case 4: {
                x.push(0);
                x.push(-50);//-50
                x.push(-31);//-31
                x.push(31);//31
                x.push(50);//50

                y.push(52);//52
                y.push(16);//16
                y.push(-43);//-43
                y.push(-43);//-43
                y.push(16);//16

            }
            case 5: {
                x.push(0);
                x.push(-46);
                x.push(-46);
                x.push(0);
                x.push(46);
                x.push(46);

                y.push(54);
                y.push(27);
                y.push(-27);
                y.push(-54);
                y.push(-27);
                y.push(27);

            }
                    cember=game.add.group();
                    cember.position.x=game.world.centerX;
                    cember.position.y=game.world.centerY;

                genel=game.add.group();
                genel.position.set(200,265);
                for (var k = 0; k < level + 1; k++) {
                       //  sprite = game.add.sprite(0, 0, imageList[level - 1]);
                sprite = game.add.sprite(game.world.centerX+x[k], game.world.centerY+y[k], imageList[level - 1]);
                     sprite.anchor.set(0.5);
                    sprite.angle = angle * k;
                    sprite.anchor.setTo(game.world.centerX, game.world.centerY);
  

                    sprite.tint = tints[k];
                    sprites[k] = sprite;

                    // asd=cember.create(game.world.centerX, game.world.centerY, imageList[level - 1]);
                    // asd.tint = tints[k];
                    // asd.anchor.set(0.5);
                    // asd.angle=angle*k;
                    // genel.add(asd);
                    
                }

        }

        

    }

}