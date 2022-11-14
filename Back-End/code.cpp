
// See the Device Info tab, or Template settings
#define BLYNK_TEMPLATE_ID "TMPLGLaTUlyW"
#define BLYNK_DEVICE_NAME "temperature"
#define BLYNK_AUTH_TOKEN "dLCvIJb6KkGtjuRT4rpoCK-DdCfhZTL3"
bool enableHeater = false;

#define BLYNK_PRINT Serial
#include "Adafruit_Si7021.h"    // sensor library
#include <ESP8266WiFi.h>       // Processor library
#include <BlynkSimpleEsp8266.h> // web library

Adafruit_Si7021 sensor = Adafruit_Si7021();    // define temp sensor


// Your WiFi credentials.
// Set password to "" for open networks.
char ssid[] = "kasher";
char pass[] = "0543343694";
char auth[] = BLYNK_AUTH_TOKEN;

WidgetLED led1(V1);



void setup() {
  Blynk.begin(auth, ssid, pass);
Serial.begin(115200);
sensor.begin();
pinMode(5, OUTPUT);// Set pin 12 to output
pinMode(4, OUTPUT);// Set pin 15 to output
}
double pTemp = 0 , cTemp;
void loop() { // add average of temperature for led lights (using linked list)
  Blynk.run();   
  cTemp = sensor.readTemperature();
  Serial.println(cTemp, 2);
  Blynk.virtualWrite(V8, cTemp);   // send value of temp to api 
  if(cTemp < pTemp )
  {
     digitalWrite(5 , HIGH);
     digitalWrite(4 , LOW);
  }
  else if(cTemp > pTemp )
  {
     digitalWrite(4 , HIGH);
     digitalWrite(5 , LOW);
  }
  pTemp = cTemp;
  delay(1000);
BlynkTimer timer;
  

  //Blynk.virtualWrite(V1, 0);

}