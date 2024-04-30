# Deno Permissions Template

This project serves as a template for managing permissions in Deno projects. It provides a structured approach to defining allowed and denied permissions for different tasks by allowing you to store the desired configurations as automatically retrieved code.
This should make it less tempting to take the easy way out with `--allow-all`.
Configurations are not revealed at runtime.

## Overview

The project consists of two main directories:
- `permissions/`: Contains configuration files for allowed and denied permissions.
- `src/`: Contains the main application code (`main.ts` in this case).

## Usage

### `permissions/` Directory

- `allowed.ts`: Defines the allowed permissions for different tasks.
- `denied.ts`: Defines the denied permissions for different tasks.
- `permissionEnum.ts`: Enumerates the permission flags used in the project. As of 1.42.4 it includes all flags in the Deno documentation.
- `permissionHandler.ts`: Handles the logic for generating permission strings based on configurations.
- `taskPermissionInterface.ts`: Defines the interface for task permissions.

### `src/` Directory

- `main.ts`: Contains the main application logic.
- Put additional application code in `src/`.

### Commands

- `getPermissions`: A script to generate permission strings for a given task. Usage: `deno task getPermissions <task>`.

### `deno.jsonc`

- Defines Deno tasks and linting/formatting configurations.

## Getting Started

**If you build on the template:**
1. Clone this repository.
2. Install Deno if you haven't already: [Deno Installation Guide](https://deno.land/#installation). Review the [documentation](https://docs.deno.com/runtime/manual) if you need more detail.
3. Run `deno task dev` to execute main.ts with default settings.
4. Review deno.jsonc for additional instructions and details for default settings.

**If you just want the functionality:**
1. Copy the `permissions` subdirectory into your deno root directory.
2. Add the getPermissions task to `deno.json` or `deno.jsonc`.
3. Edit `permissions/allowed.ts` and `permissions/denied.ts` so they match your tasks and permissions instead of the template.
4. Replace permission flags in your tasks with `$(deno task getPermissions <task>)`. You're now using the permissions directory correctly!
5. You might want to put this `README.md` in your copy of the`permissions` directory.

## Adding new tasks/permissions
1. Add your new task name to the object in `permissions/allowed.ts` as a key. Optionally include it in `permissions/denied.ts` as well.
2. The task name key's value must be an object where the keys are from PermissionEnum.
3. the values for these keys should be lists. An empty list returns defaults for the flag.
4. Run `deno task getPermissions <task>` to generate permission strings for a specific task. (Use this to ensure you generate the correct flags!)
5. Define your task in `deno.jsonc`, but replace all allowance/denial flags with `$(deno task getPermissions <your task>)` as you see it in the dev task.
6. Run `deno task <your task>` to execute it with automated permissions.

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).