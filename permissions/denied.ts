import { PermissionEnum } from './enum.ts';
import handlePermissions from './permissionHandler.ts';

const denied = {
	[PermissionEnum.Read]: [
		'C:/',
	],
};

const arg = Deno.args[0] as keyof typeof denied;

handlePermissions(denied, arg);
