#!/bin/bash

func()
{
	xlogo
}
echo Parrent id = $PPID
 
kill -9 $PPID
echo Parrent is :
func
