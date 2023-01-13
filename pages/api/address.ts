// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import wallet from "../../src/wallet";

type Address = {
  address: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Address>) {
  const address = await wallet.getAddress();
  res.status(200).json({ address });
}
