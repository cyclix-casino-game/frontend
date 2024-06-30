import { s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component } from "../../../../chunks/ssr.js";
import { P as Page$1 } from "../../../../chunks/verification.js";
import { u as user } from "../../../../chunks/profile.js";
import { u as url, h as handleAuthToken } from "../../../../chunks/routes.js";
import { l as loading } from "../../../../chunks/activities.js";
import "../../../../chunks/hook.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let profileHidden;
  let track;
  let $$unsubscribe_url;
  let $$unsubscribe_handleAuthToken;
  let $loading, $$unsubscribe_loading;
  let $user, $$unsubscribe_user;
  $$unsubscribe_url = subscribe(url, (value) => value);
  $$unsubscribe_handleAuthToken = subscribe(handleAuthToken, (value) => value);
  $$unsubscribe_loading = subscribe(loading, (value) => $loading = value);
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  const badge = new URL("../../../lib/images/badges/bronze1.png", import.meta.url).href;
  let username = "";
  profileHidden = $user?.profileIsHidden || false;
  track = !username;
  $$unsubscribe_url();
  $$unsubscribe_handleAuthToken();
  $$unsubscribe_loading();
  $$unsubscribe_user();
  return `<div class="css-59u6fd"><div size="70" class="css-1d8gn0m" data-svelte-h="svelte-1qhiaay"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAz1BMVEVHcExnbXtbbX9nbHtnbHtnbntncXo4OkJhZnMxMzpobXtnbXtgZnM0Nz8+QUtMT1tITFZmbXtMUVpnbHpFSFNlaXZmbHxmb31nbHpnbnpGSFNeYm9PU19BRU9BRU5obXs7PkdWW2dTVmJaX2pobntmbHtoa3taXmxTWGJjaXZMUVtCRU5obHtjaXdpb3ZTVmNnbn07PkZmbHlWWmdcYm9ITVZMT1pPVF9tbX9mbXtmbntcYm5obHs/QUtCRU9KTFhmbHxmcn9jb3xaX2w3OkJ8zYiZAAAARXRSTlMA2Q6Ivr4b2dnZy6PZ2dnZ2W3ZbNnZUjc2UdnZ2dnZldnZ2dlfel/Z2dnZ2XrZKdlR2VLZ2dnZ2Q6xetmw2dnZligp2dm3Y7dnAAACWUlEQVR4Xu2ZiWrbQBRFfWVVI8lavCapt9hO06xL033f//+bSlPqYS4RaPz0AgGdHzjwDlwNqPP4aYl63UhZEQwA4FJV8yzFHeGemmK/hy3hvk6MQzgopAkGKZhB0KzjZQjCplGIQZqmbhZ04cBpFGJMyhIO6UB+KYpxYpLEbBpNc00xZkVyx0UMh8Pd0wQf4TDpJ1umMaeRbIhlnltH1c3kMQixJqIYcUEG+c2CAcUokwpK0lxGghiEOA1vyAldijEz0vzwHvT4KwkEaSo3JE/qUMJl4DHoN4YEfmnkMZgV3ezz/Td7whtCeKYJKyQUwxdTekl4Q7zTVEto0HfiIq4neZuI+FZLYmQS8zCSVtJKWsn4ywNIspm+ZAz0tSUmA65yZck57bSC5PcCf7laGB1JvuivY2zJ1mWRNy4xMYjYNCFhCzs0mpgzWDAxOuFvrQWTW61ZmVpJX21WCitZqUmWVjJWk5QPca45ANxsAGCuJln/e4ibTYxXapJf/9/6ZqojYdQlraSVtJK+THJeS4JsubuieI16EuB0xy7mCKgtAYY7aPLhGbwkyMa+jjdWUS2JPsDVrLxiHMGhd9C5n6chLF5pzCkcwhedakZwGXrEsKSjwBEwURfeaRaZ9++Bn3SzT0YYQ54mfweH9HmnJtEx3awyDcUAx2ggTUExehxDfjNDMUKKIdB4xJDejDcExxTDR/OdNEs76E6MaxJI0zQSgxmltDQ1NkSahulahVBDN/PYEEEaGvSmeD8CURFDnIYHXYODUCkGp5FsiN9HgGMopKFBf5S0/AHmsZmpq8eoNgAAAABJRU5ErkJggg==" alt="" scale="0.96" class="css-zipauw"></div> <div class="css-gm62cp"><div class="css-1axkvbk">${escape($user?.username)}</div> <div color="#E5A480" class="css-116wgzz" style="${"background: linear-gradient(90deg, rgb(229, 164, 128) " + escape($user?.level, true) + "%, rgb(229, 164, 128) 0%, rgba(203, 215, 255, 0.1) 0%, rgba(203, 215, 255, 0.1) 100%);"}"></div> <div class="css-jc7iyq"><div class="css-or2cg1"><span class="css-n08hzl">${escape($user?.current_level)}</span></div> <div class="css-or2cg1"><span class="css-n08hzl" data-svelte-h="svelte-s7q0f6">Next:</span> <div size="24" class="css-qvw6u0"><img${add_attribute("src", badge, 0)} alt="Bronze 1" scale="0.72" class="css-10qm6dq"></div> <div color="#E5A480" class="css-63t63w">${escape($user?.next_level)}</div> <span class="css-n08hzl" data-svelte-h="svelte-4ywc3m">$10,000</span></div></div></div></div> <div class="css-t60dms"><h3 class="css-1vqlzbx"><div style="margin-right: auto;" data-svelte-h="svelte-16bs8rc">Get Started</div> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="52px" height="52px" viewBox="0 0 52 52" enable-background="new 0 0 52 52"${add_attribute("color", $user?.emailIsVerified ? "#72f238" : "#5E626F", 0)} xml:space="preserve" size="16" class="css-1hu26ay"><path d="M26,2C12.7,2,2,12.7,2,26s10.7,24,24,24s24-10.7,24-24S39.3,2,26,2z M39.4,20L24.1,35.5 c-0.6,0.6-1.6,0.6-2.2,0L13.5,27c-0.6-0.6-0.6-1.6,0-2.2l2.2-2.2c0.6-0.6,1.6-0.6,2.2,0l4.4,4.5c0.4,0.4,1.1,0.4,1.5,0L35,15.5 c0.6-0.6,1.6-0.6,2.2,0l2.2,2.2C40.1,18.3,40.1,19.3,39.4,20z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="52px" height="52px" viewBox="0 0 52 52" enable-background="new 0 0 52 52" color="#5E626F" xml:space="preserve" size="16" class="css-1hu26ay"><path d="M26,2C12.7,2,2,12.7,2,26s10.7,24,24,24s24-10.7,24-24S39.3,2,26,2z M39.4,20L24.1,35.5 c-0.6,0.6-1.6,0.6-2.2,0L13.5,27c-0.6-0.6-0.6-1.6,0-2.2l2.2-2.2c0.6-0.6,1.6-0.6,2.2,0l4.4,4.5c0.4,0.4,1.1,0.4,1.5,0L35,15.5 c0.6-0.6,1.6-0.6,2.2,0l2.2,2.2C40.1,18.3,40.1,19.3,39.4,20z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="52px" height="52px" viewBox="0 0 52 52" enable-background="new 0 0 52 52" color="#5E626F" xml:space="preserve" size="16" class="css-1hu26ay"><path d="M26,2C12.7,2,2,12.7,2,26s10.7,24,24,24s24-10.7,24-24S39.3,2,26,2z M39.4,20L24.1,35.5 c-0.6,0.6-1.6,0.6-2.2,0L13.5,27c-0.6-0.6-0.6-1.6,0-2.2l2.2-2.2c0.6-0.6,1.6-0.6,2.2,0l4.4,4.5c0.4,0.4,1.1,0.4,1.5,0L35,15.5 c0.6-0.6,1.6-0.6,2.2,0l2.2,2.2C40.1,18.3,40.1,19.3,39.4,20z"></path></svg> <div class="css-19d7sj6"><span style="${escape($user?.emailIsVerified ? "#72f238" : "#5E626F", true) + ";"}">${escape($user?.emailIsVerified ? "1" : "0")}</span> / 
         <span style="color: rgb(177, 182, 198);" data-svelte-h="svelte-15g2eo7">3</span></div></h3> <button ${$user?.emailIsVerified ? "disabled" : ""} class="${escape("css-14nbrtk", true) + " button"}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" size="15" class="css-1h2lco0" style="margin-right: 10px;"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207L16 4.697Z"></path><path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1.5a.5.5 0 0 1-1 0V11a.5.5 0 0 1 1 0Zm0 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"></path></svg> <div style="margin-right: auto;" data-svelte-h="svelte-101tm6p">Verify your email</div> <div class="css-ov1ktg"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="52px" height="52px" viewBox="0 0 52 52" enable-background="new 0 0 52 52" color="currentColor" xml:space="preserve" size="16" class="css-1hu26ay" style="${"color: " + escape($user?.emailIsVerified ? "#72f238" : "#5E626F", true) + "; margin-right: 8px;"}"><path d="M26,2C12.7,2,2,12.7,2,26s10.7,24,24,24s24-10.7,24-24S39.3,2,26,2z M39.4,20L24.1,35.5 c-0.6,0.6-1.6,0.6-2.2,0L13.5,27c-0.6-0.6-0.6-1.6,0-2.2l2.2-2.2c0.6-0.6,1.6-0.6,2.2,0l4.4,4.5c0.4,0.4,1.1,0.4,1.5,0L35,15.5 c0.6-0.6,1.6-0.6,2.2,0l2.2,2.2C40.1,18.3,40.1,19.3,39.4,20z"></path></svg> <div>${escape($user?.emailIsVerified ? "Completed" : "Pending")}</div></div></button> <div class="css-kbw4iw" data-svelte-h="svelte-1ishop5"><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" size="18" left="-1.5" class="css-vp6koe" style="margin-right: 8.5px;"><path d="M2.63502 4.52031C1.41936 5.72796 0.666687 7.40109 0.666687 9.25002C0.666687 12.9319 3.65146 15.9167 7.33335 15.9167C8.50568 15.9167 9.60732 15.6141 10.5645 15.0827C6.0092 15.028 2.33338 11.3183 2.33338 6.75002C2.33338 5.97775 2.43843 5.23001 2.63502 4.52031Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.6667 13.4167C14.3486 13.4167 17.3333 10.4319 17.3333 6.75001C17.3333 3.06811 14.3486 0.0833435 10.6667 0.0833435C6.98478 0.0833435 4.00002 3.06811 4.00002 6.75001C4.00002 10.4319 6.98478 13.4167 10.6667 13.4167ZM12.1195 5.45927C11.9121 5.45927 11.8343 5.38149 11.8343 5.17408V4.94075C11.8343 4.5389 11.4065 4.39631 10.6676 4.39631C9.88987 4.39631 9.50098 4.5389 9.50098 4.92779V5.09631C9.50098 5.35556 9.73431 5.48519 9.95468 5.53705L12.1065 6.09445C13.0917 6.35371 13.6232 6.79445 13.6232 7.49445V8.12964C13.6232 8.88149 13.0528 9.58149 11.601 9.80186V10.5796C11.601 10.813 11.5102 10.9167 11.2899 10.9167H10.1102C9.8769 10.9167 9.78616 10.813 9.78616 10.5796V9.81482C8.23061 9.63334 7.63431 8.89445 7.63431 8.1426V7.85742C7.63431 7.66297 7.71209 7.57223 7.93246 7.57223H9.04727C9.26764 7.57223 9.33246 7.66297 9.33246 7.85742V8.06482C9.33246 8.46668 9.85098 8.60927 10.6288 8.60927C11.4584 8.60927 11.9251 8.46668 11.9251 8.07779V7.85742C11.9251 7.62408 11.7436 7.49445 11.3028 7.37779L9.20283 6.80742C8.48987 6.61297 7.82875 6.09445 7.82875 5.36853V4.94075C7.82875 4.1889 8.30839 3.42408 9.78616 3.21668V2.4389C9.78616 2.20556 9.8769 2.10186 10.1102 2.10186H11.2899C11.5102 2.10186 11.601 2.20556 11.601 2.4389V3.21668C13.0399 3.43705 13.5325 4.1889 13.5325 4.94075V5.17408C13.5325 5.38149 13.4547 5.45927 13.2343 5.45927H12.1195Z" fill="currentColor"></path></svg> <div style="margin-right: auto;">Deposit</div> <div class="css-ov1ktg"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="52px" height="52px" viewBox="0 0 52 52" enable-background="new 0 0 52 52" color="currentColor" xml:space="preserve" size="16" class="css-1hu26ay" style="color: rgb(94, 98, 111); margin-right: 8px;"><path d="M26,2C12.7,2,2,12.7,2,26s10.7,24,24,24s24-10.7,24-24S39.3,2,26,2z M39.4,20L24.1,35.5 c-0.6,0.6-1.6,0.6-2.2,0L13.5,27c-0.6-0.6-0.6-1.6,0-2.2l2.2-2.2c0.6-0.6,1.6-0.6,2.2,0l4.4,4.5c0.4,0.4,1.1,0.4,1.5,0L35,15.5 c0.6-0.6,1.6-0.6,2.2,0l2.2,2.2C40.1,18.3,40.1,19.3,39.4,20z"></path></svg> <div>Pending</div></div></div> <div class="css-kbw4iw" data-svelte-h="svelte-14n3dll"><svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" size="15" class="css-1h2lco0" style="margin-right: 10px;"><title>flower</title><g id="flower" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M11.1103319,8.80541057 C10.7777387,8.5082608 10.3288405,8.40859572 9.91081919,8.5042931 C9.37279207,5.01695231 9.86300108,2.51405935 11.3814462,0.995614214 C13.9406401,-1.56357964 16.9149324,1.41071267 16.7929991,3.20700087 C18.5892873,3.08506763 21.5635796,6.05935993 19.0043858,8.61855378 C18.6719245,8.95101505 18.2922704,9.23418427 17.8654233,9.46806147 C16.2715767,8.71339414 14.1003628,8.60005956 11.361732,9.10822215 C11.3201036,9.03923462 11.2716521,8.97332542 11.2163639,8.91144257 L11.1103319,8.80541057 Z M11.17438,10.7571571 C11.490835,10.4163051 11.6092918,9.96009902 11.5275651,9.54008726 C15.0192436,8.90752505 17.5010366,9.32719767 18.972944,10.7991051 C21.4593839,13.285545 18.398063,16.346866 16.6045448,16.2766948 C16.674716,18.070213 13.6133951,21.1315339 11.1269551,18.645094 C10.7547013,18.2728401 10.4497497,17.8359926 10.2121005,17.3345515 C10.8276086,15.7449322 10.9188713,13.6856447 10.5011164,11.1644344 C10.7075297,11.1092114 10.904882,11.0057611 11.0751096,10.8543437 L11.17438,10.7571571 Z M9.16743077,8.9466649 C8.87015292,9.28087287 8.7577662,9.71963489 8.83224174,10.1262491 C5.32374517,10.7671735 2.83129992,10.3494388 1.35490601,8.87304487 C-1.13153393,6.38660494 1.92978699,3.32528402 3.72330521,3.39545519 C3.65313404,1.60193697 6.71445496,-1.45938395 9.20089489,1.02705598 C9.52392423,1.35008532 9.79627368,1.72175482 10.0179432,2.14206449 C9.21427304,3.76402573 9.03984555,5.94890673 9.47456491,8.6858076 C9.40098874,8.73223077 9.33063914,8.78609836 9.26461741,8.84739449 L9.16743077,8.9466649 Z M9.24111224,10.865511 C9.46842923,11.0732646 9.75172494,11.1872837 10.0428794,11.208262 C10.6531749,14.845832 10.1783997,17.4445399 8.61855378,19.0043858 C6.05935993,21.5635796 3.08506763,18.5892873 3.20700087,16.7929991 C1.41071267,16.9149324 -1.56357964,13.9406401 0.995614214,11.3814462 C1.45482642,10.922234 2.0040757,10.5570637 2.64336205,10.2859354 C4.22447349,10.9686331 6.3438909,11.0536929 8.99264768,10.558989 C9.03852252,10.6371584 9.0930546,10.7115012 9.15626345,10.7806622 L9.24111224,10.865511 Z" id="Shape" fill="currentColor" fill-rule="nonzero"></path></g></svg> <div style="margin-right: auto;">Place Bet / Make Trade</div> <div class="css-ov1ktg"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="52px" height="52px" viewBox="0 0 52 52" enable-background="new 0 0 52 52" color="currentColor" xml:space="preserve" size="16" class="css-1hu26ay" style="color: rgb(94, 98, 111); margin-right: 8px;"><path d="M26,2C12.7,2,2,12.7,2,26s10.7,24,24,24s24-10.7,24-24S39.3,2,26,2z M39.4,20L24.1,35.5 c-0.6,0.6-1.6,0.6-2.2,0L13.5,27c-0.6-0.6-0.6-1.6,0-2.2l2.2-2.2c0.6-0.6,1.6-0.6,2.2,0l4.4,4.5c0.4,0.4,1.1,0.4,1.5,0L35,15.5 c0.6-0.6,1.6-0.6,2.2,0l2.2,2.2C40.1,18.3,40.1,19.3,39.4,20z"></path></svg> <div>Pending</div></div></div></div> <div class="css-t60dms"><h3 class="css-qgoclk" data-svelte-h="svelte-160o9tg">Profile Settings</h3> <form><div><label for="rollbit-field-11108" class="css-1vec8iw" data-svelte-h="svelte-1r4d83z">Change Username</label> <div><div class="css-1f51ttt"><input type="text" name="name"${add_attribute("placeholder", $user?.username, 0)} id="rollbit-field-11108"${add_attribute("value", username, 0)}> <button class="css-vmbe4r button" ${track ? "disabled" : ""} type="submit" style="margin-right: 4px;">${escape($loading ? "Loading..." : "Change")}</button></div></div></div> <div id="recaptcha10642" data-svelte-h="svelte-1he4l5w"><div class="grecaptcha-badge" data-style="bottomright" style="width: 256px; height: 60px; position: fixed; visibility: hidden; display: block; transition: right 0.3s ease 0s; bottom: 14px; right: -186px; box-shadow: gray 0px 0px 5px; border-radius: 2px; overflow: hidden;"><div class="grecaptcha-logo"><iframe title="reCAPTCHA" width="256" height="60" role="presentation" name="a-1l9u9dmsbhnu" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LcLy4QaAAAAAJTsyzu-3Vy0vM7N1rs71trH38oG&co=aHR0cHM6Ly9yb2xsYml0LmNvbTo0NDM.&hl=en&v=rKbTvxTxwcw5VqzrtN-ICwWt&size=invisible&cb=cvvars8eq6e4"></iframe></div> <div class="grecaptcha-error"></div> <textarea id="g-recaptcha-response-100003" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div> <iframe title="" style="display: none;"></iframe></div></form> <div class="css-18bcdcq"><div><input type="checkbox" id="proof-checkbox-11111" ${$loading ? "disabled" : ""} class="css-11eskem" ${profileHidden ? "checked" : ""}> <label for="proof-checkbox-11111" class="css-ep1r8t" data-svelte-h="svelte-vrzvzj"><div class="css-1jwtohg"></div>
         Private profile</label></div> <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" size="15" color="hsl(225.70000000000005, 15.6%, 58.8%)" class="css-1h2lco0" style="margin-left: 8px;"><path d="M2.313 2.313A7.896 7.896 0 1 0 13.48 13.479 7.896 7.896 0 0 0 2.312 2.313zm5.9 1c.666 0 1.2.55 1.2 1.216a1.22 1.22 0 0 1-1.2 1.217c-.667 0-1.217-.55-1.217-1.234 0-.666.55-1.2 1.216-1.2zm1.716 8.15a.79.79 0 0 1-.167.283c-.433.45-.966.716-1.6.716-.3 0-.583 0-.883-.05-.483-.066-1.1-.666-1.017-1.3l.2-1.3c.134-.75.267-1.516.4-2.266 0-.05.017-.1.017-.15 0-.317-.1-.433-.416-.467-.134-.017-.267-.033-.4-.066-.15-.05-.234-.184-.217-.3.016-.134.1-.217.267-.25.083-.017.183-.017.283-.017h2.3c.283 0 .45.133.45.417 0 .233-.034.466-.084.7-.15.866-.316 1.716-.466 2.583-.05.283-.117.566-.15.85-.017.133 0 .283.033.416.05.184.184.284.367.267.15-.017.3-.066.45-.133.117-.05.216-.134.333-.167.2-.066.35.05.3.234z" fill="currentColor" fill-rule="evenodd"></path></svg> <span style="padding-left: 20px;">${escape($loading ? "Loading..." : "")}</span></div></div> <div class="css-t60dms"><h3 class="css-qgoclk" data-svelte-h="svelte-1mdfzh3">Link Account</h3> <div class="css-33jtgb"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" size="18" class="css-oluyn3" style="margin-right: 12px;"><path fill="#fa455e" d="M16 0a16 16 0 110 32 16 16 0 010-32z"></path><path fill="#fff" d="M19.5 12.3c-.5-.5-1.1-.9-1.8-1a4.8 4.8 0 00-2-.2c-.9 0-1.7.4-2.3 1a5 5 0 00-2 4 5 5 0 004 4.8 5 5 0 001.6 0c.8 0 1.6-.3 2.2-.7.5-.4 1-.9 1.2-1.4l.3-.9v-.2h-4.4v-3.2h7.5l.2.1.1 1v1.2c0 .5 0 1-.2 1.6v-.1a7.4 7.4 0 01-1.4 3 7 7 0 01-3 2.4h-.1c-.6.2-1.2.4-1.9.4a8.8 8.8 0 01-1.9 0c-.8 0-1.5-.1-2.2-.4-.9-.4-1.6-.8-2.3-1.4-1-.8-1.9-2-2.4-3.2l-.5-1.9v-1.4-.1c0-.9.2-1.7.4-2.5.3-.7.7-1.4 1.2-2 1-1.4 2.5-2.5 4.3-3l1.5-.3a11.1 11.1 0 011.3 0 7.7 7.7 0 014.8 2l-.1.3-2 2h-.1z"></path></svg> <div style="margin-right: auto;" data-svelte-h="svelte-19v0y2a">Google</div> <button ${$user?.emailIsLinked || $loading ? "disabled" : ""} class="css-vmbe4r" type="button">${escape($user?.emailIsLinked ? "connected" : "Connect")}</button></div></div> ${validate_component(Page$1, "Verification").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
