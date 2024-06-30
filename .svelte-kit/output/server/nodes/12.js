

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/account/referrals/users/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.a4f725f9.js","_app/immutable/chunks/scheduler.a29f9186.js","_app/immutable/chunks/index.f59e73fa.js"];
export const stylesheets = [];
export const fonts = [];
