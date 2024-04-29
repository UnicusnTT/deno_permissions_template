export enum PermissionEnum {
	Env = 'env',
	Sys = 'sys',
	Net = 'net',
	Ffi = 'ffi',
	Read = 'read',
	Run = 'run',
	Write = 'write',
	Hrtime = 'hrtime', // No arguments for this one!
	All = 'all', // Only for allow; deny-all is the literal default...
}
