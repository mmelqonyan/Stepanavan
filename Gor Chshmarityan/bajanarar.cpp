#include <iostream>
using namespace std;
int nod();
int main()
{

	nod();
}

int nod(){
	int num1, num2, num3, temp=0;
	cout<<"Enter the first number: ";
	cin>>num1;
	cout<<"Enter the second number: ";
	cin>>num2;
	cout<<"Enter the third number: ";
	cin>>num3;

	temp=num1;
	if(num1>num2)
	{
		temp=num2;
	}
	if(num3<temp)
	{
		temp=num3;
	}

	for(int i=temp; i>0; i--) {

		if(num1 % i == 0 && num2 % i == 0 && num3 % i == 0)
		{

			cout<<"Bajanarar: "<<i<<endl;
			return 0;
		}
	}
}

