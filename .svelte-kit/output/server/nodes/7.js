

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(games)/mines/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.20e32bc8.js","_app/immutable/chunks/scheduler.a29f9186.js","_app/immutable/chunks/index.f59e73fa.js"];
export const stylesheets = [];
export const fonts = [];
