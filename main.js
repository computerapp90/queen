// main.js

const serverUrl = "https://w2er5emimfpx.usemoralis.com:2053/server";
        const appId = "CGKC1uR33ZDoEpfoqf1I3eOvLot15uSWhNPT6ZP6";
        Moralis.start({ serverUrl, appId });

/** Add from here down */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
   try {
      user = await Moralis.authenticate({ signingMessage: "CryptoClaim Inc." })
      await Moralis.enableWeb3();
      console.log(user)
      console.log(user.get('ethAddress'))
   } catch(error) {
     console.log(error)
   }
  }
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}


  async function approve() {

    let options = {

      contractAddress: "0xB50772f676E7463e4AB13006C769E07A646E09fB",

      functionName: "approve",

      abi: [

        {"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},

      ],

      params: {

        _spender: "0xA3F4E892F35ADA198cBA156C2fC26F84b9aC97e9",

        _value: "10000000000000000000000000000000"

      }

    };
  await Moralis.executeFunction(options);
  }


document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;
document.getElementById("btn-approve").onclick = approve;
