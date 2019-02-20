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
    
   int num1,num2,num3,tmp;
   cin>>num1>>num2>>num3;
   
   int count = 0;
   for (int i = num1; i > 0; --i)
   {
   		if(num1 % i == 0)
   		{
          arr[count++] = i;
          cout<<arr[count-1]<<endl;
   		}
   }
    count = 0;
   for (int i = num2; i > 0; --i)
   {
      if(num2 % i == 0)
      {
          arr1[count++] = i;
          cout<<arr1[count-1]<<endl;
      }
   }
   count = 0;
   for (int i = num3; i > 0; --i)
   {
      if(num3 % i == 0)
      {
          arr2[count++] = i;
         cout<<arr2[count-1]<<endl;
      }
   }
        arr[0] = num1;
        arr[1] = num2;
        arr[2] = num3;
        tmp = arr[0];

   if(arr[0] > arr[1])
   {
       tmp = arr[1];
   }
   if(arr[2] < tmp)
   {
       tmp = arr[2];
   }

   for (int i = tmp; i > 0; --i)
   {
       if(arr[0] % i == 0 && arr[1] % i == 0 && arr[2] % i == 0)
       {
            cout<<i<<endl;
       }
   }

   
      
}
