import { puffer } from "$lib/const";

export async function load() {
  return {
    servers: await puffer.default.getApiServers()
  };
}