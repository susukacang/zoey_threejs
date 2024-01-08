// Read section 7 of reading material
#include <iostream>
using namespace std;

int divideBy(int x, int y) {
    return x/y;
}

int quot(int x, int y) {
//  cout << (float)x/(float)y << endl;
 return x/y;    // ver 0 / C implementation
//  cout << floor((float)x/(float)y) << "\t";
//  return floor((float)x/(float)y);    // ver -infinity / python implementation

}

int rem(int x, int y) {
    // ver 0 / C implementation
    // return copysign(1,x) * abs( x % y ); // this is not modulus   i.e. -3%2 returns -1 (integer division and modulus as implemented in C). instead, we want -3%2 return 1 positive when y is positive
    return x % y;

    // ver -infinity / python implementation
    // cout<<x-quot(x,y)*y<<endl;
    // return x-quot(x,y)*y;
}

bool result(int x, int y) {
    return quot(x,y) * y + rem(x,y) == x;
}

int main () {
    cout << 7%5 << -7%5 <<endl;
    // cout << divideBy(-3,2) << endl;   // returns -1
    // int testx = 2;
    // int testy = -3;
    // cout << "quot(" << testx << "," << testy << ") * " << testy << " = " << quot(testx,testy) << endl;   // returns -2
    // cout << testx % testy << endl;
    // cout << "rem(" << testx << "," << testy << ") = " << rem(testx,testy) << endl;
    // cout << "quot(" << testx << "," << testy << ") * " << testy << " + " << "rem(" << testx << "," << testy << ") = " << quot(testx,testy) * testy + rem(testx,testy) << endl;
    // cout << endl;
    for(int x = -5; x < 6; x++) {
        for(int y = -4; y < 5 ; y==-1 ? y+=2 : y++) { 
            cout << "quot(" << x << "," << y << ") * " << y << " = " << quot(x, y) * y << "\t";
            cout << "rem(" << x << "," << y << ") = " << rem(x, y) << "\t\t";
            cout << "quot(" << x << "," << y << ") * " << y << " + rem(" << x << "," << y << ") == " << x << " is " << result(x,y) << endl;
        }
    }

    
  return 0;
}