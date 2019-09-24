let global : any = typeof window !== 'undefined' ? window : self;
global.config = {
	apiUrl:typeof window !== 'undefined' && window.location ? window.location.href.substr(0,window.location.href.lastIndexOf('/')+1)+'api/' : 'https://wallet.hakcoin.org/api/',
	trustedDaemonsAddresses:[
		'https://wallet.hakcoin.org:38784/'
	],
	phpRelay:typeof window !== 'undefined' ? true : false,
	mainnetExplorerUrl: "https://explorer.hakcoin.org/",
	mainnetExplorerUrlHash: "https://explorer.hakcoin.org/tx/{ID}",
	mainnetExplorerUrlBlock: "https://explorer.hakcoin.org/block/{ID}",
	testnetExplorerUrl: "http://testnet.hakcoin.org/",
	testnetExplorerUrlHash: "http://testnet.hakcoin.org/tx/{ID}",
	testnetExplorerUrlBlock: "http://testnet.hakcoin.org/block/{ID}",
	testnet: false,
	coinUnitPlaces: 9,
	txMinConfirms: 10,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Monero
	txCoinbaseMinConfirms: 60, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Monero
	addressPrefix: 0x15cff2,
	integratedAddressPrefix: 0x611c76a8ff2,
	addressPrefixTestnet: 33,
	integratedAddressPrefixTestnet: 34,
	subAddressPrefix: 0x25e046a028ff2,
	subAddressPrefixTestnet: 73,
	feePerKB: new JSBigInt('400000000'),//20^10 - for testnet its not used, as fee is dynamic.
	dustThreshold: new JSBigInt('1000000000'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
	defaultMixin: 12, // default value mixin

	idleTimeout: 30,
	idleWarningDuration: 20,

	coinSymbol: 'HAK',
	openAliasPrefix: "hak",
	coinName: 'Hakcoin',
	coinUriPrefix: 'hakcoin:',
	avgBlockTime: 60,
	maxBlockNumber: 500000000,

	donationAddresses : [
		'5qfrSvgYutM1aarmQ1px4aDiY9Da7CLKKDo3UkPuUnQ7bT7tr7i4spuLaiZwXG1dFQbkCinRUNeUNLoNh342sVaqTaWqvt8',
		'5nYWvcvNThsLaMmrsfpRLBRou1RuGtLabUwYH7v6b88bem2J4aUwsoF33FbJuqMDgQjpDRTSpLCZu3dXpqXicE2uSWS4LUP',
		'9ppu34ocgmeZiv4nS2FyQTFLL5wBFQZkhAfph7wGcnFkc8fkCgTJqxnXuBkaw1v2BrUW7iMwKoQy2HXRXzDkRE76Cz7WXkD'
	]
};
