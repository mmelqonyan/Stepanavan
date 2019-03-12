cd $1
echo -n "Enter the file name: "
read var
if [ ! -f "$var" ]
then
echo "File not exist."
else
echo "File exist."
fi
