// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ethers } from "ethers";

type Data = {
  data: string;
};

const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL as string);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY as string, provider);

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  // const { hash } = await wallet.sendTransaction({
  //   to: "0xdA064B1Cef52e19caFF22ae2Cc1A4e8873B8bAB0",
  //   value: ethers.utils.parseEther(process.env.AMOUNT as string),
  // });
  // res.status(200).json({ data: hash });

  res.status(200).json({ data: "0x" });
}
