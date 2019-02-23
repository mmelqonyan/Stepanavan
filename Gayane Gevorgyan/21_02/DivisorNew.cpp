#include <iostream>
#include <stdio.h>
#include <vector>
using namespace std;

int main (){

int num1, num2, num3;
int div=2;
int i=0;
int k1=0,k2=0,k3=0;
cout<< "Enter Number1: ";
cin>>num1;
cout<<endl<< "Enter Number2: ";
cin>>num2;
cout<<endl<< "Enter Number3: ";
cin>>num3;
 
int divisor=1;

vector <int> Div1(num1/2);
vector <int> Div2(num2/2);
vector <int> Div3(num3/2);
      
        div=2;
        cout<<endl<<"Div1= ";
        while (num1!=1){
                if (num1%div==0){
                        Div1[i]=div;
                        num1=num1/div;
                        cout<<Div1[i]<<" ";
                        k1++;
                        i++;
                }
                else {
                        div++;
                }
        }
        i=0;
        div=2;
        cout<<endl<<"Div2= ";
        while (num2!=1){
                if (num2%div==0){
                     
                         Div2[i]=div;
                        num2=num2/div;
                        cout<<Div2[i]<<" ";
                        k2++;
                        i++;
                }
                else {
                        div++;
                }
}
        div=2;
        i=0;
         cout<<endl<<"Div3= ";
        while (num3!=1){
                if (num3%div==0){
                     
                         Div3[i]=div;
                        num3=num3/div;
                        cout<<Div3[i]<<" ";
                        k3++;
                        i++;
               }
                else {
                        div++;
                }
        }
       //k=(k1+k2+k3)/3;
     for (int j = k1; j>0; j--    ){
               for( int i=0; i<k2; i++){
                        for (int l=0; l<k3; l++){
                               if (Div1[j]==Div2[i] && Div1[j]==Div3[l]){
                                    divisor=divisor*Div1[j];
                                    Div2.erase(Div2.begin()+i);
                                    Div3.erase(Div3.begin()+l);
                                }
                        }   
                } 
     }
        cout<<endl<<"DIVISOR= "<<divisor;
}
