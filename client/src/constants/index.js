import { Schema, arrayOf } from 'normalizr';


export const ActionTypes = {
	FETCH_GAMES_REQUEST: 'FETCH_GAMES_REQUEST',
	FETCH_GAMES_SUCCESS: 'FETCH_GAMES_SUCCESS',
	FETCH_GAMES_FAILURE: 'FETCH_GAMES_FAILURE',

	FETCH_GAMES_I_KNOW_REQUEST: 'FETCH_GAMES_I_KNOW_REQUEST',
	FETCH_GAMES_I_KNOW_SUCCESS: 'FETCH_GAMES_I_KNOW_SUCCESS',
	FETCH_GAMES_I_KNOW_FAILURE: 'FETCH_GAMES_I_KNOW_FAILURE',

	FETCH_GAMES_I_OWN_REQUEST: 'FETCH_GAMES_I_OWN_REQUEST',
	FETCH_GAMES_I_OWN_SUCCESS: 'FETCH_GAMES_I_OWN_SUCCESS',
	FETCH_GAMES_I_OWN_FAILURE: 'FETCH_GAMES_I_OWN_FAILURE',

	FETCH_BGG_GAMES_REQUEST: 'FETCH_BGG_GAMES_REQUEST',
	FETCH_BGG_GAMES_SUCCESS: 'FETCH_BGG_GAMES_SUCCESS',
	FETCH_BGG_GAMES_FAILURE: 'FETCH_BGG_GAMES_FAILURE',

	TOGGLE_GAME_OWNERSHIP_REQUEST: 'TOGGLE_GAME_OWNERSHIP_REQUEST',
	TOGGLE_GAME_OWNERSHIP_SUCCESS: 'TOGGLE_GAME_OWNERSHIP_SUCCESS',
	TOGGLE_GAME_OWNERSHIP_FAILURE: 'TOGGLE_GAME_OWNERSHIP_FAILURE',

	TOGGLE_GAME_KNOWLEDGE_REQUEST: 'TOGGLE_GAME_KNOWLEDGE_REQUEST',
	TOGGLE_GAME_KNOWLEDGE_SUCCESS: 'TOGGLE_GAME_KNOWLEDGE_SUCCESS',
	TOGGLE_GAME_KNOWLEDGE_FAILURE: 'TOGGLE_GAME_KNOWLEDGE_FAILURE',

	AUTH_USER_REQUEST: 'AUTH_USER_REQUEST',
	AUTH_USER_SUCCESS: 'AUTH_USER_SUCCESS',
	AUTH_USER_FAILURE: 'AUTH_USER_FAILURE',
	AUTH_USER_LOGOUT: 'AUTH_USER_LOGOUT',

	PAGINATE_GAMES: 'PAGINATE_GAMES',
	FILTER_GAMES: 'FILTER_GAMES',
};


const bggGame = new Schema('bggGames', { idAttribute: 'objectid' });
const user = new Schema('users');
const game = new Schema('games');
game.define({
	owners: arrayOf(user),
	knowers: arrayOf(user),
});

export const Schemas = {
	USER: user,
	GAME: game,
	GAMES: arrayOf(game),
	BGG_GAMES: arrayOf(bggGame),
}


const isTest = process.env.NODE_ENV === 'test';
export const API_ENDPOINT_URL = `${isTest ? 'http://localhost' : ''}/api`;

export const AUTH_HEADER_PREFIX = 'JWT ';

export const PER_PAGE = 20;

export const FACEBOOK_PARAMS = {
	key: 'fb_login',
	size: 'small',
	appId: '322217561499723',
	autoLoad: true,
	fields: 'name,email,picture',
	icon: 'fa-facebook',
	textButton: 'Connexion avec Facebook',
};