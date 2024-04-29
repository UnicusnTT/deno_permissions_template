export default function handlePermissions(
	permissions: Record<string, string[]>,
	arg: string,
	deny?: true,
) {
	try {
		if (!arg) {
			throw new Error(
				'Permission handler needs an argument, but none were provided!',
			);
		}
		if (arg in permissions) {
			let permissionType: 'allow' | 'deny' = 'allow';
			if (deny) permissionType = 'deny';
			if (
				permissions[arg].length == 0 ||
				arg == 'hrtime' ||
				arg == 'all'
			) {
				return `--${permissionType}-${arg}`
			} else return `--${permissionType}-${arg}=${
				permissions[arg].join(',')
			}`;
		} else {
			throw new Error(
				`Invalid argument '${arg}' is either lacking a list or not in the permission enum!`,
			);
		}
	} catch (e) {
		throw e;
	}
}
