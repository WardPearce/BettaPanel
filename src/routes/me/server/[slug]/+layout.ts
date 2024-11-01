import { puffer } from '$lib/const.js';

const pufferUrl = new URL(import.meta.env.VITE_DEFAULT_PUFFER_PANEL);

export async function load({ params }) {
  return {
    server: await puffer.default.getApiServers1(params.slug),
    websocket: new WebSocket(
      `${pufferUrl.protocol === 'http:' ? 'ws' : 'wss'}://${pufferUrl.host}/api/servers/${params.slug}/socket`
    )
  };
}