import JSBI from 'jsbi'

export enum SupportedChainId {
  // AVAX = 43114,
  // AVAX_TESTNET = 43113
  ARBITRUM = 42161,
  ARBITRUM_SEPOLIA = 421614,
}

// exports for external consumption
export type BigintIsh = JSBI | string | number

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const MaxUint256 = JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
