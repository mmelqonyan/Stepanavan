#include <iostream>
 
using namespace std;
 
int G(int a, int b){
    
    while (a != 0 && b != 0)
        if (a > b)
            a = a%b;
        else
            b = b%a;
    return a + b;
}
 
int main(){
    
    int a, b, c;
    do{
        cout << "a: b: c:";
        cin >> a >> b >> c;
    }while (a < 0 || b < 0 || c < 0);
    
    cout << G(G(a, b), c) << endl;
}

