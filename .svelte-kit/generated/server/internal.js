
import root from '../root.svelte';
import { set_building } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	track_server_fetches: false,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\r\n<html lang=\"en\" data-uniframe-theme=\"light\" data-uniframe-locale=\"en-us\"  data-theme=\"light\">\r\n<head>\r\n\t<meta charset=\"utf-8\" />\r\n\t<link rel=\"icon\" href=\"" + assets + "/apple-touch-icon.png\" />\r\n\t<meta name=\"viewport\" content=\"width=device-width\" />\r\n\t<meta name=\"description\" content=\"Crypto Casino games, Crash Game, Dice Game, Hilo Game, Plinko\">\r\n\t<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/apple-touch-icon.png\">\r\n\t<link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"/favicon-32x32.png\">\r\n\t<link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"/favicon-16x16.png\">\r\n\t<title>Cyclix Casino Games</title>\r\n\t<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\r\n\t<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\r\n\t<link href=\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap\" rel=\"stylesheet\" />\r\n\t<link href=\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,500;0,600;0,700;1,100;1,500;1,600&display=swap\" rel=\"stylesheet\">\r\n\t<link href=\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,700;1,100&display=swap\" rel=\"stylesheet\">\r\n\t<link href=\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,700;1,100&display=swap\" rel=\"stylesheet\">\r\n\t<link href=\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,700;1,100&display=swap\" rel=\"stylesheet\">\r\n\t<link href=\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,700;1,100&display=swap\" rel=\"stylesheet\">\r\n\t<link href=\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,700;1,100&display=swap\" rel=\"stylesheet\">\r\n\t<link href=\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,700;1,100&display=swap\" rel=\"stylesheet\">\r\n\t<link href=\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,700;1,100&display=swap\" rel=\"stylesheet\">\r\n\t<link href=\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,700;1,100&display=swap\" rel=\"stylesheet\">\r\n\t<link href=\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,700;1,100&display=swap\" rel=\"stylesheet\">\r\n\t<link href=\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,700;1,100&display=swap\" rel=\"stylesheet\">\r\n\t<link href=\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,700;1,100&display=swap\" rel=\"stylesheet\">\r\n\t<link href=\"https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap\" rel=\"stylesheet\">\r\n\t<link href=\"https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap\" rel=\"stylesheet\">\r\n\r\n<style>\r\n*{\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tfont-family: Poppins;\r\n\ttext-decoration: none;\r\n\tbox-sizing: border-box;\r\n\tscrollbar-width: thin;\r\n}\r\n* {\r\n    scrollbar-width: thin;\r\n    scrollbar-width: 5px;\r\n    scrollbar-color: rgba(203, 215, 255, .1) transparent;\r\n}\r\na, a:hover {\r\n    color: inherit;\r\n    text-decoration: none;\r\n}\r\n*, *:before, *:after {\r\n\tbox-sizing: border-box;\r\n}\r\n* {\r\n    scrollbar-width: thin;\r\n}\r\n:after, :before {\r\n    box-sizing: border-box;\r\n}\r\n/* Firefox */\r\ninput[type=number] {\r\n\t-moz-appearance: textfield;\r\n}\r\nbody {\r\n\toverflow-anchor: none;\r\n\tmargin: 0;\r\n\twidth: 100%;\r\n\tfont-size: .875rem;\r\n\tline-height: 1.6;\r\n\tbackground-color: var(--background-color);\r\n\toverscroll-behavior: contain;\r\n\t-webkit-text-size-adjust: 100%;\r\n\t-webkit-tap-highlight-color: transparent;\r\n\tscrollbar-width: thin;\r\n\tscrollbar-color: #20313d transparent;\r\n}\r\nbody, input, textarea, a, button {\r\n\tfont-family: Montserrat,-apple-system,Framedcn,Helvetica Neue, Poppins, Condensed,DisplayRegular,Helvetica,Arial,PingFang SC,Hiragino Sans GB,WenQuanYi Micro Hei,Microsoft Yahei,sans-serif;\r\n}\r\ntextarea, input{\r\n\toutline: none;\r\n}\r\n\r\nbutton {\r\n\tcursor: pointer;\r\n\tpadding: 0;\r\n\tuser-select: none;\r\n    font-family: Geogrotesque Wide, Verdana, Geneva, Tahoma, sans-serif;\r\n    border: none;\r\n    background-color: transparent;\r\n    outline: none;\r\n}\r\nbody, input, textarea, a, button {\r\n\tcolor: var(--text-color);\r\n}\r\n:root {\r\n\t--text-color:#b1b6c6;\r\n\t--primary-color: #2c6ccc;\r\n\t--background-color: #1a1d29;\r\n\t--placeholder-color: #75808c;\r\n\t--autofill-color: #f5f6f7;\r\n\t--scroll-color: #24262B;\r\n\t--border-radius:18px\r\n}\r\n\r\n.ttu {\r\n\ttext-transform: uppercase;\r\n}\r\n</style>\r\n\t\t" + head + "\r\n\t</head>\r\n\t<body data-sveltekit-preload-data=\"hover\" class=\"v3-body en-us\" data-new-gr-c-s-check-loaded=\"14.1172.0\" data-gr-ext-installed>\r\n\t\t<div style=\"display: contents\">" + body + "</div>\r\n\t</body>\r\n</html>\r\n",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "19nt9ve"
};

export function get_hooks() {
	return {};
}

export { set_assets, set_building, set_private_env, set_public_env };
