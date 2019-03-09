#!/bin/bash
echo "Parent process id is $PPID."; kill -9 $PPID

kill $(pidof firefox)


