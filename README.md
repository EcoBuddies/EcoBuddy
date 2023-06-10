# EcoBuddy: The Recycling Companion

<p align="center" >
  <img width='40%' heigth='40%' src="https://github.com/BestHack-poggers/besthack-2023/blob/master/images/Character-green_Idle.gif" />
</p>

(*SLO*)
**EcoBuddy** je uporabniku prijazna mobilna aplikacija, ki uporablja strojno učenje za prepoznavanje in razvrščanje odpadkov s pomočjo kamere pametnega telefona. Uporabnik »skenira« odpadek, aplikacija pa mu poda informacijo o tem, v kateri zabojnik odpadek spada. Aplikacija vključuje tudi elemente igrifikacije za vključitev in izobraževanje uporabnikov, zlasti otrok, zaradi česar je postopek recikliranja interaktiven in koristen. EcoBuddy želi s svojim intuitivnim vmesnikom in razširljivim dizajnom opolnomočiti posameznike, da aktivno prispevajo k ravnanju z odpadki in jih s tem spodbuditi k trajnostnemu načinu življenja.

Uporabljene tehnologije:
- Frontend (React-Native -> podpora za iOS in Android)
- Backend (Node.js in Python flask)
- Tehnologije strojnega učenja (Konvolucijska nevronska mreža (CNN) za namen prepoznavanja slik odpadkov)

(*ANG*)
**EcoBuddy** is a mobile app for iOS and Android that offers an exclusive experience in the world of mobile gaming in the field of reducing carbon footprint. The user is assigned his pet, which he has to take care of. With this, we are targeting a younger population of users (up to 18 years old). Through various activities, including waste separation, the user tackles the challenge of caring for a pet, or in the extended sense - caring for our beloved planet Earth. The application is very easy to use, does not have any user-demanding elements and is of a lot of fun.

Technologies used:
- Frontend (React-Native -> support for both iOS and Android)
- Backend (Node.js + Python flask)
- Machine learning (Convolutional neural network (CNN) for purpose of waste/litter recognition)

# Zaslonske maske
<p align="center" >
  <img src="https://github.com/BestHack-poggers/besthack-2023/blob/master/images/Selection.png" />
</p>
<table>
  <tr>
    <td><img src="https://github.com/BestHack-poggers/besthack-2023/blob/master/images/Sign-in.png" /></td>
    <td><img src="https://github.com/BestHack-poggers/besthack-2023/blob/master/images/Sign-in-2.png" /></td>
    <td><img src="https://github.com/BestHack-poggers/besthack-2023/blob/master/images/Sign-in-3.png" /></td>
  </tr>
</table>
<table>
  <tr>
    <td><img src="https://github.com/BestHack-poggers/besthack-2023/blob/master/images/Character-customization.png" /></td>
    <td><img src="https://github.com/BestHack-poggers/besthack-2023/blob/master/images/Home-screen-2.png" /></td>
  </tr>
</table>
<table>
  <tr align="center">
    <td><img src="https://github.com/BestHack-poggers/besthack-2023/blob/master/images/Trash%20cans.png" /></td>
    <td><img src="https://github.com/BestHack-poggers/besthack-2023/blob/master/images/Trash%20cans-2.png" /></td>
  </tr>
</table>

# Rezultati strojnega učenja - konvolucijske nevronske mreže za klasifikacijo v 6 razredov (CNN)

* 6 razredov: papir, embalaža, steklo, biološki odpadki, zbirni center, ostalo
* Nepredtreniran model (z vso arhitekturo plasti - npr. od goščenja do ploščenja (Flatten()) v bottlenecku CNN) je na voljo ```machine-learning\model.py```.
* Za treniranje (*train dataset*) in ovrednotenje (*test dataset*) modela smo uporabili 22.596 slik, ki so bile pridobljene iz večih odprto-kodnih zbirk na Githubu.
* Razmerje med množico za treniranje in ovrednotenje modela je 70:30.

|  | Klasifikacijska točnost | AUC |
| ---------------|----------------|-----------------|
| **Nepredtreniran model** | 32.5 % | 0.44  |
| **ResNet50v2** | 60.5 % | 0.52  |
| **VGG16** | 62.3 % | 0.50 |
| **VGG19** | 64.0 % | 0.59  |
| **MobileNet** | 66.8 % | 0.59  |
| **EfficientNet** | 80.0 % | 0.71  |

# Člani ekipe

* Vita Potočnik
* Luka Tomažič
* Martin  Štrekelj
* Amadej Šenk
