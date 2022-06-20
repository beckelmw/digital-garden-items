---
title: Python
url: /code/python
description: Python notes
---

## Strings
```python
r'some raw string \b' # slash will print as r'' is raw string

'''
multiline string
due to triple quotes
'''

f'Hi {name}' # format strings will substitute variables
```

- strings support slicing `str[start:end]`
- `len` function can be use to get string length


## Match
A match statement takes an expression and compares its value to successive patterns given as one or more case blocks.

```python
def http_error(status):
    match status:
        case 400:
            return "Bad request"
        case 404:
            return "Not found"
        case 418:
            return "I'm a teapot"
        case _:
            return "Something's wrong with the internet"
```

Several statements can be combined:

```python
case 401 | 403 | 404:
    return "Not allowed"
```

### Unpacking via matching

```python
match command.split():
    case [action, obj]:
        # interpret action, obj
```

The match statement evaluates the “subject” (the value after the match keyword), and checks it against the pattern (the code next to case). A pattern is able to do two different things:

- Verify that the subject has certain structure. In your case, the [action, obj] pattern matches any sequence of exactly two elements. This is called matching.
- It will bind some names in the pattern to component elements of your subject. In this case, if the list has two elements, it will bind action = subject[0] and obj = subject[1].

### Extended unpacking

```python
match command.split():
    case ["drop", *objects]:
        for obj in objects:
            character.drop(obj, current_room)
```

### Capturing matched sub patterns

```python
match command.split():
    case ["go", ("north" | "south" | "east" | "west") as direction]:
        current_room = current_room.neighbor(direction)
```

### Guards / Conditions after pattern matches

The guard is not part of the pattern, it’s part of the case. It’s only checked if the pattern matches which is why it can use the bound pattern variables.

```python
match command.split():
    case ["go", direction] if direction in current_room.exits:
        current_room = current_room.neighbor(direction)
    case ["go", _]:
        print("Sorry, you can't go that way")
```

More reading:
- https://peps.python.org/pep-0636/

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

```python
a = set(["Jake", "John", "Eric"])
b = set(["John", "Jill"])

print(a.intersection(b))
print(a.symmetric_difference(b))
print(a.difference(b))
print(a.union(b))
```

## pyenv

```bash
$ pyenv install 3.10.4
$ pyenv shell 3.10.4
$ python -m venv venv
$ source venv/bin/activate
```