#include <iostream>
#include <stdio.h>
using namespace std;


int main (){

int num1;
int num2;
int num3;
int div=2;

cout<< "Enter Number1: ";
cin>>num1;
cout<<endl<< "Enter Number2: ";
cin>>num2;
cout<<endl<< "Enter Number3: ";
cin>>num3;
int n=(num1+num2+num3)/3;
int divisors[n];
for (int i=0; i<=n; i++){
	if (num1%div==0){
		if (num2%div==0){
			if(num3%div==0){
				divisors[i]=div;
				cout<<div<<", ";
			}
		}
	}
	div++;
}
 

}

