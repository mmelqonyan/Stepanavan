#!/bin/bash

xlogo &

killall -9 xlogo

echo Parrent id = $PPID
 
kill -9 $PPID
echo Parrent is :



