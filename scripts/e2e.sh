#!/usr/bin/env bash

export CODE_TESTS_PATH="$(pwd)/languageExtension/out/test"
export CODE_TESTS_WORKSPACE="$(pwd)/languageExtension/testFixture"

node "$(pwd)/languageExtension/node_modules/vscode/bin/test"