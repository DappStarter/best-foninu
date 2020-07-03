require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog tackle food group rescue pizza solid coral light army gaze'; 
let testAccounts = [
"0xb4c68ab78035bea3df27065974988a19de635f5698c721d3e331bbd836f36b9a",
"0x48add6cac585483345f0f9ced56d2e323706181b07b65107014ea15c4c96fc64",
"0xbd5a69b32a5c5e58205129f265ace9ba315393a300013365998308bbf5417c83",
"0xd374394ff8c379bf3784bf48b41ace7b09c42405f33d5f181a63f8dd3b6b4352",
"0xd5cb54bc8702dd6fb2e2450fdf2e22f54afb89a2fe0fbc76a061ab118f6de6b1",
"0xfbfcddcd7eeed30015150f39dcb2a50ab6cc5ea04f92667071883531392ae303",
"0xeb9ddf722da227f63d2425b78a9ff1a89f297df9cd740d9e804986230e986350",
"0x40dedab4714876d65d621f82e04a9c46180c86d92c03d3e762828bdfb1beb909",
"0xe7b1f99c4ca5d137b8db5dcedc861c1783825a7523d01c9d3a543bef88c1ae0c",
"0xd348978e45ab5869b67e09cec9bc3e0963e3e2bf43786ebd28cd54894eb0ac90"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
