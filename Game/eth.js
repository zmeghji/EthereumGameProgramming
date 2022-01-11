//metamask is the provider
let web3 = new Web3(Web3.givenProvider);
//metamask prompts user to accept
window.ethereum.enable();

var gameTokenContract = new web3.eth.Contract(GameToken.abi, GameToken.networks[3].address);
var powerUpContract = new web3.eth.Contract(PowerUp.abi, PowerUp.networks[3].address);
var marketplaceContract = new web3.eth.Contract(Marketplace.abi, Marketplace.networks[3].address);

async function mintAfterGame(nrOfTokens){
    let userAddress = (await web3.eth.getAccounts())[0];
    gameTokenContract.methods.mint(userAddress, nrOfTokens).send({from: userAddress})
    .on('receipt', receipt => {
      alert("Transaction Complete");
    })
}

var powerUpContract = new web3.eth.Contract(PowerUp.abi, PowerUp.networks[3].address);

function getUserItems(callback){
  web3.eth.getAccounts().then(accountArray => {
    var account = accountArray[0];

    var tokenPromise1 = powerUpContract.methods.balanceOf(account, 1).call();
    var tokenPromise2 = powerUpContract.methods.balanceOf(account, 2).call();
    var tokenPromise3 = powerUpContract.methods.balanceOf(account, 3).call();

    Promise.all([tokenPromise1, tokenPromise2, tokenPromise3]).then(values => {
      let numberOfTalismans = values[0];
      let numberOfBoots = values[1];
      let numberOfCapes = values[2] ;

      COIN_GENERATION_RATE += (numberOfTalismans*0.5)

      GAME_SECOND += 1000*num

      if(numberOfTalismans > 0)
        COIN_GENERATION_RATE += (numberOfTalismans*0.5)
      if(values[1] > 0)
        PLAYER_SPEED *= Math.pow(1.3, numberOfBoots)
      if(values[2] > 0)
        GAME_SECOND *= Math.pow(1.5, GAME_SECOND)
    })
    callback();
  });
  
}

function buy(id){
  web3.eth.getAccounts().then(accountArray => {
    var options = {
      from: accountArray[0],
      value: 0
    };
    if(id == 1)
      options.value = 100000000000000;
    else if(id == 2)
      options.value = 200000000000000;
    else if(id == 3)
      options.value = 300000000000000;

    marketplaceContract.methods.buyTokens(id).send(options)
    .on('receipt', receipt => {
      alert("Transaction Complete");
    })
  });
}