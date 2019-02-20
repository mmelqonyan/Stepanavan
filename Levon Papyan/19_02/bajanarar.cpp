#include <iostream>
#include <vector>

using namespace std;
void amenamec_yndhanur_bajanarar(vector<int> array);
vector<int> yndhanur_bajanarar(int x, int y, int z);

int main() {
    vector<int> array;

    int x;
    int y;
    int z;
    cout << "x - : " <<endl;
    cin >>x;
    cout << "y - : "<<endl;;
    cin >>y;
    cout << "z - : "<<endl;;
    cin >>z;

    array = yndhanur_bajanarar(x, y, z);


    amenamec_yndhanur_bajanarar(array);

    return 0;
}

void amenamec_yndhanur_bajanarar(vector<int> array) {
    for (int k = 0;  k < array.size(); ++k) {
            cout << array[k] << endl;
    }
}

vector<int> yndhanur_bajanarar(int x, int y, int z){
    vector<int> bajanararner;
    for (int i = 2; i <= x ; ++i) {
        if(x%i == 0 && y%i == 0 && z%i == 0){
            bajanararner.push_back(i);
        }
    }
    return bajanararner;
}
