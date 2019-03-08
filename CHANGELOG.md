# Change Log
All notable changes to the "aoe2-aiscript" extension will be documented in this file. Version numbers are given as:

    <major>.<minor>.<patch>

## v0.2.0 [dev]

## v0.1.6
- Add tech, unit, and building ID numbers to resources
- Add a lot of missing resource objects (also fix some incorrect ones)
- Setup hierarchy of identifier IDs, to improve error detection and prevent false positives
- Add experimental error detection (off by default)
- Remove completion, hover, and signature help from experimental to released
- Set completion, hover, and signature help ON by default

## v0.1.5
- Add additional resource information and add additional categories
- Fix signatures issue where signatures would highlight the wrong variable [issue #8]
- Add leveled parameter help (added 'parametersOnly' option) to prevent saturating the screen with text

## v0.1.4
- Add tutorial for defining custom colors
- Add additional syntax highlighting groups for finer grained coloring
- Fix several incorrect civilization IDs

## v0.1.3
- Implement hover help text
- Implement command parameter help (a.k.a. signatures)
- Implement experimental 'completion suggestions' with help text
- Add resource files (under 'languageExtension/src/resources') to augment experimental completions
- Extend syntax highlighting to all facts/rules
- Add snippet 'actrule' to provide a rule with a user selectable action to take
- Add snippet 'researchrule' providing a rule that can research a given tech

## v0.1.2
- Add snippets capability ("addrule", "buildrule", "trainrule")
- Add icon for the extension

## v0.1.1
- Fix image size in README.md

## v0.1.0
- Initial alpha release of the extension
- Very basic syntax highlighting capabilities are enabled