#include<iostream>
#include <stdio.h>
#include <vector>

using namespace std;

int main() {


	int tiv1;
	int tiv2;
	int tiv3;
	int baj=2;



	int i=0;


	cout<<" tiv1";
	cin>> tiv1;
	cout<< " tiv2";
	cin>> tiv2;
	cout<< "tiv3";
	cin>> tiv3;


	vector <int> array1(tiv1/2);
	vector <int> array2(tiv2/2);
	vector <int> array3(tiv3/2);




	while(tiv1!=1){
		if(tiv1%baj == 0){

			array1[i] =baj;
			cout<< array1[i] << " ";
			tiv1 = tiv1/baj;
			++i;


		}
		else{
			++baj;
		}
	}    

	i=0;
	baj = 2;
         cout<<endl;



	while(tiv2!=1){
		if(tiv2%baj == 0){

			array2[i] =baj;
			

			cout<< array2[i] << " ";
			tiv2 = tiv2/baj;
			++i;


		}
		else{
			++baj;
		}

	}    


	i=0;
	baj = 2;
	cout<<endl;

	while(tiv3!=1){
		if(tiv3%baj == 0){

			array3[i] =baj;
			
			cout<< array3[i] << " ";
			tiv3 = tiv3/baj;
			++i;


		}
		else{
			++baj;
		}   
	}




	return 0;
}





































