// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ethers } from "ethers";
import { verify } from "hcaptcha";

type Message = {
  message: string;
};

const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL as string);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY as string, provider);

export default async function handler(req: NextApiRequest, res: NextApiResponse<Message>) {
  // parse the request body
  const { address, hcaptchaToken } = JSON.parse(req.body);
  // verifiy address
  const isAddress = ethers.utils.isAddress(address);
  // if invalid address, return 401
  if (!isAddress) return res.status(401).json({ message: "Invalid Address" });
  // verify the captcha
  const { success } = await verify(process.env.HCAPTCHA_SECRET as string, hcaptchaToken);
  // if invalid captcha, return 401
  if (!success) return res.status(401).json({ message: "Invalid Captcha" });
  
  // send the transaction
  // const { hash } = await wallet.sendTransaction({
  //   to: "0xdA064B1Cef52e19caFF22ae2Cc1A4e8873B8bAB0",
  //   value: ethers.utils.parseEther(process.env.AMOUNT as string),
  // });
  // res.status(200).json({ data: hash });

  res.status(200).json({ message: "0x" });
}
