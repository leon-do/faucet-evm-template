import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL as string);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY as string, provider);
export default wallet;
