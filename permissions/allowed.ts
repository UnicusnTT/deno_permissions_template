import { PermissionEnum } from './enum.ts';
import handlePermissions from './permissionHandler.ts';

const allowed = {
	[PermissionEnum.Hosts]: [
		'deno.com',
		'github.com',
		'deno.land',
	],
	[PermissionEnum.Read]: [
		'.',
	],
	[PermissionEnum.Write]: [
		'.',
	],
};

const arg = Deno.args[0] as keyof typeof allowed;

handlePermissions(allowed, arg);
