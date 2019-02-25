#include <iostream>
#include <cmath>
#include <stdlib.h>
#include <vector>
using namespace std;

vector<int> baj(int num);
vector<int>stugum(vector<int>array1,vector<int>array2);

int main(){

  vector<int> array;
  vector<int> array2;
  vector<int> array3;
  vector<int> array4;

 int num;
 cout<<"Enter 1 number ";
 cin>>num;
 array = baj(num);

 cout<<"Enter 2 number ";
 cin>>num;
 array2 = baj(num);

 cout<<"Enter 3 number ";
 cin>>num;
 array3 = baj(num);

 array4 = stugum(stugum(array,array2),array3);

 for (int i = 0; i < array4.size(); ++i)
 {
 	cout<<"is equal "<<array4[i]<<endl;
 }


return 0;
}

vector<int> baj(int num)
{
	vector<int> array;
	for (int i = 1; i <= num; ++i)
	{
		if (num % i == 0)
		{
			array.push_back(i);
			cout<<"baj "<<i<<endl;
		}
	}
	return array;
}

vector<int>stugum(vector<int>array1,vector<int>array2)
{
	vector<int> tmp_array;
	for (int i = 0,j = 0; i < array1.size() && j < array2.size();)
	{
		if (array1[i] == array2[j])
		{
			tmp_array.push_back(array1[i]);
			++i; ++j;
		}
		else if(array1[i] < array2[j])
		{
			++i;
		}
		else
		{
			++j;
		}
	}

	return tmp_array;
}
