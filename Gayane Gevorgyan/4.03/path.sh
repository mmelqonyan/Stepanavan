#!/bin/bash


read -p "enter a directory: " -i "$HOME/" -e path
cd $path
ls -la
