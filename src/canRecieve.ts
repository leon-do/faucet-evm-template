import redis from "./redis";

type CanRecieve = {
  success: boolean;
  message: string;
};

/*
 * Check if the address can transfer. Must wait for cooldown to pass
 * @param {string} address - The address to check
 * @returns {CanRecieve} - The result of the check
 */
export default async function canRecieve(address: string): Promise<CanRecieve> {
  // get timestamp in seconds
  const lastRecieve = await redis.get(address);
  // if address never been transfered to
  if (lastRecieve === null) return { success: true, message: "🚢" };
  // now in seconds
  const now = Math.floor(Date.now() / 1000);
  // cooldown in seconds
  const cooldown = parseInt(process.env.COOLDOWN_HOURS as string) * 60 * 60;
  // if asked for funds after cooldown
  if (parseInt(lastRecieve) >= now + cooldown) return { success: true, message: "🚢" };
  // calculate time left in hours
  const timeLeft = Math.ceil((now + cooldown - parseInt(lastRecieve)) / 60 / 60);
  return {
    success: false,
    message: `Please wait ${timeLeft} hours before requesting again`,
  };
}
