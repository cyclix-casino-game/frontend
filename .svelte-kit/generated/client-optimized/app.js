export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22')
];

export const server_loads = [];

export const dictionary = {
		"/": [4],
		"/account/balances": [8,[2]],
		"/account/deposits": [9,[2]],
		"/account/profile": [10,[2]],
		"/account/referrals/codes": [11,[2,3]],
		"/account/referrals/users": [12,[2,3]],
		"/account/settings": [13,[2]],
		"/account/withdrawals": [14,[2]],
		"/blackjack": [15],
		"/(games)/classic-dice": [5],
		"/(games)/crash": [6],
		"/game-shows": [16],
		"/live-casino": [17],
		"/(games)/mines": [7],
		"/originals": [18],
		"/roulette": [19],
		"/slots": [20],
		"/test": [21],
		"/verification": [22]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';