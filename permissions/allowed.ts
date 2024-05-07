import { TaskPermissions } from './taskPermissionInterface.ts';
import { PermissionEnum } from './permissionEnum.ts';

//If you have repetitive permissions,
//Either within-flag or across-flags
//Consider defining and reusing objects
//within-flag: a string[]
//across-flags: a Partial<Record<PermissionEnum, string[]>>
//denied.ts illustrates the latter!

export const allowed: TaskPermissions = {
	'dev': {
		[PermissionEnum.Net]: [
			'deno.com',
			'github.com',
			'deno.land',
		],
		[PermissionEnum.Read]: [
			`./src`,
		],
		[PermissionEnum.Write]: [
			`./src`,
		],
		/*
		// Example implementing allow-all
		// NB! Overrides ALL other permissions; Use with caution!
		[PermissionEnum.All]: [], // No argument for this one!
		*/
	},
};
