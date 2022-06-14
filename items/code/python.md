---
title: Python
url: /code/python
description: Python notes
---

## Sets

[Sets](https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset) are lists with no duplicate entries.

### Creation
- Use a comma-separated list of elements within braces: `{'jack', 'sjoerd'}`
- Use a set comprehension: `{c for c in 'abracadabra' if c not in 'abc'}`
- Use the type constructor: `set(), set('foobar'), set(['a', 'b', 'foo'])`

### Important methods
- .intersection - find elements from both sets which match
- .symmetric_difference - inverse of intersection, find elements which exist in either set a or b but not both a and b
- .difference - find elements which exist in first set and not the second
- .union - all unique elements

```
a = set(["Jake", "John", "Eric"])
b = set(["John", "Jill"])

print(a.intersection(b))
print(a.symmetric_difference(b))
print(a.difference(b))
print(a.union(b))
```