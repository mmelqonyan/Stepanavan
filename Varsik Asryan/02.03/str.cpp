#include <iostream>
#include <string>


using namespace std;

int main()
{
    string str1 ="Hello  World";
    string str2 ="Stepanavan ";
    string str3;

    
    int s1=str1.size();
    int s2=str2.size();
    int s3=str3.size();
    s3=s1 + s2;

    for (int i=0; i<6; i++){
        str3[i]=str1[i];
        cout<<str3[i];
    }


      for(int j=0; j<s2; j++){
        str3[6+j]=str2[j];
        cout<<str3[6+j];
       
        
     }
   
     for(int l=6; l<s1; l++){

           cout<< str1[l];
    }
      

  

}
