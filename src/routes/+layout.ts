import { goto } from "$app/navigation";
import type { User } from "$lib/api/index.js";
import { puffer } from "$lib/const";

export async function load({ url }) {
  let self: User | undefined;
  try {
    self = await puffer.default.getApiSelf();
    if (url.pathname === '/') {
      goto('/me', { replaceState: true });
    }
  } catch (error) {
    if (url.pathname !== '/') {
      goto('/', { replaceState: true });
    }
  }

  return {
    editableConfig: await puffer.default.getApiConfig(),
    self: self
  };
}

export let ssr = false;