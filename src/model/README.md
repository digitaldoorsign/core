# Models
Models are minimal objects that are sent between the clients and the server. 
## Minimal
The term "minimal" is used to signify that an instance of a model object should not include any properties that are not part of its Typescript definition.

The following code block shows an example that violates minimalism (Tested on Google Chrome):
```$xslt
let foo: {a: string, b: string} = {a: "test", b: "test"};
let bar: {a: string} = foo as {a: string};

console.log(bar);
>>> Object
>>>     a: "test"
>>>     b: "test"
>>>     __proto__: Object
```
The object `bar` now includes a property "b" that is not part of its Typescript definition. If this object is sent over the network it will include this unnecessary property wasting bandwidth and creating potential bugs.
## Model Definition
- Each model should have an interface and class defined for it.
- The interface should include all of the properties of the class
- The class and interface should not have functions (since they are designed to be sent over the network)
- The class constructor should take only the interface as a property and explicitly copy the properties from the interface to the class
- The class constructor should not use `Object.assign` nor any other automated mechanism to copy properties since these [are not type safe](https://stackoverflow.com/questions/55583732/what-is-the-purpose-of-object-assign-in-the-constructor-of-a-typescript-object)

### Example:
```
export interface IExampleModel {
	exampleProp1: string;
	exampleProp2: number;
}

export class ExampleModel implements IExampleModel {
	exampleProp1: string;
	exampleProp2: number;

	constructor(obj: IExampleModel) {
		this.exampleProp1 = obj.exampleProp1;
		this.exampleProp2 = obj.exampleProp2;
	}
}
```
