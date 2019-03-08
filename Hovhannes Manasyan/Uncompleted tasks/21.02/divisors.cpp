#include <iostream>
using namespace std;

void prime(int num, int array[20], int &size);
void prime_f(int array1[20], int size_1, int array2[20], int size_2, int array_r[20], int &size_r);
int main()
{
	int array1[20],array2[20],array3[20],array_tmp[20];
	int size_1=0,size_2=0,size_3=0,size_tmp=0;
	int num;

	cout<<"Num1: ";
	cin>>num;
	prime(num, array1, size_1);

	cout<<"Num2: ";
	cin>>num;
	prime(num, array2, size_2);

	cout<<"Num3: ";
	cin>>num;
	prime(num, array3, size_3);


	prime_f(array1, size_1, array2, size_2, array_tmp, size_tmp);

	size_1 = 0;

	prime_f(array3, size_3, array_tmp, size_tmp, array1, size_1);

	cout<<"Result: ";

	for (int i = 0; i < size_1; ++i)
		cout << array1[i]<<" ";
	cout << endl;
}




void prime_f(int array1[20], int size_1, int array2[20], int size_2, int array_r[20], int &size_r)
{
	int k = 0;
	for (int i = 0; i < size_1; ++i)
	{
		for (int j = k; j < size_2; ++j)
		{
			if (array1[i] == array2[j])
			{
				array_r[size_r] = array1[i];
				++k; 
				++size_r; ++i;

				if (i == size_1)
					break;
			}
		}
	}
}

void prime(int num, int array[20], int &size)
{
	for(int i=2; i<=num;)
	{
		if(num % i == 0)
		{
			num=num/i;
			array[size++]=i;
			cout<<i<<endl;
		}

		else
		{
			++i;
		}
	}
}
