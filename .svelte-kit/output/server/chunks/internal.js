import { c as create_ssr_component, s as setContext, v as validate_component, m as missing_component } from "./ssr.js";
let base = "";
let assets = base;
const initial = { base, assets };
function reset() {
  base = initial.base;
  assets = initial.assets;
}
function set_assets(path) {
  assets = initial.assets = path;
}
let public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function afterUpdate() {
}
function set_building() {
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  let { data_2 = null } = $$props;
  let { data_3 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  if ($$props.data_2 === void 0 && $$bindings.data_2 && data_2 !== void 0)
    $$bindings.data_2(data_2);
  if ($$props.data_3 === void 0 && $$bindings.data_3 && data_3 !== void 0)
    $$bindings.data_3(data_3);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      stores.page.set(page);
    }
    $$rendered = `  ${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${constructors[2] ? `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${constructors[3] ? `${validate_component(constructors[2] || missing_component, "svelte:component").$$render(
                  $$result,
                  { data: data_2, this: components[2] },
                  {
                    this: ($$value) => {
                      components[2] = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    default: () => {
                      return `${validate_component(constructors[3] || missing_component, "svelte:component").$$render(
                        $$result,
                        { data: data_3, form, this: components[3] },
                        {
                          this: ($$value) => {
                            components[3] = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )}`;
                    }
                  }
                )}` : `${validate_component(constructors[2] || missing_component, "svelte:component").$$render(
                  $$result,
                  { data: data_2, form, this: components[2] },
                  {
                    this: ($$value) => {
                      components[2] = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`}`;
              }
            }
          )}` : `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`} ${``}`;
  } while (!$$settled);
  return $$rendered;
});
const options = {
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  track_server_fetches: false,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!DOCTYPE html>\r\n<html lang="en" data-uniframe-theme="light" data-uniframe-locale="en-us"  data-theme="light">\r\n<head>\r\n	<meta charset="utf-8" />\r\n	<link rel="icon" href="' + assets2 + '/apple-touch-icon.png" />\r\n	<meta name="viewport" content="width=device-width" />\r\n	<meta name="description" content="Crypto Casino games, Crash Game, Dice Game, Hilo Game, Plinko">\r\n	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">\r\n	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">\r\n	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">\r\n	<title>Cyclix Casino Games</title>\r\n	<link rel="preconnect" href="https://fonts.googleapis.com">\r\n	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\r\n	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />\r\n	<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,500;0,600;0,700;1,100;1,500;1,600&display=swap" rel="stylesheet">\r\n	<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,700;1,100&display=swap" rel="stylesheet">\r\n	<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,700;1,100&display=swap" rel="stylesheet">\r\n	<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,700;1,100&display=swap" rel="stylesheet">\r\n	<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,700;1,100&display=swap" rel="stylesheet">\r\n	<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,700;1,100&display=swap" rel="stylesheet">\r\n	<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,700;1,100&display=swap" rel="stylesheet">\r\n	<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,700;1,100&display=swap" rel="stylesheet">\r\n	<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,700;1,100&display=swap" rel="stylesheet">\r\n	<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,700;1,100&display=swap" rel="stylesheet">\r\n	<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,700;1,100&display=swap" rel="stylesheet">\r\n	<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,700;1,100&display=swap" rel="stylesheet">\r\n	<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet">\r\n	<link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">\r\n\r\n<style>\r\n*{\r\n	padding: 0;\r\n	margin: 0;\r\n	font-family: Poppins;\r\n	text-decoration: none;\r\n	box-sizing: border-box;\r\n	scrollbar-width: thin;\r\n}\r\n* {\r\n    scrollbar-width: thin;\r\n    scrollbar-width: 5px;\r\n    scrollbar-color: rgba(203, 215, 255, .1) transparent;\r\n}\r\na, a:hover {\r\n    color: inherit;\r\n    text-decoration: none;\r\n}\r\n*, *:before, *:after {\r\n	box-sizing: border-box;\r\n}\r\n* {\r\n    scrollbar-width: thin;\r\n}\r\n:after, :before {\r\n    box-sizing: border-box;\r\n}\r\n/* Firefox */\r\ninput[type=number] {\r\n	-moz-appearance: textfield;\r\n}\r\nbody {\r\n	overflow-anchor: none;\r\n	margin: 0;\r\n	width: 100%;\r\n	font-size: .875rem;\r\n	line-height: 1.6;\r\n	background-color: var(--background-color);\r\n	overscroll-behavior: contain;\r\n	-webkit-text-size-adjust: 100%;\r\n	-webkit-tap-highlight-color: transparent;\r\n	scrollbar-width: thin;\r\n	scrollbar-color: #20313d transparent;\r\n}\r\nbody, input, textarea, a, button {\r\n	font-family: Montserrat,-apple-system,Framedcn,Helvetica Neue, Poppins, Condensed,DisplayRegular,Helvetica,Arial,PingFang SC,Hiragino Sans GB,WenQuanYi Micro Hei,Microsoft Yahei,sans-serif;\r\n}\r\ntextarea, input{\r\n	outline: none;\r\n}\r\n\r\nbutton {\r\n	cursor: pointer;\r\n	padding: 0;\r\n	user-select: none;\r\n    font-family: Geogrotesque Wide, Verdana, Geneva, Tahoma, sans-serif;\r\n    border: none;\r\n    background-color: transparent;\r\n    outline: none;\r\n}\r\nbody, input, textarea, a, button {\r\n	color: var(--text-color);\r\n}\r\n:root {\r\n	--text-color:#b1b6c6;\r\n	--primary-color: #f10fff;\r\n	--background-color: #1a1d29;\r\n	--placeholder-color: #75808c;\r\n	--autofill-color: #f5f6f7;\r\n	--scroll-color: #24262B;\r\n	--border-radius:18px\r\n}\r\n\r\n/* Chrome, Safari, Edge, Opera */\r\ninput::-webkit-outer-spin-button,\r\n	input::-webkit-inner-spin-button {\r\n	-webkit-appearance: none;\r\n	margin: 0;\r\n	}\r\n\r\n/* Firefox */\r\ninput[type=number] {\r\n	-moz-appearance: textfield;\r\n}\r\n\r\n\r\n.ttu {\r\n	text-transform: uppercase;\r\n}\r\n</style>\r\n		' + head + '\r\n	</head>\r\n	<body data-sveltekit-preload-data="hover" class="v3-body en-us" data-new-gr-c-s-check-loaded="14.1172.0" data-gr-ext-installed>\r\n		<div style="display: contents">' + body + '</div>\r\n\r\n		<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"><\/script>\r\n	</body>\r\n</html>\r\n',
    error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "tp2v30"
};
function get_hooks() {
  return {};
}
export {
  assets as a,
  base as b,
  set_public_env as c,
  set_assets as d,
  set_building as e,
  get_hooks as g,
  options as o,
  public_env as p,
  reset as r,
  set_private_env as s
};
