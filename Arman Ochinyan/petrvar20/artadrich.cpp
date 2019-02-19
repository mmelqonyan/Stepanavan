#include <iostream>
#include <cmath>
#include <stdlib.h>

using namespace std;

void baj_3 (int n1,int n2,int n3);
void tesq(int x);
int main(){

  int num1,num2,num3;
   cout<<"Մուտքագրեք թիվ 1 = ";
   cin>>num1;
   tesq( num1);

   cout<<"\nՄուտքագրեք թիվ 2 = ";
   cin>>num2;
   tesq( num2);


   cout<<"\nՄուտքագրեք թիվ 3 = ";
   cin>>num3;
   tesq( num3);
   
   baj_3(num1,num2,num3);

return 0;
}

void baj_3 (int n1,int n2,int n3)
{
    int array[20];
    int a = 0;
    for (int i = 2; i <= n1;i++)
    {
        if(i >= n2 || i >= n3 )
        {
            return;
        }
          
        while(n1 % i == 0 && n2 % i == 0 && n3 % i == 0 )
        {     
            array[a++] = i; 
            cout<<"result "<< array[a-1]<<endl; 
            n1 /= i;
            n2 /= i;
            n3 /= i;
                
        }
    }

    return;
}
   
void tesq(int x)
{
    int count = 0;
    int arr[20];
    for (int i = 2; i < x*10;)
    {
    
        if(x % i == 0)
        {
             arr[count++] = i;
             x /= i;
             cout<<arr[count-1]<<"  ";
        }
        else
        {
            i++;
        }
    }
    cout<<endl;
return;
}
