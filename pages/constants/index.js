/*import { ChainId } from "@pancakeswap/sdk";
const BSC_BLOCK_TIME = 3;
export const BASE_BSC_SCAN_URLS = {
    [ChainId.MAINNET]: "https://bscscan.com",
    [ChainId.TESTNET]: "https://testnet.bscscan.com",
  };

export const DEFAULT_CHAINID = 56;
export const BLOCKS_PER_YEAR = (60 / BSC_BLOCK_TIME) * 60 * 24 * 365; // 10512000
export const BASE_BSC_SCAN_URL = BASE_BSC_SCAN_URLS[ChainId.MAINNET];*/
export const DEFAULT_CHAINID = 56;
export const BASE_BSC_SCAN_URLS = {
  [56]: "https://bscscan.com",
  [97]: "https://testnet.bscscan.com",
};