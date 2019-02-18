#include <iostream>
using namespace std;
int main(int argc, char * argv [])
{
    int one, two, three, del = 1;
 
    cout << "Mutqagreq ereq tiv: ";
    cin  >> one >> two >> three;
 
    for(int i = 1; i <= one; i++)
    {
        if(one % i == 0 && two % i == 0 && three % i == 0)
        {
            del = i;
        }
 
    }
 
    cout << "NOD: " << del << "\n";
 
    return 0;
}

