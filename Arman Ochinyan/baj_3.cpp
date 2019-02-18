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
   int num1,num2,num3,tmp;

   cin>>num1>>num2>>num3;
   
   tmp = num1;

   if(num1 > num2)
   {
       tmp = num2;
   }
   if(num3 < tmp)
   {
       tmp = num3;
   }

   for (int i = tmp; i > 0; --i)
   {
       if(num1 % i == 0 && num2 % i == 0 && num3 % i == 0)
       {
            return i;
       }
   }

}