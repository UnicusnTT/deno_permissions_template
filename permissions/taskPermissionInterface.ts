import { PermissionEnum } from './permissionEnum.ts';

export interface TaskPermissions {
	[key: string]: Partial<Record<PermissionEnum, string[]>>;
}
