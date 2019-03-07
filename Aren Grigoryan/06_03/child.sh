#!/bin/bash
echo $PPID
ps -p $PPID
 kill -9 $PPID
