

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.c56d1659.js","_app/immutable/chunks/scheduler.a29f9186.js","_app/immutable/chunks/index.f59e73fa.js","_app/immutable/chunks/stores.ad7d7cfd.js","_app/immutable/chunks/singletons.e36dfd25.js","_app/immutable/chunks/index.7003f703.js"];
export const stylesheets = [];
export const fonts = [];
