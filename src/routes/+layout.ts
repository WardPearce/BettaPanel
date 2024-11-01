import { goto } from "$app/navigation";
import { puffer } from "$lib/const";

export async function load({ url }) {
  try {
    await puffer.default.getApiSelf();
    if (url.pathname === '/') {
      goto('/me', { replaceState: true });
    }
  } catch (error) {
    if (url.pathname !== '/') {
      goto('/', { replaceState: true });
    }
  }

  return {
    editableConfig: await puffer.default.getApiConfig()
  };
}

export let ssr = false;