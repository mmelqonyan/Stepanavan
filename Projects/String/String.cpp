#include <utility>
#include <iostream>
#include <string>
#include <algorithm>
using namespace std;



int search_spaces(string search);    // Hovhannes
int length(string search);           // Gor
int search_a(string search);         // Levon M.
int search_bb(string search);        // Varsik
int search_77(string search);        // Aren
string get_string();                 // Vahan
string reverse_str(string search);   // Edgar
string replace_spaces(string search);// Arman
int search_b_b(string str);          // Gayane
int search_1(string search);         // Vahe


int main() {

    cout << "Actions with strings" << endl;
    cout << "1. Search Spaces"<< endl;
    cout << "2. String Length"<< endl;
    cout << "3. Search Symbol 'a' "<< endl;
    cout << "4. Search Symbol 'bb'"<< endl;
    cout << "5. Search Number 77 "<< endl;
    cout << "6. Get String"<< endl;
    cout << "7. Reverse String"<< endl;
    cout << "8. Replace Spaces"<< endl;
    cout << "9. Search Symbol 'b_b' "<< endl;
    cout << "10. Search Number 1 "<< endl;

    cout<< "Input string " <<endl;
    string search;
    getline(cin,search);

    cout << "Choose the number of your action "<<endl;
    int number;
    cin>> number;
    
    
    

    switch(number){

        case 1: cout<<search_spaces(search)<<endl;
            break;
        case 2: cout<<length(search) << endl;
            break;
        case 3: cout<<search_a(search) <<endl;
            break;
        case 4: cout<<search_bb(search) <<endl;
            break;
        case 5: cout<<search_77(search) <<endl;
            break;
        case 6: cout<< get_string()<< endl;
            break;
        case 7: cout<<reverse_str(search) <<endl;
            break;
        case 8: cout<<replace_spaces(search)<<endl;
            break;
        case 9: cout<<search_b_b(search)<<endl;
            break;
        case 10: cout<<search_1(search)<< endl;
            break;

    }

    return 0;
}


int length(string search) {
    int result = 0;
    for (int i = 0; search[i] != '\0'; i++) {
        result++;
    }
    return result;
}

string replace_spaces(string search) {
    for (int i = 0; i < search.size(); ++i) {
        if (search[i] == ' ') {
            search[i] = '*';
        }
    }
    return search;
}

int search_a(string search) {
    int qanak = 0;
    for (int i = 0; i < search.size(); ++i) {
        if (search[i] == 'a') {
            ++qanak;
        }
    }
    return qanak;
}

int search_b_b(string search) {
    int result = 0;
    for (int i = 0; i < search.size(); ++i) {
        if (search[i] == 'b' && search[i + 2] == 'b') {
            ++result;
            ++i;
        }
    }
    return result;
}

string get_string() {
    string word;
    cout << "Please, enter your word: ";
    getline(cin, word);
    return word;
}

string reverse_str(string search) {
    int n = search.length();
    for (int i = 0; i < n / 2; i++)
        swap(search[i], search[n - i - 1]);
    return search;
}

int search_bb(string search) {
    int qanak = 0;
    for (int i = 0; i < search.size(); ++i) {
        if (search[i] == 'b' && search[i + 1] == 'b') {
            ++qanak;
            ++i;
        } 
    }
    return qanak;
}

int search_77(string search) {
    int result = 0;
    for (int i = 0; i < search.size(); ++i) {
        if (search[i] == '7' && search[i + 1] == '7') {
            ++result;
            ++i;
        }
    }
    return result;
}

int search_spaces(string search) {
    return count(search.begin(), search.end(), ' ');
}

int search_1(string search) {
    int result = 0;
        for(int i =0; search[i] != '\0';  ++i){
            if ( search[i]=='1'){
                ++result;
            }
        }


    return result;
}
