import handlePermissions from './permissionHandler.ts';
import { allowed } from './allowed.ts';
import { denied } from './denied.ts';
import { PermissionEnum } from './permissionEnum.ts';

function main() {
	const task = Deno.args[0];
	if (!task) throw Error(
        'getPermissions requires an argument.\nThe argument should be the name of the task that calls it!'
    );
	if (!(task in allowed) && !(task in denied)) {
		throw Error(
			'Task name must at least be included as a key in permissions/allowed.ts',
		);
	}
	const allow:
		| Partial<Record<PermissionEnum, string[]>>
		| undefined = allowed[task];
	const deny:
		| Partial<Record<PermissionEnum, string[]>>
		| undefined = denied[task];
    let permissionString = '';
    if (!allow) {
        return console.log(permissionString);   
    }
    if (!(PermissionEnum.All in allow)) {
        for (const permissionType in allow) {
            permissionString += `${handlePermissions(allow, permissionType)} `;
        }
        if (deny) {
            for (const permissionType in deny) {
                permissionString += `${handlePermissions(deny, permissionType, true)} `;
            }
        }
	} else {
        permissionString = '-A ';
    }
	console.log(permissionString);
}

main();