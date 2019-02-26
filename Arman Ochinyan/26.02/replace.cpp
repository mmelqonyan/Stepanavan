#include <iostream>
#include <string>
#include <vector>

using namespace std;
 
string insert1(string word,string word2,int index);

 
int main(){
    
    string str,str2;
    int index;

    cout<<"Enter 1 word ";
    getline(cin,str);

    cout<<"Enter 2 word ";
    getline(cin,str2);
cout<<str2.size()<<endl;
    do{
    cout<<"Enter index ";
    cin>>index;
    }while(index > str.size());

    cout <<"Insert word = "<<insert1(str,str2,index)<< endl;

return 0;
}

string insert1(string word,string word2,int index)
{
    
   word.replace (index,0,word2);

return word;
}