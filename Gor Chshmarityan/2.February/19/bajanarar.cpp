#include <iostream>
using namespace std;
int nod();
int main()
{
	nod();
}


int nod()
{
	int array1[30];
	int count1=0;
	int num1;	
	cout<<"Enter the first number: ";
	cin>>num1;

	for(int i=num1; i>0; i--)
	{
		if(num1 % i == 0)
		{
			array1[count1++]	= i;
			cout<<i<<endl;
		}	
	}


	int array2[30];
	int count2=0;
	int num2;
	cout<<"Enter the second number: ";
	cin>>num2;

	for(int i=num2; i>0; i--)
	{
		if(num2 % i == 0)
		{
			array1[count2++] = i;
			cout<<i<<endl;
		}
	}


	int array3[30];
	int count3=0;
	int num3;
	cout<<"Enter the third number: ";
	cin>>num3;

	for(int i=num3; i>0; i--)
	{
		if(num3 % i == 0)
		{
			array1[count3++] = i;
			cout<<i<<endl;
		}
	}
	

	
	
int arr[3];
arr[0]=num1;
arr[1]=num2;
arr[2]=num3;

int temp;
        temp=arr[0];
        if(arr[0]>arr[1])
        {
                temp=arr[1];
        }
        if(arr[2]<temp)
        {
                temp=arr[2];
        }

        for(int i=temp; i>0; i--) {

                if(arr[0] % i == 0 && arr[1] % i == 0 && arr[2] % i == 0)
                {

                        cout<<"Bajanarar: "<<i<<endl;	
		}

}
}
