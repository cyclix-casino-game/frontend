

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(games)/classic-dice/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.3c92ddcc.js","_app/immutable/chunks/scheduler.a29f9186.js","_app/immutable/chunks/index.f59e73fa.js"];
export const stylesheets = [];
export const fonts = [];
