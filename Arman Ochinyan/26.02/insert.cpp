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

    do{
    cout<<"Enter index ";
    cin>>index;
    }while(index > str.size());
    
    cout <<"Insert word = "<<insert1(str,str2,index)<< endl;

return 0;
}

string insert1(string word,string word2,int index)
{
   
    string tmp = word;

    tmp.erase (0,index);

    word.erase (index,word.size());

    word += word2;

    word += tmp;

return word;
}