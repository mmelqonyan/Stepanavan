#include <iostream>

#include <cmath>
#include <stdlib.h>

using namespace std;

void baj_3 ();

int main(){

 baj_3();

return 0;
}

void baj_3 ()
{
    int arr[20],arr1[20],arr2[20];
    
   int num1,num2,num3;
   cout<<"Մուտքագրեք թիվ 1 = ";
   cin>>num1;
   cout<<"Մուտքագրեք թիվ 2 = ";
   cin>>num2;
   cout<<"Մուտքագրեք թիվ 3 = ";
   cin>>num3;


   int count = 0;
   for (int i = num1; i > 0; --i)
   {
        if(num1 % i == 0)
        {
          arr[count++] = i;
          //cout<<"count = "<<count<<endl;
        }
   }
   int count1 = 0;
   for (int i = num2; i > 0; --i)
   {
      if(num2 % i == 0)
      {
          arr1[count1++] = i;
         // cout<<"count1 = "<<count1<<endl;
      }
   }
   int count2 = 0;
   for (int i = num3; i > 0; --i)
   {
      if(num3 % i == 0)
      {
          arr2[count2++] = i;
         //cout<<"count2 = "<<arr2[count2-1]<<endl;
      }
   }
        
   for (int i = 0; i < count ; ++i)
   {
       for (int j = 0; j < count1 ; ++j)
       {
           for (int k = 0; k < count2; ++k)
           {
               if (arr[i] == arr1[j] && arr[i] == arr2[k])
               {
                   cout<<"Ընդհանւր է "<<arr[i]<<endl;
               }
           }
       }
   }

   
      
}
