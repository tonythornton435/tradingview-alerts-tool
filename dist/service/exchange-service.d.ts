import { MasterSymbol } from "../classes";
export declare const BINANCE = "binance";
export declare const BINANCE_FUTURES_USDM = "binance_futures_usdm";
export declare const BINANCE_FUTURES_COINM = "binance_futures_coinm";
export declare const BINANCEUS = "binanceus";
export declare const BITTREX = "bittrex";
export declare const COINBASE = "coinbase";
export declare const FTX = "ftx";
export declare const KRAKEN = "kraken";
export declare const KRAKEN_FUTURES = "kraken_futures";
export declare const KUCOIN = "kucoin";
export declare const KUCOIN_FUTURES = "kucoin_futures";
export declare const OKX_SPOT = "okx_spot";
export declare const OKX_SWAP = "okx_swap";
export declare const OKX_FUTURES = "okx_futures";
export declare const BYBIT_DERIVATIVES = "bybit_derivatives";
export declare const BYBIT_SPOT = "bybit_spot";
export declare const BITMEX = "bitmex";
export declare const SOURCES_AVAILABLE: string[];
export declare const fetchBitMex: () => Promise<MasterSymbol[]>;
export declare const fetchByBitDerivatives: () => Promise<MasterSymbol[]>;
export declare const fetchByBitSpot: () => Promise<MasterSymbol[]>;
export declare const fetchKucoin: () => Promise<MasterSymbol[]>;
export declare const fetchKraken: () => Promise<MasterSymbol[]>;
export declare const fetchKrakenFutures: () => Promise<MasterSymbol[]>;
export declare const fetchBittrex: () => Promise<MasterSymbol[]>;
export declare const fetchCoinbase: () => Promise<MasterSymbol[]>;
export declare const fetchFtx: () => Promise<MasterSymbol[]>;
export declare const fetchBinanceFuturesUsdM: () => Promise<MasterSymbol[]>;
export declare const fetchBinanceFuturesCoinM: () => Promise<MasterSymbol[]>;
export declare const fetchBinance: (isUs: boolean) => Promise<MasterSymbol[]>;
export declare const fetchOkxSpot: () => Promise<MasterSymbol[]>;
export declare const fetchOkxSwap: () => Promise<MasterSymbol[]>;
export declare const fetchSymbolsForSource: (source: string) => Promise<MasterSymbol[]>;
