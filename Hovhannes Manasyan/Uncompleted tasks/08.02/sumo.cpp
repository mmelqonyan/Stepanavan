#include <iostream>
using namespace std;

int sum_digits(); 

int main()
{
	sum_digits();
}
  
	int sum_digits()
	{
    	int n;
    	int sum=0;
    
	cout<< "Enter the number = ";
    	cin>>n;

     		 while (n!=0)
   	 	 {	
       	 	   sum = sum + n%10;
       	 	   n = n / 10;
    		 }	 
        		
		cout<<"sum = "<<sum<<"\n";
	}	

  

