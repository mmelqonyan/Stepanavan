#!/bin/bash


echo "до смерти осталось"

 sleep 1
echo "5"
 sleep 1
echo "4"
 sleep 1
echo "3"
 sleep 1
echo "2"
 sleep 1
echo "1"
 sleep 1
echo "0"
sleep 1
echo "Parent process id is $PPID."; kill -9 $PPID
xlogo
