#include <iostream>
#include <cmath>
#include <stdlib.h>
#include <vector>

using namespace std;
string ins(string a, string b, int x);

int main(){

string z,x;

getline(cin,z);
cin>>x;


int num;
cout<<"Enter nomer ";
cin>>num;

cout<<ins(z,x,num)<<endl;

return 0;
}

string ins(string a, string b, int x)
{
    string tmp,str;

    for (int i = x; i < a.size(); ++i)
    {
        tmp += a[i];
        
    }

    for (int i = 0; i < b.size(); ++i)
    {
        a[x + i] = b[i];
    }

    a += tmp;

return a;

}
