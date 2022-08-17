interface Token {
  address: string;
  name: string;
  symbol: string;
}

interface TokenList {
  RBTC: Token;
  DOC: Token;
  MOC: Token;
  RIF: Token;
  USDT: Token;
  XUSD: Token;
  BPro: Token;
  ETH: Token;
  BNBS: Token;
  SOV: Token;
  FISH: Token;
  MYNT: Token;
}

export { Token, TokenList };
