

export const index = 22;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/verification/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/22.04f154ee.js","_app/immutable/chunks/scheduler.a29f9186.js","_app/immutable/chunks/index.f59e73fa.js","_app/immutable/chunks/verification.d8a6e5f8.js","_app/immutable/chunks/profile.54ef22b7.js","_app/immutable/chunks/index.7003f703.js","_app/immutable/chunks/navigation.a51337af.js","_app/immutable/chunks/routes.d0cde595.js","_app/immutable/chunks/singletons.e36dfd25.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/verification.9ce21c1e.css"];
export const fonts = [];
