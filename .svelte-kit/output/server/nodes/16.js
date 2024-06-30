

export const index = 16;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/game-shows/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/16.944df7db.js","_app/immutable/chunks/scheduler.a29f9186.js","_app/immutable/chunks/index.f59e73fa.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/hook.147a51af.js","_app/immutable/chunks/routes.d0cde595.js","_app/immutable/chunks/index.7003f703.js"];
export const stylesheets = ["_app/immutable/assets/hook.f156e99a.css"];
export const fonts = [];
