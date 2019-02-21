#include <iostream>
#include <cmath>
#include <stdlib.h>
#include <vector>

using namespace std;

vector<int> tesq(int num);
vector<int> baj_3 (vector<int>arr,vector<int>arr2);


int main()
{
  vector<int> array;
  vector<int> array2;
  vector<int> array3;
  vector<int> array4;
  
   int num,tmp = 1;

   cout<<"Մուտքագրեք թիվ 1 = ";
   cin>>num;
   array = tesq(num);

   cout<<"\nՄուտքագրեք թիվ 2 = ";
   cin>>num;
   array2 = tesq(num);

   cout<<"\nՄուտքագրեք թիվ 3 = ";
   cin>>num;
   array3 = tesq(num);
   
    cout<<endl;
   array4 = baj_3(baj_3(array,array2),array3);

   for (int i = 0; i < array4.size(); ++i)
   {
       tmp *= array4.at(i);
       cout<<"Համընկնում են - "<<array4.at(i)<<endl;
   }
    

   cout<<endl<<"Բազմապատկած - " <<tmp<<endl;
return 0;
}


vector<int> baj_3 (vector<int>arr,vector<int>arr2)
{
    vector<int>tmp;
    int count = 0;
    int arr_sz = arr.size();
    int arr_sz2 = arr2.size();
    

   for(int i = 0; i < arr_sz;++i)
    { 
        for(int j = count;j < arr_sz2;++j)
        { 
            if (arr[i] == arr2[j])
            {
                tmp.push_back(arr[i]);
                ++count;
                ++i;
            } 
           
        }
            
    }
    return tmp;
 }

vector<int> tesq(int num)
{
    vector<int>array;
    for (int i = 2; i < num*10;)
    {
    
        if(num % i == 0)
        {
            
            array.push_back(i);
            cout<<"Բաժանարար "<<i<<endl;
            num /= i;
            
        }
        else
        {
            i++;
        }
    }
    return array;
}
