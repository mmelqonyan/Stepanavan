#include <iostream>
#include <vector>

using namespace std;
vector<int> gtnel_bajanararnery(int, int, int);

int main() {
    int x;
    int y;
    int z;
    cout << "x - : ";
    cin >> x ;
    cout << endl << "y - : ";
    cin >>y;
    cout << endl << "z - : ";
    cin >> z;

    vector<int> arr = gtnel_bajanararnery(x,y,z);

    for(int i = 0 , size = arr.size(); i < size; i++)
    {
        cout<< arr[i] << " ";
    }

    return 0;
}

vector<int> gtnel_bajanararnery(int a, int b, int c)
{
    vector<int> bajanararner;
    for(int i = 2; i <= a; ++i){ 
        if(a % i == 0 && b % i == 0 && c % i == 0) {
            bajanararner.push_back(i); 
        }
    }
    return bajanararner;
}


