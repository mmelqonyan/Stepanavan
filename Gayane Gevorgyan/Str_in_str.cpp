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
	int s1=str1.size();
	int s2=str2.size();

	if (num<s1){
		
		for(int i=0;i<num; i++){
			STR[i]=str1[i];
			cout<<STR[i];
		 }
		for (int j=0; j<s2; j++){
			STR[num+j]=str2[j];
			cout << STR[num+j];				
		}			
		for (int k=num; k<s1; k++){
			STR[s2+k]=str1[k];
			cout << STR[s2+k];
			} 
	}
	else {
	cout <<"Your input is longer than string size.";
	}
        
        cout<<STR<<endl;

}

