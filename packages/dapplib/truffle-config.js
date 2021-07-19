require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name rifle still evil grid another army gasp'; 
let testAccounts = [
"0xad4ca8d5e6dfb8130bec0845c504a35eaa343ff1c5c32c9f574f0049126bc99d",
"0xbfe744092840819cdb61bba25af5293fcff8b2f74dba9e84bf055d6422112088",
"0x1980032061be6aa7fd4bc0cce3ef2a985580bf291c0ad4fc3fe019afe1d398ab",
"0x2da5faeb4a561057bc81e0b761384215165f757ac5cd26353753e27d7db284c5",
"0x2fa80d0541a5ee9eb52289bd704954fd632d32d74b1f9adfafb8399e1cbb3fbc",
"0x70a61afffe24f5155a4f560735cc9cac984f1f5c13f4237253eb431cdbc2fd0b",
"0x178161a7bfe2ee26e4bec6d0abbb82ac6bbaad525976e316791364957a7f6263",
"0x603d4bb858611a94bafacac7df00c74691ecbd82afb6e1a4b6fb1d671a464af2",
"0x185072b3893d7f406350eafa2b83b8e6569ece37a5e286e182c3996f6cbd3cbb",
"0x2f730e15c7620fa20708569270daf2b59dc4e18b8dc120eb78c0cdecf74d72d3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

