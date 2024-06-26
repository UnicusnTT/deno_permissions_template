import { TaskPermissions } from './taskPermissionInterface.ts';
import { PermissionEnum } from './permissionEnum.ts';

//Use this for your task,
//Unless you have a good reason not to!
const defaultDenials: Partial<Record<PermissionEnum, string[]>> = {
    //To not deny write to deno.json:
    /* 
        <task>: {
            ...defaultDenials,
            [PermissionEnum.Write]: [
			`./permissions`,
            ],
        }
    */
    //To not deny read to ./permissions:
    /* 
        <task>: {
            ...defaultDenials,
            [PermissionEnum.Read]: undefined,
        }
    */
   //To add more read denials:
    /* 
        <task>: {
            ...defaultDenials,
            [PermissionEnum.Read]: [
				'many strings',
				'to your files',
			],
        }
    */
    [PermissionEnum.Read]: [
        //Denied to avoid code that exposes permission logic
        `./permissions`,
    ],
    [PermissionEnum.Write]: [
        //denied to avoid code that alters permission logic
        `./permissions`,
        `./deno.json`,
    ],
    //denied to avoid timing attacks and fingerprinting
    [PermissionEnum.Hrtime]: [], //No arguments for this one!
}

export const denied: TaskPermissions = {
	'dev': defaultDenials,
};
