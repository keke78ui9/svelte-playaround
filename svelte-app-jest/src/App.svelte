<svelte:options tag="my-app" />
<script lang="ts">
	import {} from './Link.svelte';
	export let name: string;

	// test typescript syntax
	let isDone: boolean = false;
	let decimal: number = 6;
	let hex: number = 0xf00d;
	let binary: number = 0b1010;
	let octal: number = 0o744;
	// let big: bigint = 100n; // TODO: this cause TypeError, TypeError: Do not know how to serialize a BigInt.

	// let color: string = "blue";
	// color = 'red';

	// let list: number[] = [1, 2, 3];
	// let list2: Array<number> = [1, 2, 3];
	// let x: [string, number];
	// // Initialize it
	// x = ["hello", 10]; // OK
	// // Initialize it incorrectly
	// x = [10, "hello"]; // Error

	// enum Color {
	// 	Red,
	// 	Green,
	// 	Blue,
	// }
	// let c: Color = Color.Green;

	// enum Color2 {
	// 	Red = 1,
	// 	Green = 2,
	// 	Blue = 4,
	// }
	// let c2: Color2 = Color2.Green;

	// let notSure: unknown = 4;
	// notSure = "maybe a string instead";

	// let u: undefined = undefined;
	// let n: null = null;

	// function error(message: string): never {
	// 	throw new Error(message);
	// }

	// interface LabeledValue {
	// 	label: string;
	// }

	// function printLabel(labeledObj: LabeledValue) {
	// 	console.log(labeledObj.label);
	// }

	// interface SquareConfig {
	// 	color?: string;
	// 	width?: number;
	// }

	// interface Shape {
	// color: string;
	// }

	// interface Square extends Shape {
	// sideLength: number;
	// }

	// let square = {} as Square;
	// square.color = "blue";
	// square.sideLength = 10;

	// function add(x: number, y: number): number {
	// 	return x + y;
	// }

	// class Greeter {
	// greeting: string;

	// constructor(message: string) {
	// 	this.greeting = message;
	// }

	// greet() {
	// 	return "Hello, " + this.greeting;
	// }
	// }

	// let greeter = new Greeter("world");

	// function identity(arg: number): number {
	// 	return arg;
	// }

	// function identity2<T>(arg: T): T {
	// 	return arg;
	// }

	// let output = identity<string>("myString");

	// function loggingIdentity<T>(arg: Array<T>): Array<T> {
	// 	console.log(arg.length); // Array has a .length, so no more error
	// 	return arg;
	// }

	// function identity3<T>(arg: T): T {
	// return arg;
	// }

	// let myIdentity: <T>(arg: T) => T = identity;

	// function create<T>(c: { new (): T }): T {
	// 	return new c();
	// }
</script>

<main>
	<h1 data-testid="hello">Hello {name}!</h1>

	<p>Visit the 
		<app-link url="https://svelte.dev/tutorial" name="Svelte tutorial"></app-link> to learn how to build Svelte apps.
		
	</p>
</main>

<style type="text/scss">
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	
		h1 {
			color: green;
			text-transform: uppercase;
			font-size: 4em;
			font-weight: 100;
		}
	}

	

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>