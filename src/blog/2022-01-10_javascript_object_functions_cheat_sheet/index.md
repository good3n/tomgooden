---
title: 'JavaScript Object Functions Cheat Sheet'
path: '/blog/javascript-object-functions-cheat-sheet/'
description: 'JavaScript Object Functions Cheat Sheet.'
date: '2020-01-10'
featuredImage: './acf-pro.png'
author: 'Tom Gooden'
tags: ['javascript']
---

## Object.assign()

copies properties from one or more source objects to target object

example
`Object.assign({ a: 1, b: 2 }, { c: 3 }, { d: 4 }) // { a: 1, b: 2, c: 3, d: 4 }`
syntax
`Object.assign(target, ...sources)`

## Object.create()

creates new object, using an existing object as the prototype
example
`Object.create({ a: 1 }) // <prototype>: Object { a: 1 }`
syntax
`Object.create(proto, [propertiesObject])`

## Object.defineProperties()

defines new or modifies existing properties
example

```
Object.defineProperties({ a: 1, b: 2 }, { a: {
value: 3,
writable: true,
}}) // { a: 3, b: 2 }
```

syntax
`Object.defineProperties(obj, props)`

## Object.defineProperty()

defines new or modifies existing property
example

```
Object.defineProperty({ a: 1, b: 2 }, 'a', {
value: 3,
writable: true
}); // { a: 3, b: 2 }
```

syntax
`Object.defineProperty(obj, prop, descriptor)`

Object.entries()
returns array of object's [key, value] pairs
example
Object.entries({ a: 1, b: 2 }) // [ ["a", 1], ["b", 2] ]
syntax
Object.entries(obj)
Object.freeze()
freezes an object, which then can no longer be changed
example
const obj = { a: 1 }
Object.freeze(obj)
obj.prop = 2 // error in strict mode
console.log(obj.prop) // 1
syntax
Object.freeze(obj)
Object.fromEntries()
transforms a list of key-value pairs into an object
example
Object.fromEntries([['a', 1], ['b', 2]]) // { a: 1, b: 2 }
syntax
Object.fromEntries(iterable)
Object.getOwnPropertyDescriptor()
returns a property descriptor for an own property
example
const obj = { a: 1 }
Object.getOwnPropertyDescriptor(obj, 'a') // { value: 1, writable: true, enumerable: true, configurable: true }
syntax
Object.getOwnPropertyDescriptor(obj, prop)
Object.getOwnPropertyDescriptors()
returns all own property descriptors
example
const obj = { a: 1 }
Object.getOwnPropertyDescriptors(obj, 'a') // { a: { value: 1, writable: true, enumerable: true, configurable: true } }
syntax
Object.getOwnPropertyDescriptor(obj, prop)
Object.getOwnPropertyNames()
returns array of all properties
example
Object.getOwnPropertyNames({ a: 1, b: 2 }) // [ "a", "b" ]
syntax
Object.getOwnPropertyNames(obj)
Object.getOwnPropertySymbols()
array of all symbol properties
example
const obj = { a: 1 }
const b = Symbol('b')
obj[b] = 'someSymbol' // obj = { a: 1, Symbol(b): "symbol" }
Object.getOwnPropertySymbols(obj) // [ Symbol(b) ]
syntax
Object.getOwnPropertySymbols(obj)
Object.getPrototypeOf()
returns the prototype
example
const proto = { a: 1 }
const obj = Object.create(proto)
obj.b = 2 // obj = { b: 2 }
Object.getPrototypeOf(obj) // { a: 1 }
syntax
Object.getPrototypeOf(obj)
Object.is()
determines whether two values are the same value
example
const objA = { a: 1 }
const objB = { a: 1 }
Object.is(objA, objA) // true
Object.is(objA, objB) // false
Object.is('a', 'a') // true
syntax
Object.is(value1, value2)
Object.isExtensible()
determines wether an object can have new properties added to it
example
const obj = {}
Object.isExtensible(obj) // true
Object.preventExtensions(obj)
Object.isExtensible(obj) // false
syntax
Object.isExtensible(obj)
Object.isFrozen()
determines if an object is frozen
example
const obj = {}
Object.isFrozen(obj) // false
Object.freeze(obj)
Object.isFrozen(obj) // true
syntax
Object.isFrozen(obj)
Object.isSealed()
determines if an object is sealed
example
const obj = {}
Object.isSealed(obj) // false
Object.seal(obj)
Object.isSealed(obj) // true
syntax
Object.isSealed(obj)
Object.keys()
returns array of object's enumerable property names
example
Object.keys({ a: 1, b: 2 }) // [ "a", "b" ]
syntax
Object.keys(obj)
Object.preventExtensions()
prevents new properties from being added to an object
example
const obj = { a: 1 }
Object.preventExtensions(obj)
Object.defineProperty(obj, 'b', { value: 2 }) // Error: Can't define property "b": Object is not extensible
syntax
Object.preventExtensions(obj)
Object.prototype.hasOwnProperty()
returns boolean indicating whether object has the specified property
example
const obj = { a: 1 }
obj.hasOwnProperty('a') // true
obj.hasOwnProperty('b') // false
syntax
obj.hasOwnProperty(prop)
Object.prototype.isPrototypeOf()
checks if object exists in another object's prototype chain
example
const proto = { a: 1 }
const obj = Object.create(proto)
proto.isPrototypeOf(obj) // true
syntax
prototypeObj.isPrototypeOf(object)
Object.prototype.propertyIsEnumerable()
checks whether the specified property is enumerable and is the object's own property
example
const obj = { a: 1 }
const arr = ['a']
obj.propertyIsEnumerable('a') // true
arr.propertyIsEnumerable(0) // true
arr.propertyIsEnumerable('length') // false
syntax
obj.propertyIsEnumerable(prop)
Object.prototype.toString()
returns a string representing the object
example
const obj = {}
obj.toString() // "[object Object]"
const arr = ['a', 'b']
arr.toString() // "a,b"
syntax
obj.toString()
Object.seal()
prevents new properties from being added and marks all existing properties as non-configurable
example
const obj = { a: 1 }
Object.seal(obj)
obj.a = 2 // { a: 2 }
obj.b = 3 // error in strict mode
delete obj.a // error in strict mode
syntax
Object.seal(obj)
Object.values()
returns array of object's own enumerable property values
example
Object.values({ a: 1, b: 'a'}) // [ 1, "a" ]
syntax
Object.values(obj)
