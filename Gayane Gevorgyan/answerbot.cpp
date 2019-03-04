#include <iostream>
#include <string>
#include <cstdlib>

using namespace std;

void intelect();
int main(){
intelect();
return 0;
}
void  intelect(){

        string pat[]={"Bari luys","Bari or","Bari ereko","Inchu qnats ches?"};
        string vonc[]={"Amen inch lav e","Hrashali", "Shat lav em"};
        string zbagh[]={"Che, azat em", "Ha, shat gortser unem", "Mi qich"};
        string zruyc[]={"Ayo","Iharke","Ete uzum es"};
        string krt[]={"Hamalsaranum", "Dprocum", "Arden avartel em"};
        string grogh[]={"Tumanyan", "Mark Tven", "Dyuma"};
        string erg[]={"Rihana", "Jo Coker", "Aznavur"};
        string hang[]={"Tsov", "Europa","kghziner"};
        string eraz[]={"Linel ashxarhi geghatesil vayrerum", "Sirelineris erjanik tesnel", "Ankaxutyun"};
        string guyn[]={"Karmir","Kapuyt","Spitak"};
        string ton[]={"Tnndyan ton", "Nor Tari", "Zatik"};
        string mirg[]={"Elak", "Nur", "Khaghogh"};
        string kend[]={"Shun", "Dzi", "Vagr"};
        string hobbi[]={"Elektronika", "Nkarchutyun", "Erazhshtutyun"};
        string egh[]={"Amar", "Garun", "Ashun"};
        string sport[]={"Futbol","Geghasahq", "Marmnamarzutyun"};
        string khumb[]={"Scorpions", "Queen", "Aerosmith"};

        string harc;
        int i;

        time_t now = time(NULL);
        struct tm *aTime = localtime(&now);
        int hour=aTime->tm_hour+4;

        while (true) {
            getline(cin,harc);

            if (harc.find("Barev"||"barev")){
                if (hour>=8 && hour<12){
                     cout<<pat[0]<<endl;
                     }

                
                 else if (hour>=12 && hour<16){
                        cout<<pat[1]<<endl;
                        }
                    else if (hour>=16 && hour<22){
                        cout<<pat[2]<<endl;
                        }
                    else {
                    cout<<pat[3]<<endl;
                        }
                break;
            }
       }

        while (true){
            i=rand()%3;
            getline(cin,harc);
            if (harc.find("Vonc es")){
                cout<<vonc[i]<<endl;
                break;
            }
        }
        while (true){
            i=rand()%3;
            getline(cin,harc);
            if (harc.find("Zbaghvats es?")){
cout<<zbagh[i]<<endl;
                break;
            }
        }
        while (true){
            i=rand()%3;
            getline(cin,harc);
            if (harc.find("Zrucenq")){
                cout<<zruyc[i]<<endl;
                break;
            }
        }
        while (true){
            i=rand()%3;
            getline(cin,harc);
            if (harc.find("Sovorum es")){
                cout<<i<<krt[i]<<endl;
                break;
            }
        }
        while (true){
            i=rand()%3;
            getline(cin,harc);
            if (harc.find("Ergich")){
                cout<<erg[i]<<endl;
                break;
            }
        }
        while (true){
            i=rand()%3;
            getline(cin,harc);
            if (harc.find("Grogh")){
                cout<<grogh[i]<<endl;
                break;
            }
        }
        while (true){
            i=rand()%3;
            getline(cin,harc);
            if (harc.find("Hangist")){
 cout<<hang[i]<<endl;
                break;
            }
        }
        while (true){
            i=rand()%3;
            getline(cin,harc);
            if (harc.find("Erazanq")){
                cout<<eraz[i]<<endl;
                break;
            }
        }
        while (true){
            i=rand()%3;
            getline(cin,harc);
            if (harc.find("Guyn")){
                cout<<guyn[i]<<endl;
                break;
            }
        }
        while (true){
            i=rand()%3;
            getline(cin,harc);
            if (harc.find("Ton")){
                cout<<ton[i]<<endl;
                break;
            }
        }
        while (true){
            i=rand()%3;
            getline(cin,harc);
            if (harc=="Mirg"){
                cout<<mirg[i]<<endl;
                break;
            }
        }
        while (true){
            i=rand()%3;
            getline(cin,harc);
            if (harc.find("Kendani")){
 cout<<kend[i]<<endl;
                break;
            }
        }
        while (true){
            i=rand()%3;
            getline(cin,harc);
            if (harc.find("Eghanak")){
                cout<<egh[i]<<endl;
                break;
            }
        }
        while (true){
            i=rand()%3;
            getline(cin,harc);
            if (harc.find("Hobbi")){
                cout<<hobbi[i]<<endl;
                break;
            }
        }
        while (true){
            i=rand()%3;
            getline(cin,harc);
            if (harc.find("Sport")){
                cout<<sport[i]<<endl;
                break;
            }
        }
        while (true){
            i=rand()%3;
            getline(cin,harc);
            if (harc.find("Khumb")){
                cout<<khumb[i]<<endl;
                break;
            }
        }

}



