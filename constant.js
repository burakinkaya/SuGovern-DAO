export const DAO_ADDRESS = "0x85B8a25258c4a167A479B7AB2913e393e3128b80";
export const FACTORY_JSON = require("./blockchain1/build/contracts/DAOFactory.json");
export const DAO_JSON = require("./blockchain1/build/contracts/MyDAO.json");
export const TOKEN_JSON = require("./blockchain1/build/contracts/SUToken.json");
export const LINE_COUNT = 4;
export const RPC =
  "https://polygon-mumbai.g.alchemy.com/v2/qk87xs0xeViFziM8xyAckMpVat-e_32T";
export const TOP_DAO = "0xD2a09391A47AAeD26E313F997aA705bFc5032614";
export const SUB_DAOS = [
  "0xeB857AAE0e811Df0D2c6046FE41B18B1CDAc2dDc",
  "0x4fdDDF48b369C5D96B9b76F0537013BdEd55Fa82",
  "0x01457479aC2893e4a1f8e891bbdcfbEDFa271bba",
  "0xCA894A3bF53056810f7feACc4e99367CEBaBaD22",
];
export const params = [
  {
    chainName: "Mumbai Testnet",
    chainId: "0x13881",
    nativeCurrency: { name: "MATIC", decimals: 18, symbol: "MATIC" },
    rpcUrls: [
      "https://polygon-mumbai.g.alchemy.com/v2/qk87xs0xeViFziM8xyAckMpVat-e_32T",
    ],
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
  },
];
export const CHAIN_ID = 8001;
export const CONSTANT_DICT = {
  DAO_ADDRESS: DAO_ADDRESS,
  FACTORY_JSON: FACTORY_JSON,
  DAO_JSON: DAO_JSON,
  TOKEN_JSON: TOKEN_JSON,
  LINE_COUNT: LINE_COUNT,
  RPC: RPC,
  TOP_DAO: TOP_DAO,
  SUB_DAOS: SUB_DAOS,
  params: params,
  CHAIN_ID: CHAIN_ID,
};
