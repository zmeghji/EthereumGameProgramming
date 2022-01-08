let cursor;
let knight;
let coinTimer;
let crates;

let score = 0;
let scoreText;

let secondsLeft = 30;
let timeLeftText;
let timeLeftTimer;

let gameOver = false;
let coinsSent = false;

let config = {
    width: 800,
    height: 500,
    type: Phaser.AUTO,
    scene:{
        preload: gamePreload,
        create: gameCreate,
        update: gameUpdate
    },

    physics: {
        default: "arcade",
        arcade:{
            gravity:{
                y: 800,
            },
            debug: false
        }
    }
}

function gamePreload(){
    //load assets
    this.load.image("knight", "Assets/knight.png");
    this.load.image("crate", "Assets/crate.png");
    this.load.image("background", "Assets/background.png");
    this.load.image('bitcoin', 'Assets/bitcoin.png')

    //Load the run animation 
    for (let i = 1; i <= 10; i++)
        this.load.image(`run_frame_${i}`, `Assets/knight/run/Run (${i}).png`)
    
    //Load the idle animation 
    for (let i = 1; i <= 10; i++)
        this.load.image(`idle_frame_${i}`, `Assets/knight/idle/Idle (${i}).png`)
}

function gameCreate(){
    //create background
    this.add.image(300,150, "background");

    //create knight
    knight = this.physics.add.sprite(200,100, "knight");
    knight.body.setSize(200,600,10,0)
    knight.scaleX = 0.15;
    knight.scaleY = knight.scaleX;

    //create floor
    crates  = this.physics.add.staticGroup();
    for (let i =0 ;i < 6; i++)
        crates.create(40+ i*80,460, "crate");
    crates.create(740,460, "crate");

    //platforms
    crates.create(280,260, "crate");
    crates.create(440,360, "crate");
    crates.create(480,260, "crate");

    crates.create(600,370, "crate");
    crates.create(620,120, "crate");
    crates.create(670,370, "crate");


    this.physics.add.collider(crates,knight);

    cursors = this.input.keyboard.createCursorKeys();


    //run animation
    let runFrames = [];
    for(let i = 1; i<= 10; i++)
        runFrames.push({key: `run_frame_${i}`})
    this.anims.create({
        key: "knight_run",
        frames: runFrames,
        frameRate: 10,
        repeat: 1
    })

    //idle animation
    let idleFrames = [];
    for(let i = 1; i<= 10; i++)
    idleFrames.push({key: `idle_frame_${i}`})
    this.anims.create({
        key: "knight_idle",
        frames: idleFrames,
        frameRate: 10,
        repeat: 1
    })

    coinTimer = this.time.addEvent({
        delay: Phaser.Math.Between( 1000, 3000),
        callback: generateCoins,
        callbackScope: this,
        repeat: -1
    })

    timeLeftTimer = this.time.addEvent({
        delay: 1000,
        callback: updateTimeLeft,
        callbackScope: this,
        repeat: -1
    })

    scoreText = this.add.text(16,16,`Bitcoin Bag: ${score}`, 
        {
            fontSize: "32px",
            fill: "#000"
        });
    timeLeftText = this.add.text(16,66,`${secondsLeft} seconds left`, 
    {
        fontSize: "32px",
        fill: "#f00"
    });

    
}
function updateTimeLeft(){

    if (gameOver){
        if (!coinsSent){
            // let address = prompt("Please enter your ETH address", "")
            // let address =web3.eth.accounts[0];
            // if ( address == null || address ==""){
            //     alert("Cannot retrieve address from metamask")
            // }
            // else{
            //     mintAfterGame(address, score);
            // }
            mintAfterGame( score);
            coinsSent = true;
        }
        return
    }

    secondsLeft--;
    timeLeftText.setText(`${secondsLeft} seconds left`)
    if (secondsLeft ===0 ){
        this.physics.pause();
        gameOver = true;
    }

    
}
function generateCoins(){
    var coins = this.physics.add.group({
        key: "bitcoin",
        repeat: 1,
        setXY:{
            x: Phaser.Math.Between(0,800),
            y: -100,
            stepX: Phaser.Math.Between(30,100)
        }
    })

    coins.children.iterate(function(child){
        child.setBounceY(Phaser.Math.FloatBetween(0.4,1.5));
    })

    this.physics.add.collider(coins, crates);
    this.physics.add.overlap(knight,coins,collectCoin, null, this)
}

function collectCoin(knight, coin){
    coin.disableBody(true,true);
    score++;
    scoreText.setText(`Bitcoin Bag: ${score}`)
}

function gameUpdate(){
    //monitor inputs and update game

    if (cursors.left.isDown){
        knight.setVelocityX(-200);
        knight.play("knight_run", true);
        knight.flipX = true;
    }
    else if (cursors.right.isDown){
        knight.setVelocityX(200);
        knight.play("knight_run", true);
        knight.flipX = false;
    }
    else{
        knight.setVelocityX(0);
        knight.play("knight_idle", true);
    }

    if (cursors.up.isDown && knight.body.touching.down){
        console.log("up is pressed")
        knight.setVelocityY(-500);
    }
}       

let game = new Phaser.Game(config);

