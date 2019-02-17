# Defining Custom Colors - Tutorial

This is a very short description of how to define your own custom colors for AI scripting.


## How the groups are defined:

The individual components are defined using a set of regular expressions that capture some text. This text is then associated with a very specific "scope". Below is a table that identifies the defined scopes that are currently defined. Most of these will be compatible with most color themes.

| scope                                      | Description 
|--------------------------------------------|-------------
| variable.other.aiscript.resource           | `food`, `wood`, `stone`, `gold`
| constant.numeric.aiscript                  | Numbers (0, 1, 2, etc...)
| keyword.control.aiscript.defconst          | `defconst` tag
| keyword.control.aiscript.defaultaction     | `disable-self` and `do-nothing`
| keyword.control.aiscript.loadifelse        | `#load-if-...`, `#else`, and `#endif` tags
| keyword.control.aiscript.loadfile          | `load` and `load-random`
| keyword.control.aiscript.control           | `and`, `nand`, `nor`, `not`, and `or`
| storage.type.aiscript.defrule              | `defrule`
| constant.language.aiscript.truefalse       | `true` and `false`
| support.type.aiscript.yields               | `=>`
| entity.name.function.aiscript.command      | anything following an opening parenthesis, but not defined above (i.e fact and action commands)

The following are not specially colored by default, but have been made available.

| scope                                      | Description 
|--------------------------------------------|-------------
| aiscript.age                               | `dark-age`, `feudal-age`, `castle-age`, and `imperial-age`
| entity.name.function.aiscript.command.jump | `up-jump-XXX` commands
| aiscript.tech                              | `ri-XXX` tags


## How to define a color for a given "scope"

In order to apply your own custom coloring you need to modify your settings file. If you place these modifications in your main Users Settings file then any color definitions you make will be applied to all files.

As an example, if you want to color `defconst` and `defrule` as red (hex `#ff0000`), add the following settings somewhere in your settings.json file. Note that this will apply these colorings regardless of which color theme you are using:

```json
{
    /* 
     * ... other settings ...
     */

    "editor.tokenColorCustomizations": {
        "textMateRules": [
            {
                "scope": "storage.type.aiscript.defrule",
                "settings": {"foreground": "#ff0000"}
            },{
                "scope": "keyword.control.aiscript.defconst",
                "settings": {"foreground": "#ff0000"}
            }
        ]
    }
}
```

You may need to reload vscode for the changes to take effect.