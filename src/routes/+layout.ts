import { puffer } from "$lib/const";

export async function load() {
  return {
    editableConfig: await puffer.default.getApiConfig()
  };
}

export let ssr = false;