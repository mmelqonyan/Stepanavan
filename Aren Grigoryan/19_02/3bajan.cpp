#include <iostream>
using namespace std;

int main () {
      int a, b, c, x, i; 
      cout<<"gri 3 tiv"<<endl;

      cin>>a>>b>>c;
      x=b;
      if(a<b){
              x=a;
      }
      if(x>c){
              x=c;
      }
	i = x;
      while ((a % i != 0) || (b % i !=0) || (c % i !=0))
      {
	i-=1;
	
      

    } 
	cout<<i;
	return 0;

 }



      




