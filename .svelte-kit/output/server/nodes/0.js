import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.e0b539b3.js","_app/immutable/chunks/routes.d0cde595.js","_app/immutable/chunks/index.7003f703.js","_app/immutable/chunks/scheduler.a29f9186.js","_app/immutable/chunks/navigation.a51337af.js","_app/immutable/chunks/profile.54ef22b7.js","_app/immutable/chunks/singletons.e36dfd25.js","_app/immutable/chunks/index.f59e73fa.js","_app/immutable/chunks/screen.b713082b.js","_app/immutable/chunks/stores.ad7d7cfd.js"];
export const stylesheets = ["_app/immutable/assets/0.aeae77af.css"];
export const fonts = [];
