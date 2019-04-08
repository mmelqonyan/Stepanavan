#include <iostream>
using namespace std;
void prime_f();

int main()
{
	prime_f();

}

void prime_f(){

	int arr1[20],arr2[20],arr3[20];

	int num1, num2, num3, tmp1, tmp2, tmp3;

	cout<<"Num1: ";
	cin>>num1;
	tmp1=num1;

	int count1=0;
	for(int i=2; i<=num1;)
	{
		if(num1 % i == 0)
		{
			num1=num1/i;
			arr1[count1++]=i;
			cout<<i<<endl;
		}

		else
		{
			++i;
		}
	}

	cout<<"Num2: ";
	cin>>num2;
	tmp2=num2;

	int count2=0;
	for(int i=2; i<=num2;)
	{
		if(num2 % i == 0)
		{
			num2=num2/i;
			arr2[count2++]=i;
			cout<<i<<endl;
		}

		else
		{
			++i;
		}
	}

	cout<<"Num3: ";
	cin>>num3;
	tmp3=num3;

	int count3=0;
	for(int i=2; i<=num3;)
	{
		if(num3 % i == 0)
		{
			num3=num3/i;
			arr3[count3++]=i;
			cout<<i<<endl;
		}

		else
		{
			++i;
		}
	}

	int divisor[30];
	int k=0;
	for (int i = 2; i <= tmp1; i++)
	{
		if(i >= tmp2 || i >= tmp3 )
		{
			return;
		}

		while(tmp1 % i == 0 && tmp2 % i == 0 && tmp3 % i == 0 )
		{
			divisor[k++] = i;
			cout<<"Result: "<<divisor[k-1]<<endl;
			tmp1 /= i;
			tmp2 /= i;
			tmp3 /= i;
		}
	}
}
