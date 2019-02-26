#include <iostream>
using namespace std;

int main () {
        int num1;
        int num2;
        int num3;
        int array1[20];
        int array2[20];
        int array3[20];
        int count1 = 0;
        int count2 = 0;
        int count3 = 0;
        cout<<"gri tiv"<<endl;
        cin>>num1;
	int baj;
        for (int baj = 2;baj<=num1;) {
                if (num1%baj==0){
                         num1=num1/baj;
                         array1[count1]=baj;
                         count1++;
                        cout<<count1<<"["<<baj<<"]"<<endl;
                		}

                else{
                         baj++;

           	     }
					 }


	cout<<"gri tiv"<<endl;
	cin>>num2;
        for (int baj = 2;baj<=num2;) {
                if (num2%baj==0){
                         num2=num2/baj;
                         array2[count2]=baj;
                         count2++;
                        cout<<count2<<"["<<baj<<"]"<<endl;
               			 }

                else{
                         baj++;

               	 }
					 }


	 cout<<"gri tiv"<<endl;
         cin>>num3;
         for (int baj = 2;baj<=num3;) {
                if (num3%baj==0){
                         num3=num3/baj;
                         array3[count3]=baj;
                         count3++;
                        cout<<count3<<"["<<baj<<"]"<<endl;
               			 }

                else{
                         baj++;

               	    }
 					}



}
