import { FormEvent } from "react";

export default function Faucet() {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch("/api/faucet", {
      method: "POST",
      body: JSON.stringify({ url: event.currentTarget.url.value }),
    }).then((res) => res.json());
    console.log(response);
  };

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Testnet Faucet" />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Testnet Faucet</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Open Sourced Faucet
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <input id="url" name="url" type="url" autoComplete="url" required className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Social network URL containing your address" />
              </div>
            </div>
            <div>
              <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Give Me Testnet Funds
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
