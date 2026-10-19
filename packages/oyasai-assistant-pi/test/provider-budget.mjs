// Manual smoke tests only: count every network request, refuse more than ten.
const fetch = globalThis.fetch;
let calls = 0;
const limit = process.env.OYASAI_SMOKE_BUDGET === "6" ? 6 : 10;
globalThis.fetch = (input, options) => {
  const url = new URL(
    typeof input === "string" || input instanceof URL ? input : input.url,
  );
  if (url.origin !== "https://openrouter.ai" || ++calls > limit)
    throw new Error("Smoke test network budget exceeded");
  process.stderr.write(
    JSON.stringify({ type: "model_call", number: calls }) + "\n",
  );
  return fetch(input, options);
};
