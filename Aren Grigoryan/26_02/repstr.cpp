#include <iostream>
#include <string>
using namespace std;
string insert(string word1, int index, string word2);

int main(){
       string word1;
       string word2;
       int index;
       cout<<"Enter first word: ";
       getline(cin,word1);
       cout<<"Enter second word: ";
       getline(cin,word2);
       cout<<"Enter index: ";
       cin>>index;
       cout<<insert(word1, index, word2);
}

string insert(string word1, int index, string word2)
{
       string right_part_of_index;
       string left_part_of_index;
       string result;
       for (int i = index; i < word1.size(); ++i)
       {
               right_part_of_index += word1[i];
       }
       for(int i = 0; i < index; ++i){

               left_part_of_index += word1[i];
       }


       result=left_part_of_index + word2 + right_part_of_index;



       return result;

}
