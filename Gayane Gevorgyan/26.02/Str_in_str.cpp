#include <iostream>
#include <string>
using namespace std;

int main(){

        string str1;
        string str2;
	string STR;
        int num;
	cout << "Enter String: ";
	cin>> str1;
        cout << "Bar:  ";
        cin>>str2;
	cout << "Position: ";
	cin>> num;
	if (num<str1.size()){
		int size = str1.size();
		string sstr1= str1.substr(0, num);
		string sstr2= str1.substr (num+1,size);

		cout <<sstr1<<str2<<sstr2;
	}
	else {
	cout <<"Your input is longer than string size.";
	}
        
        cout<<STR<<endl;

}

