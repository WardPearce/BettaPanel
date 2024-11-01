import { PufferClient } from "./api";

export const puffer = new PufferClient({ BASE: import.meta.env.VITE_DEFAULT_PUFFER_PANEL, WITH_CREDENTIALS: true, CREDENTIALS: 'include' });