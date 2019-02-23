#include <iostream>
#include <string>
using namespace std;

int main(){

	string str1 ("Stepanavan");
	string str2;
	int num; 
	cout << "Bar:  "<<endl;
	cin>>str2;
	cout <<"Bari dirqy: "<<endl;
	cin>>num;
	str1.insert(num,str2);
	cout<<str1<<endl;

}


