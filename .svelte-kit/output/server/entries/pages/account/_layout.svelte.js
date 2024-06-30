import { s as subscribe } from "../../../chunks/utils.js";
import { c as create_ssr_component, b as add_attribute } from "../../../chunks/ssr.js";
import { u as url } from "../../../chunks/routes.js";
const account = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $url, $$unsubscribe_url;
  $$unsubscribe_url = subscribe(url, (value) => $url = value);
  $$unsubscribe_url();
  return `<div class="css-1gcbewu"><div class="css-17tg23y"><div class="css-uqeajf"><div class="css-1mo5975"><a href="/account/profile"><div${add_attribute(
    "class",
    $url === "/account/profile" ? "css-1rfdaqx" : "css-8nql6g",
    0
  )}><svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" size="19" class="css-1duiatx" style="margin-right: 8px;"><title>profile</title><g id="profile" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="user" transform="translate(2.000000, 2.000000)" fill="currentColor" fill-rule="nonzero"><path d="M0.965714286,13.656 L0.965714286,12.5062857 C1.00916978,11.6526133 1.52234558,10.8934124 2.29828571,10.5348571 L2.29828571,10.5348571 C5.95735359,9.06509892 10.0426464,9.06509892 13.7017143,10.5348571 L13.7017143,10.5348571 C14.4776544,10.8934124 14.9908302,11.6526133 15.0342857,12.5062857 L15.0342857,13.656 C15.0339831,14.278367 14.7863018,14.8750897 14.3457933,15.3147407 C13.9052848,15.7543918 13.3080807,16.00091 12.6857143,16.0000025 L3.31428571,16.0000025 C2.69191931,16.00091 2.09471518,15.7543918 1.65420669,15.3147407 C1.2136982,14.8750897 0.966016918,14.278367 0.965714286,13.656 Z M8,-1.68277865e-07 C6.41902651,-0.000462272971 4.99346882,0.951537437 4.38813612,2.41203383 C3.78280341,3.87253023 4.11692204,5.5538639 5.23467569,6.67194447 C6.35242934,7.79002505 8.03366523,8.12463535 9.49433859,7.51972978 C10.9550119,6.91482421 11.9074287,5.48954499 11.9074287,3.90857143 C11.9077317,2.87205894 11.4961912,1.87789556 10.7633734,1.14486336 C10.0305555,0.411831162 9.03651253,-1.68277865e-07 8,-1.68277865e-07 Z" id="User"></path></g></g></svg>
                         Profile</div></a> <a href="/account/balances"><div${add_attribute(
    "class",
    $url === "/account/balances" ? "css-1rfdaqx" : "css-8nql6g",
    0
  )}><svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" size="17" class="css-wphpnv" style="margin-right: 8px;"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(1.500000, 0.000000)" fill="currentColor" fill-rule="nonzero"><g><path d="M11.6251054,5.24803202 L5.41597191,5.24803202 C2.3724741,8.29357246 -1.41262186,13.0801011 0.532551443,16.5719844 C2.06968213,19.3316752 5.54478613,20.0452425 8.9163413,19.9978211 C12.2878965,19.9503996 15.5557719,19.1413289 16.6779218,16.5719844 C18.1128128,13.2870911 14.4527347,8.36886558 11.6251054,5.24803202 Z M9.00457657,16.4979271 L9.00457657,17.748032 L7.90588813,17.748032 L7.90588813,16.5833713 C7.15474398,16.5469442 6.42617563,16.3260314 6,16.0564371 L6.33617962,14.6230215 C6.80719968,14.9047022 7.46865497,15.1618743 8.1973769,15.1618743 C8.8362564,15.1618743 9.27364313,14.8926158 9.27364313,14.4021086 C9.27364313,13.9369494 8.91488772,13.6425109 8.08526583,13.3359859 C6.88552385,12.8948316 6.06742022,12.2819495 6.06742022,11.0934518 C6.06742022,10.0149068 6.76235525,9.16936117 7.96209724,8.91202119 L7.96209724,7.748032 L9.06063211,7.748032 L9.06063211,8.8262412 C9.81177625,8.86317192 10.3165832,9.03489977 10.6863961,9.23096833 L10.3612741,10.6155346 C10.0697853,10.4805696 9.5539208,10.198889 8.7468747,10.198889 C8.01815277,10.198889 7.78256595,10.5418411 7.78256595,10.8852968 C7.78256595,11.2896882 8.17495468,11.5470282 9.12789875,11.9389974 C10.4620204,12.4538452 11,13.1278309 11,14.2307165 C11.0001536,15.3215157 10.2940074,16.2530093 9.00457657,16.4979271 Z"></path><path d="M13.4607081,0.524379776 C12.6087539,0.00327216631 11.5603056,1.8824298 10.8119002,1.8533693 C10.063233,1.8243088 9.47270354,-0.0298832228 8.61800023,0.000366116268 C7.76329693,0.0306154553 7.42515959,1.71810588 6.73932859,1.87622142 C6.05349758,2.03433696 4.34396006,-0.115083326 3.65812905,0.639829218 C3.10255226,1.25155275 4.80253345,3.69606921 5.46794269,4.60236054 L6.07588298,4.60236054 L11.028816,4.60236054 L11.5982691,4.60236054 C12.2956201,3.64230728 14.1585827,0.951172852 13.4607081,0.524379776 Z"></path></g></g></g></svg>
                    Balances</div></a> <a href="/account/referrals/codes"><div${add_attribute(
    "class",
    $url === "/account/referrals/codes" || $url === "/account/referrals/users" ? "css-1rfdaqx" : "css-8nql6g",
    0
  )}><svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" size="15.5" class="css-ntnakw" style="margin-right: 8px;"><title>flower</title><g id="flower" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M11.1103319,8.80541057 C10.7777387,8.5082608 10.3288405,8.40859572 9.91081919,8.5042931 C9.37279207,5.01695231 9.86300108,2.51405935 11.3814462,0.995614214 C13.9406401,-1.56357964 16.9149324,1.41071267 16.7929991,3.20700087 C18.5892873,3.08506763 21.5635796,6.05935993 19.0043858,8.61855378 C18.6719245,8.95101505 18.2922704,9.23418427 17.8654233,9.46806147 C16.2715767,8.71339414 14.1003628,8.60005956 11.361732,9.10822215 C11.3201036,9.03923462 11.2716521,8.97332542 11.2163639,8.91144257 L11.1103319,8.80541057 Z M11.17438,10.7571571 C11.490835,10.4163051 11.6092918,9.96009902 11.5275651,9.54008726 C15.0192436,8.90752505 17.5010366,9.32719767 18.972944,10.7991051 C21.4593839,13.285545 18.398063,16.346866 16.6045448,16.2766948 C16.674716,18.070213 13.6133951,21.1315339 11.1269551,18.645094 C10.7547013,18.2728401 10.4497497,17.8359926 10.2121005,17.3345515 C10.8276086,15.7449322 10.9188713,13.6856447 10.5011164,11.1644344 C10.7075297,11.1092114 10.904882,11.0057611 11.0751096,10.8543437 L11.17438,10.7571571 Z M9.16743077,8.9466649 C8.87015292,9.28087287 8.7577662,9.71963489 8.83224174,10.1262491 C5.32374517,10.7671735 2.83129992,10.3494388 1.35490601,8.87304487 C-1.13153393,6.38660494 1.92978699,3.32528402 3.72330521,3.39545519 C3.65313404,1.60193697 6.71445496,-1.45938395 9.20089489,1.02705598 C9.52392423,1.35008532 9.79627368,1.72175482 10.0179432,2.14206449 C9.21427304,3.76402573 9.03984555,5.94890673 9.47456491,8.6858076 C9.40098874,8.73223077 9.33063914,8.78609836 9.26461741,8.84739449 L9.16743077,8.9466649 Z M9.24111224,10.865511 C9.46842923,11.0732646 9.75172494,11.1872837 10.0428794,11.208262 C10.6531749,14.845832 10.1783997,17.4445399 8.61855378,19.0043858 C6.05935993,21.5635796 3.08506763,18.5892873 3.20700087,16.7929991 C1.41071267,16.9149324 -1.56357964,13.9406401 0.995614214,11.3814462 C1.45482642,10.922234 2.0040757,10.5570637 2.64336205,10.2859354 C4.22447349,10.9686331 6.3438909,11.0536929 8.99264768,10.558989 C9.03852252,10.6371584 9.0930546,10.7115012 9.15626345,10.7806622 L9.24111224,10.865511 Z" id="Shape" fill="currentColor" fill-rule="nonzero"></path></g></svg>
                    Referrals</div></a> <a href="/account/deposits/?tab=usdt"><div${add_attribute(
    "class",
    $url === "/account/deposits" ? "css-1rfdaqx" : "css-8nql6g",
    0
  )}><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" size="22" left="-1" class="css-1hcoa3w" style="margin-right: 6px;"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.16624 5.76768H15.5587C15.5587 5.38819 15.4087 5.02423 15.1417 4.75589C14.8747 4.48755 14.5126 4.33679 14.135 4.33679H8.63708C8.25949 4.33679 7.89737 4.48755 7.63037 4.75589C7.47345 4.91361 7.35694 5.10435 7.28755 5.31186C7.56513 5.36046 7.84141 5.48689 8.09362 5.70773L8.16624 5.76768ZM7.21404 13.4427C7.2136 13.4282 7.21338 13.4137 7.21338 13.3991V7.0217C7.21338 6.8952 7.26338 6.77388 7.35238 6.68444C7.39634 6.64025 7.44804 6.60563 7.50429 6.5819L10.921 9.40266C11.2474 9.68831 11.2474 10.178 10.921 10.4228L7.41158 13.3201C7.35025 13.3753 7.28339 13.4158 7.21404 13.4427ZM7.62969 14.4102C7.79117 14.342 7.94753 14.2455 8.09341 14.1179L11.5741 11.2444C12.4747 10.5459 12.3699 9.27613 11.612 8.61297L11.6006 8.60305L9.10746 6.54474H16.9824C17.36 6.54474 17.7221 6.69549 17.9891 6.96383C18.2561 7.23218 18.4061 7.59613 18.4061 7.97563L18.4061 8.62946H16.5079C16.0044 8.62946 15.5216 8.83047 15.1656 9.18826C14.8096 9.54605 14.6096 10.0313 14.6096 10.5373C14.6096 11.0433 14.8096 11.5286 15.1656 11.8864C15.5216 12.2442 16.0044 12.4452 16.5079 12.4452H18.4061V13.3991C18.4061 13.7786 18.2561 14.1426 17.9891 14.4109C17.7221 14.6792 17.36 14.83 16.9824 14.83H8.63708C8.25949 14.83 7.89737 14.6792 7.63037 14.4109C7.63014 14.4107 7.62991 14.4104 7.62969 14.4102ZM18.4061 11.4912V9.58339H16.5079C16.2561 9.58339 16.0147 9.6839 15.8367 9.86279C15.6587 10.0417 15.5587 10.2843 15.5587 10.5373C15.5587 10.7903 15.6587 11.033 15.8367 11.2118C16.0147 11.3907 16.2561 11.4912 16.5079 11.4912H18.4061Z" fill="currentColor"></path><path d="M10.9208 10.4228C11.2473 10.178 11.2473 9.68829 10.9208 9.40265L7.41142 6.50536C7.00335 6.13809 6.35044 6.46455 6.35044 6.99504L6.35044 8.42328L2.39217 8.42328C2.02491 8.42328 1.73926 8.70893 1.73926 9.07619L1.73926 10.7493C1.73926 11.1165 2.02491 11.4022 2.39217 11.4022L6.35044 11.4022L6.35044 12.8304C6.35044 13.4017 7.00335 13.6874 7.41142 13.3201L10.9208 10.4228Z" fill="currentColor"></path></svg>
                    Deposits</div></a> <a href="/account/withdrawals/?tab=usdt"><div${add_attribute(
    "class",
    $url === "/account/withdrawals" ? "css-1rfdaqx" : "css-8nql6g",
    0
  )}><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" size="22" class="css-de1f93" style="margin-right: 6px;"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.521 5.73944H9.92806C9.92806 5.35714 9.77695 4.9905 9.50798 4.72017C9.23901 4.44984 8.87421 4.29797 8.49383 4.29797H2.95523C2.57485 4.29797 2.21004 4.44984 1.94107 4.72017C1.6721 4.9905 1.521 5.35714 1.521 5.73944ZM12.7965 11.4156V9.58335H10.8842C10.6306 9.58335 10.3874 9.6846 10.2081 9.86482C10.0288 10.045 9.92806 10.2895 9.92806 10.5443C9.92806 10.7992 10.0288 11.0436 10.2081 11.2238C10.288 11.3041 10.3805 11.3687 10.4809 11.4156H12.7965ZM12.7965 8.41472V8.62238H10.8842C10.377 8.62238 9.89063 8.82487 9.53201 9.1853C9.17338 9.54574 8.9719 10.0346 8.9719 10.5443C8.9719 10.8408 9.04006 11.1302 9.16765 11.3914C8.88928 11.3148 8.69156 11.0646 8.69156 10.7579V9.07246C8.69156 8.70248 8.97932 8.41472 9.3493 8.41472H12.7965ZM12.2839 6.85922C12.2812 6.89776 12.2798 6.93668 12.2798 6.97592V7.35764H9.3493C8.39551 7.35764 7.63448 8.11868 7.63448 9.07246V10.7579C7.63448 11.7117 8.39551 12.4727 9.3493 12.4727H12.2798V12.8544C12.2798 13.2994 12.4379 13.6833 12.689 13.9748C12.6176 14.1496 12.512 14.3103 12.3764 14.4465C12.1075 14.7169 11.7427 14.8687 11.3623 14.8687H2.95523C2.57485 14.8687 2.21004 14.7169 1.94107 14.4465C1.6721 14.1762 1.521 13.8096 1.521 13.4273V7.00273C1.521 6.87529 1.57136 6.75308 1.66102 6.66297C1.75068 6.57286 1.87228 6.52224 1.99907 6.52224H11.3623C11.7006 6.52224 12.0267 6.6424 12.2839 6.85922Z" fill="currentColor"></path><path d="M17.9409 10.429C18.2697 10.1823 18.2697 9.68905 17.9409 9.40129L14.4055 6.48258C13.9944 6.1126 13.3367 6.44147 13.3367 6.97588L13.3367 8.41468L9.34915 8.41468C8.97917 8.41468 8.69141 8.70244 8.69141 9.07242L8.69141 10.7579C8.69141 11.1278 8.97917 11.4156 9.34915 11.4156L13.3367 11.4156L13.3367 12.8544C13.3367 13.4299 13.9944 13.7177 14.4055 13.3477L17.9409 10.429Z" fill="currentColor"></path></svg>
                    Withdrawals</div></a> <a href="/account/settings"><div${add_attribute(
    "class",
    $url === "/account/settings" ? "css-1rfdaqx" : "css-8nql6g",
    0
  )}><svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" size="16" class="css-1hu26ay" style="margin-right: 8px;"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M10,13.3338462 C8.15846154,13.3338462 6.66615385,11.8415385 6.66615385,10 C6.66615385,8.15846154 8.15846154,6.66769231 10,6.66769231 C11.8415385,6.66769231 13.3338462,8.15846154 13.3338462,10 C13.3338462,11.8415385 11.8415385,13.3338462 10,13.3338462 M19,8.32307692 L17.4553846,8.00769231 C17.3076923,7.97846154 17.1923077,7.86769231 17.1476923,7.72461538 C17.02,7.32153846 16.8569231,6.93076923 16.66,6.55692308 C16.5892308,6.42307692 16.5938462,6.26307692 16.6769231,6.13692308 L17.5476923,4.82153846 C17.8753846,4.32615385 17.8092308,3.66769231 17.3892308,3.24769231 L16.7523077,2.61076923 C16.3323077,2.19076923 15.6753846,2.12461538 15.18,2.45230769 L13.8630769,3.32461538 C13.7369231,3.40615385 13.5769231,3.41076923 13.4430769,3.34 C13.0692308,3.14307692 12.68,2.98153846 12.2753846,2.85384615 C12.1323077,2.80769231 12.0230769,2.69230769 11.9938462,2.54461538 L11.6769231,1.00153846 C11.5584615,0.418461538 11.0476923,0 10.4523077,0 L9.54769231,0 C8.95230769,0 8.44153846,0.418461538 8.32307692,1.00153846 L8.00615385,2.54461538 C7.97692308,2.69230769 7.86769231,2.80769231 7.72461538,2.85384615 C7.32,2.98153846 6.93076923,3.14307692 6.55692308,3.34 C6.42307692,3.41076923 6.26307692,3.40615385 6.13692308,3.32461538 L4.82,2.45230769 C4.32461538,2.12461538 3.66769231,2.19076923 3.24769231,2.61076923 L2.61076923,3.24769231 C2.19076923,3.66769231 2.12461538,4.32615385 2.45230769,4.82153846 L3.32307692,6.13692308 C3.40615385,6.26307692 3.41076923,6.42307692 3.34,6.55692308 C3.14307692,6.93076923 2.98,7.32153846 2.85230769,7.72461538 C2.80769231,7.86769231 2.69230769,7.97846154 2.54461538,8.00769231 L1,8.32307692 C0.418461538,8.44153846 0,8.95384615 0,9.54769231 L0,10.4523077 C0,11.0476923 0.418461538,11.56 1,11.6784615 L2.54461538,11.9938462 C2.69230769,12.0230769 2.80769231,12.1323077 2.85230769,12.2753846 C2.98,12.68 3.14307692,13.0707692 3.34,13.4430769 C3.41076923,13.5784615 3.40615385,13.7369231 3.32307692,13.8630769 L2.45230769,15.18 C2.12461538,15.6753846 2.19076923,16.3323077 2.61076923,16.7523077 L3.24769231,17.3892308 C3.66769231,17.8092308 4.32461538,17.8753846 4.82,17.5476923 L6.13692308,16.6769231 C6.26307692,16.5938462 6.42307692,16.5907692 6.55692308,16.66 C6.93076923,16.8584615 7.32,17.02 7.72461538,17.1476923 C7.86769231,17.1923077 7.97692308,17.3076923 8.00615385,17.4553846 L8.32307692,19 C8.44153846,19.5830769 8.95230769,20 9.54769231,20 L10.4523077,20 C11.0476923,20 11.5584615,19.5830769 11.6769231,19 L11.9938462,17.4553846 C12.0230769,17.3076923 12.1323077,17.1923077 12.2753846,17.1476923 C12.68,17.02 13.0692308,16.8584615 13.4430769,16.66 C13.5769231,16.5907692 13.7369231,16.5938462 13.8630769,16.6769231 L15.18,17.5476923 C15.6753846,17.8753846 16.3323077,17.8092308 16.7523077,17.3892308 L17.3892308,16.7523077 C17.8092308,16.3323077 17.8753846,15.6753846 17.5476923,15.18 L16.6769231,13.8630769 C16.5938462,13.7369231 16.5892308,13.5784615 16.66,13.4430769 C16.8569231,13.0707692 17.02,12.68 17.1476923,12.2753846 C17.1923077,12.1323077 17.3076923,12.0230769 17.4553846,11.9938462 L19,11.6784615 C19.5815385,11.56 20,11.0476923 20,10.4523077 L20,9.54769231 C20,8.95384615 19.5815385,8.44153846 19,8.32307692" fill="currentColor" fill-rule="nonzero"></path></g></svg>
                    Settings</div></a> <button data-svelte-h="svelte-jzdye2"><div class="css-8nql6g"><svg viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg" size="18" class="css-oluyn3" style="margin-right: 8px;"><path d="m5.02658413 5.99571522v-2.68836087l-4.84472043 3.77755652 4.84472043 3.77755653v-2.6268174c.00623348.00026739.0125.00040217.01879674.00040217h7.72059673c.2401537 0 .4348367-.1949326.4348367-.43469347v-1.37135c0-.24007392-.1955597-.43469348-.4348367-.43469348h-7.72059673c-.00629783 0-.01256413.00013478-.01879674.0004zm1.44042457-1.95844783c1.13171956-2.38698043 3.5599417-4.03726739 6.3728572-4.03726739 3.8944019 0 7.0514384 3.16320652 7.0514384 7.06521739 0 3.90201091-3.1570365 7.06521741-7.0514384 7.06521741-2.8129155 0-5.24113764-1.650287-6.3728572-4.0372674h2.343095c.91890956 1.2257609 2.3819239 2.0186348 4.0297622 2.0186348 2.7817156 0 5.0367417-2.25943263 5.0367417-5.04658481 0-2.78715217-2.2550261-5.04658478-5.0367417-5.04658478-1.6478383 0-3.11085264.79287391-4.0297622 2.01863478z"></path></svg>
                    Log Out</div></button></div> <div class="css-1xat6c" style="display: none;" data-svelte-h="svelte-1sd1z61"><button class="css-lui29e"><svg viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg" size="6" color="hsl(225.70000000000005, 15.6%, 58.8%)" class="css-rrpfla"><path d="m8 12.534c.00312077-.3848019-.13982662-.7564651-.4-1.04l-4.252-4.494 4.252-4.494c.54019021-.58619481.54019021-1.48880519 0-2.075-.25191879-.27487269-.60764873-.43137897-.9805-.43137897s-.72858121.15650628-.9805.43137897l-5.232 5.532c-.54268879.58406274-.54268879 1.48793726 0 2.072l5.227 5.534c.25191879.2748727.60764873.431379.9805.431379s.72858121-.1565063.9805-.431379c.2598547-.2817328.40285194-.6517381.4-1.035"></path></svg></button> <button class="css-lui29e"><svg viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg" size="6" color="hsl(225.70000000000005, 15.6%, 58.8%)" class="css-8adv44"><path d="m8 12.534c.00312077-.3848019-.13982662-.7564651-.4-1.04l-4.252-4.494 4.252-4.494c.54019021-.58619481.54019021-1.48880519 0-2.075-.25191879-.27487269-.60764873-.43137897-.9805-.43137897s-.72858121.15650628-.9805.43137897l-5.232 5.532c-.54268879.58406274-.54268879 1.48793726 0 2.072l5.227 5.534c.25191879.2748727.60764873.431379.9805.431379s.72858121-.1565063.9805-.431379c.2598547-.2817328.40285194-.6517381.4-1.035"></path></svg></button></div></div> ${slots.default ? slots.default({}) : ``}</div> </div>`;
});
export {
  Layout as default
};
