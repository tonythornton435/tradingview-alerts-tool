export class MasterSymbol {
    constructor(raw, source, baseAsset, quoteAsset, id, classification) {
        this.raw = raw;
        this.id = id || `${source.toUpperCase()}:${baseAsset}${quoteAsset}`;
        const [prefix, ticker] = this.id.split(":");
        this.prefix = prefix;
        this.ticker = ticker;
        this.source = source.toUpperCase();
        this.quoteAsset = quoteAsset;
        this.baseAsset = baseAsset;
        this.classification = classification || "spot";
    }
}
export class NoInputFoundError extends Error {
    constructor(message) {
        super(message);
    }
}
export class SelectionError extends Error {
    constructor(needle, haystack) {
        super(`Unable to partial match '${needle}' from the following options:\n${haystack.join("\n")}`);
        Object.setPrototypeOf(this, SelectionError.prototype);
        this._needle = needle;
        this._haystack = haystack;
    }
    set configName(value) {
        this._configName = value;
    }
    set pageUrl(value) {
        this._pageUrl = value;
    }
}
//# sourceMappingURL=classes.js.map