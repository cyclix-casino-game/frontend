

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/account/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.9f0435f3.js","_app/immutable/chunks/scheduler.a29f9186.js","_app/immutable/chunks/index.f59e73fa.js","_app/immutable/chunks/routes.d0cde595.js","_app/immutable/chunks/index.7003f703.js"];
export const stylesheets = ["_app/immutable/assets/2.3b9eeac9.css"];
export const fonts = [];
