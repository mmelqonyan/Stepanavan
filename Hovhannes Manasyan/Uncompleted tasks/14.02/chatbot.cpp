#include <iostream>
using namespace std;
#include <string>
#include <ctime>
#include <time.h>

int hour1();

string bot();

int main ()
{
	bot();
}

string bot(){
	string answer;
	string barev="barev";
	string vonces="vonces";
	string lav="lav";
	string anunt_incha="";

	cout<<"Start dialog!"<<endl;
	cout<<"Hovo: ";
	cin>>answer;
	int a= 0;
	bool check = false;
	cout<<"BOT: ";
	for (int i = 0; i < answer.length(); ++i)
	{
		if(answer[i] == barev[a]){
			a++;
			if (a>4){
				check = true;
			}
			else
			{
				check = false;
			}
		}
	}
	int hour=hour1(); 
	if(check==true && hour>=0 && hour<=9){
		cout<<"Xi qnac ches"<<endl;
	}	
	else if(check==true && hour>=9 && hour<=12){
		cout<<"Bari luys"<<endl;
	}
	else if(check==true && hour>=12 && hour<=17){
		cout<<"Bari or"<<endl;
	}
	else if(check==true && hour>=17){
		cout<<"Bari ereko"<<endl;
	}
	else{
		cout<<"I don't understand you"<<endl;
	}
	cout<<"Hovo: ";
	cin>>answer;
	a= 0;
	check = false;
	cout<<"BOT: ";
	for (int i = 0; i < answer.length(); ++i)
	{
		if(answer[i] == vonces[a]){

			a++;

			if (a>4){
				check = true;

			}
			else
			{
				check = false;
			}
		}
	}

	if(check=true){
		cout<<"Lav em, du vonces?"<<endl;
	}
	else{
		cout<<"I don't understand you."<<endl;
	}	
	cout<<"Hovo: ";
	cin>>answer;
	a= 0;
	check = false;
	cout<<"BOT: ";
	for (int i = 0; i < answer.length(); ++i)
	{
		if(answer[i] == lav[a]){
			a++;
			if (a>3){
				check = true;
			}
			else
			{
				check = false;
			}
		}
	}
	if(check=true){
		cout<<"Anunt incha?"<<endl;
	}
	else{
		cout<<"I don't understand you."<<endl;
	}
	cout<<"Hovo: ";
	cin>>answer;
	a= 0;
	check = false;
	cout<<"BOT: ";
	for (int i = 0; i < answer.length(); ++i)
	{
		if(answer[i] == anunt_incha[a]){
			a++;
			if (a>2){
				check = true;
			}
			else
			{
				check = false;
			}
		}
	}
	if(check=true){
		cout<<"Urax em, BOT. Good bye!"<<endl;
	}
	else{
		cout<<"I don't understand you."<<endl;
	}
}
int hour1()
{
	time_t theTime = time(NULL);
	struct tm *aTime = localtime(&theTime);
	int hour=aTime->tm_hour;
	return hour;
}
