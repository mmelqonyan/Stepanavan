#include <iostream>
#include <cmath>
using namespace std;

int degree(int num1, int num2);
int sum(int num1, int num2);
int minuss(int num1, int num2);
int mnacord(int num1, int num2);
int baj(int num1, int num2);
int hamematum(int num1, int num2);
int procent(int num1, int num2);
double cubest (int num1,int num2);
int bazm (int num1,int num2);
int main()
{
	int num1, num2;
	char symbol;

	cout<<"Մուտ քա գրեք որևէ          symbol"<<endl;
	cout<<"Գումա րում                   +"<<endl;
	cout<<"Հա նում                      -"<<endl;
	cout<<"Հա մեմա տ ում                <>"<<endl;
	cout<<"Բա ժա նում                   /"<<endl;
	cout<<"Բա զմա պ ա տ կում            *"<<endl;
	cout<<"Մ նա ցորդ                    %"<<endl;
	cout<<"Տոկոս                        $"<<endl;
	cout<<"Թ վի ա ստ իճա ն              ^"<<endl;
	cout<<"Թ վի ա րմա տ   խ որա նա րդ    @"<<endl<<endl;



	cout<<"Enter first number: ";
	cin>>num1;
	cout<<"Enter second: ";
	cin>>num2;
	cout<<"Enter symbol: ";
	cin>> symbol;

	switch(symbol){

		case '+':
			cout<<"RESULT:  "<<sum(num1,num2)<<endl;
			break;

		case '<':
			cout<<"RESULT:  "<<hamematum(num1,num2)<<endl;
			break;
		
		case '>':
                        cout<<"RESULT:  "<<hamematum(num1,num2)<<endl;
                        break;
		
		case '-':
			cout<<"RESULT:  "<<minuss(num1,num2)<<endl;
			break;

		case '/':
			cout<<"RESULT:  "<<baj(num1,num2)<<endl;
			break;

		case '%':
			cout<<"RESULT:  "<<mnacord(num1,num2)<<endl;
			break;

		case '^':
			cout<<"RESULT:  "<<degree(num1,num2)<<endl;
			break;

		case '$':
			cout<<"RESULT:  "<<procent(num1,num2)<<endl;
			break;

		case '@':
			cout<<"RESULT:  "<<cubest(num1,num2)<<endl;
			break;

		case '*':
			cout<<"RESULT:  "<<bazm(num1,num2)<<endl;
			break;
	}


}





int hamematum(int num1, int num2)
{
	if(num1>num2)
	{
		return num1;

	}
	else
	{
		return num2;
	}
}

int minuss(int num1, int num2)
{
	int result;
	result = num1 - num2;
	return result;
}

int sum (int num1, int num2)
{
	int result;
	result=num1 + num2;
	return result;
}

int baj (int num1, int num2)
{
	int result;
	if(num2 == 0)
	{
		return 0;
	}
	else
		result=num1/num2;
	return result;
}

int degree(int num1, int num2){
	int result=1;
	if (num2>0){
		for (int i=0; i<num2; i++){
			result*=num1;
		}
		return result;
	}else{
		return 1;
	}
}

int procent(int num1,int num2)

{

	int result;
	result = num1*num2/100;
	return result;
}

int mnacord(int num1, int num2){
	int result;
	result=num1%num2;
	return result;
}

double cubest (int num1,int num2){
	cin.ignore(num2);
	if (num1<0){
		double result =- pow(-num1, 1.0/3.0);
		return result;
	} else if(num1>0) {
		double result = pow(num1, 1.0/3.0);
		return result;
	} else {
		return 0;
	}

}

int bazm (int num1,int num2){
	int result;
	result=num1*num2;
	return result;
}
