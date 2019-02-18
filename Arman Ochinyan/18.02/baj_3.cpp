#include <iostream>
#include <string>
#include <cmath>
#include <stdlib.h>

using namespace std;

int baj_3 ();

int main(){

cout << baj_3()<<endl;

return 0;
}

int baj_3 ()
{
    int arr[3],tmp;
    for (int i = 0; i < 3; ++i)
    {
        cout<<"enter number ";
        cin>>arr[i];
    }
   

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
            return i;
       }
   }

}