#!/bin/bash
echo Process - `ps -ef | grep $PPID`
kill -9 $PPID