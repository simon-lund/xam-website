import type { TErrorEntry } from '../types';
import data from '../assets/errors.json';


export async function load() {
	const errorEntries: TErrorEntry[] = data;
	return { errorEntries };
}