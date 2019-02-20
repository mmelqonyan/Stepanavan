#include <iostream>
#include <stdio.h>
#include <vector>
using namespace std;

int main (){

int tiv1;
int tiv2; 
int tiv3; 
int baj=2;
int k;
int i=0;
int k1=0,k2=0,k3=0;
cout<< " ";
cin>>tiv1;
cout<<endl<< " ";
cin>>tiv2;
cout<<endl<< " ";
cin>>tiv3;
int n; 
n=(tiv1/2+tiv2/2+tiv3/2)/6;
int divisor=1;

vector <int> Bajan1(tiv1/2);
vector <int> Bajan2(tiv2/2);
vector <int> Bajan3(tiv3/2);
      
        baj=2;
        cout<<endl<<"Bajan1= ";
        while (tiv1!=1){
                if (tiv1%baj==0){
                        Bajan1[i]=baj;
                        tiv1=tiv1/baj;
                        cout<<Bajan1[i]<<" ";
                        k1++;
                        i++;
                }
                else {
                        baj++;
                }
        }
        i=0;
        baj=2;
        cout<<endl<<"Bajan2= ";
        while (tiv2!=1){
              if (tiv2%baj==0){
                        
                     Bajan2[i]=baj;
                     tiv2=tiv2/baj;
                     cout<<Bajan2[i]<<" ";
                     k2++;
                     i++;
                }
                else {
                        baj++;
                }
}
        baj=2;
        i=0;
        cout<<endl<<"Bajan3= ";
        while (tiv3!=1){
                if (tiv3%baj==0){
                        
                         Bajan3[i]=baj;
                        tiv3=tiv3/baj;
                        cout<<Bajan3[i]<<" ";
                        k3++;
                        i++;
               }
                else {
                        baj++;
                }
        }
        k=(k1+k2+k3)/3;
     
        for (int i=0; i<k; i++){
            if (Bajan1[i]==Bajan2[i] && Bajan1[i]==Bajan3[i]){
                        divisor=divisor*Bajan1[i];
            }                
        }
        cout<<endl<<"Bajan= "<<divisor;
}


