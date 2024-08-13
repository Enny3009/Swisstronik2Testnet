require("@nomicfoundation/hardhat-toolbox");

<<<<<<< HEAD
const PRIVATE_KEY = "";

module.exports = {
  defaultNetwork: "swisstronik",
=======
module.exports = {
>>>>>>> 97be9823631705caa7b46ef8b45f3ead09ed5180
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
<<<<<<< HEAD
      accounts: [`0x` + `${PRIVATE_KEY}`],
    },
  },
};
=======
      accounts: [""], //Your private key starting with "0x"
    },
  },
};

>>>>>>> 97be9823631705caa7b46ef8b45f3ead09ed5180
