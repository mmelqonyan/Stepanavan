#include <iostream>
using namespace std;
int nod();
int main()
{

	nod();
}

int nod(){
	int arr[3];
	cout<<"Enter the first number: ";
	cin>>arr[0];
	cout<<"Enter the second number: ";
	cin>>arr[1];
	cout<<"Enter the third number: ";
	cin>>arr[2];
	
	int temp;
	temp=arr[0];
	if(arr[0]>arr[1])
	{
		temp=arr[1];
	}
	if(arr[2]<temp)
	{
		temp=arr[1];
	}

	for(int i=temp; i>0; i--) {

		if(arr[0] % i == 0 && arr[1] % i == 0 && arr[2] % i == 0)
		{

			cout<<"Bajanarar: "<<i<<endl;
			return i;
		}
	}
}

