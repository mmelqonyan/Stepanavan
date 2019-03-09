#include <iostream>
using namespace std;
int getint();
int getcheck();


int main() {   
    int check=getcheck();
    cout<<check;
}

int getint() {
   cout<<"Enter the number: ";
   int number;
   cin>>number;
   return number;
}
int getcheck() {
    int check=getint();
    if (check % 2 == 0)
    {
        cout<<" Is a even number.";
    }
    else 
       {
          cout<<" Is a non even number.";
          
       }
     return check; 
    
}

