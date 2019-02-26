# Defining Custom Colors - Tutorial

This is a very short description of how to define your own custom colors for AI scripting.


## How the groups are defined:

The individual components are defined using a set of regular expressions that capture some text. This text is then associated with a very specific "scope". Below is a table that identifies the defined scopes that are currently defined. Most of these will be compatible with most color themes.

| scope name                                     | Description 
|------------------------------------------------|-------------
| comment.line.semicolon                         | comments
| string.quoted.double.aoe2aiscript              | strings (outside of comments)
| entity.name.function.aoe2aiscript.fact         | commands in the facts section (before `=>`)
| entity.name.function.aoe2aiscript.action       | commands in the actions section (after `=>`)
| support.type.aoe2aiscript.yields               | `=>`
| storage.type.aoe2aiscript.def                  | `defrule`, `defconst` (for more control see below)
| keyword.control.aoe2aiscript.defact            | `disable-self`, `do-nothing` (for more control see below)
| variable.other.aoe2aiscript.resource           | `food`, `wood`, `stone`, `gold`
| constant.numeric.aoe2aiscript                  | Numbers (0, 1, 2, etc...)
| keyword.control.aoe2aiscript.load              | `#load-if-defined`, `#load-if-not-defined`, `#else`, `#end-if`, `load`, `load-random` (for more control see below)
| keyword.control.aoe2aiscript.control           | `and`, `nand`, `nor`, `not`, `or`
| constant.language.aoe2aiscript.truefalse       | `true`, `false`
| constant.language.aoe2aiscript.truefalse       | anything following an opening parenthesis, but not defined above (i.e fact and action commands)

## Finer grained control
The following are not specially colored by default, but have been made available. This allows either highlighting something that wouldn't otherwise be highlighted, or applying a special color to a command subset.

| scope                                           | Description 
|-------------------------------------------------|-------------
| aoe2aiscript.age                                | `dark-age`, `feudal-age`, `castle-age`, `imperial-age`
| aoe2aiscript.tech                               | `ri-X` tags
| storage.type.aoe2aiscript.def.rule              | `defrule`
| storage.type.aoe2aiscript.def.const             | `defconst`
| entity.name.function.aoe2aiscript.action.jump   | `up-jump-X` tags
| keyword.control.aoe2aiscript.defact.disableself | `disable-self`
| keyword.control.aoe2aiscript.defact.donothing   | `do-nothing`
| keyword.control.aoe2aiscript.load.if            | `#load-if-defined`, `#load-if-not-defined`
| keyword.control.aoe2aiscript.load.elseend       | `#else`, `#end-if`
| keyword.control.aoe2aiscript.load.file          | `load`, `load-random`


## How to define a color for a given "scope"

In order to apply your own custom coloring you need to modify your settings file. If you place these modifications in your main Users Settings file then any color definitions you make will be applied to all files.

As an example, if you want to color `defconst` and `defrule` as red (hex `#ff0000`), add the following settings somewhere in your settings.json file. Note that this will apply these colorings regardless of which color theme you are using:

```json
{
    /* ... other settings ... */

    "editor.tokenColorCustomizations": {
        "textMateRules": [
            {
                "scope": "storage.type.aoe2aiscript.def",
                "settings": {"foreground": "#ff0000"}
            }
        ]}
}
```
Or you can also color them differently. For example, to color `defrule` red and `defconst` bright-green:
```json
{
    /* ... other settings ... */

    "editor.tokenColorCustomizations": {
        "textMateRules": [
            {
                "scope": "storage.type.aoe2aiscript.def.rule",
                "settings": {"foreground": "#ff0000"}
            },{
                "scope": "storage.type.aoe2aiscript.def.const",
                "settings": {"foreground": "#00ff00"}
            }
        ]}
}
```

You may need to reload vscode for the changes to take effect.