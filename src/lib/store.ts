import { writable, type Writable } from "svelte/store";

export const panelNameStore: Writable<string> = writable('BettaPanel');