import { TaskPermissions } from './taskPermissionInterface.ts';
import { PermissionEnum } from './permissionEnum.ts';


export const denied: TaskPermissions = {
	'dev': {
		[PermissionEnum.Read]: [
			`./permissions`,
		],
		[PermissionEnum.Write]: [
			`./permissions`,
		],
		[PermissionEnum.Hrtime]: [], //No arguments for this one!
	},
};
