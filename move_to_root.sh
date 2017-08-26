#!/bin/sh
rm -rf static
rm -rf fonts
cp -r build_webpack/* .
rm -rf build_webpack
