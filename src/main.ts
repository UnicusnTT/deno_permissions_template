//Proof of concept: Replace contents to start your project!
const result = await fetch('https://deno.land/');

console.log("We made it, here's the result!", result);

const decoder = new TextDecoder();
try {
	const file = await Deno.readFile('./src/hello1.txt');
	console.log(decoder.decode(file));
} catch {
	const encoder = new TextEncoder();
	const data = encoder.encode('Hello world!');
	await Deno.writeFile('./src/hello1.txt', data);
}
