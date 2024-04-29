import { TaskPermissions } from './taskPermissionInterface.ts';
import { PermissionEnum } from './permissionEnum.ts';


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
		// NB! Overrides all other permissions; Use with caution!
		[PermissionEnum.All]: [], // No argument for this one!
		*/
	},
};
