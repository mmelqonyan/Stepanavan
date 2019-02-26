#include <iostream>
using namespace std;

int main(){
	int qan = 0;
	int mod = 2;
	int num;

	cout <<"Enter number:  ";
	cin >> num;
	while( mod <= num){
		if (num%mod == 0){
		qan++;
		}
		mod++;
	}
	if (qan==1){
		cout<<"Number is simple"<<endl;
	}
	else{
		cout<<"Number isn't simple"<<endl;
	}
	return 0;

}
