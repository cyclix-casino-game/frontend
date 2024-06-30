

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/account/referrals/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.dcaf2634.js","_app/immutable/chunks/scheduler.a29f9186.js","_app/immutable/chunks/index.f59e73fa.js","_app/immutable/chunks/routes.d0cde595.js","_app/immutable/chunks/index.7003f703.js"];
export const stylesheets = [];
export const fonts = [];
