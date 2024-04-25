export default function handlePermissions(
	permissions: Record<string, string[]>,
	arg: string,
) {
	try {
		if (!arg) {
			throw new Error(
				'Permission handler needs an argument, but none were provided!',
			);
		}
		if (arg in permissions) {
			console.log(permissions[arg].join(','));
		} else {
			throw new Error(
				`Invalid argument '${arg}' is either lacking a list or not in the permission enum!`,
			);
		}
	} catch (e) {
		console.error(e);
	}
}
