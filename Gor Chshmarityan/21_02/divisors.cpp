#include <iostream>
using namespace std;

void prime(int num, int arr[20], int &size);
void prime_f(int arr1[20], int sz1, int arr2[20], int sz2, int arr_r[20], int &sz_r);
int main()
{
	int arr1[20],arr2[20],arr3[20],arr_tmp[20];
	int sz1=0,sz2=0,sz3=0,sz_tmp=0;
	int num;

	cout<<"Num1: ";
	cin>>num;

	prime(num, arr1, sz1);

	cout<<"Num2: ";
	cin>>num;

	prime(num, arr2, sz2);

	cout<<"Num3: ";
	cin>>num;

	prime(num, arr3, sz3);

	prime_f(arr1, sz1, arr2, sz2, arr_tmp, sz_tmp);
	sz1 = 0;
	prime_f(arr3, sz3, arr_tmp, sz_tmp, arr1, sz1);
	cout<<"Result: ";
	for (int i = 0; i < sz1; ++i)
		cout << arr1[i]<<" ";
	cout << endl;
}




void prime_f(int arr1[20], int sz1, int arr2[20], int sz2, int arr_r[20], int &sz_r)
{
	int k = 0;
	for (int i = 0; i < sz1; ++i)
	{
		for (int j = k; j < sz2; ++j)
		{
			if (arr1[i] == arr2[j])
			{
				arr_r[sz_r] = arr1[i];
				++k; 
				++sz_r; ++i;

				if (i == sz1)
					break;
			}
		}
	}
}

void prime(int num, int arr[20], int &size)
{
	for(int i=2; i<=num;)
	{
		if(num % i == 0)
		{
			num=num/i;
			arr[size++]=i;
			cout<<i<<endl;
		}

		else
		{
			++i;
		}
	}
}

