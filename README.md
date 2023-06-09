# EcoBuddy: The Recycling Companion

<p align="center" >
  <img width='40%' heigth='40%' src="https://github.com/BestHack-poggers/besthack-2023/blob/master/images/Character-green_Idle.gif" />
</p>

# Opis

<p align="justify"> 
  <b>EcoBuddy</b> je uporabniku prijazna <b>mobilna aplikacija</b> za iOS in Android, ki uporablja strojno učenje <b>za prepoznavanje in razvrščanje odpadkov</b> s pomočjo kamere pametnega telefona. Uporabnik »skenira«  odpadek, aplikacija pa mu poda informacijo o tem, v kateri zabojnik odpadek spada. Aplikacija vključuje tudi elemente <b>igrifikacije</b> za vključitev in izobraževanje uporabnikov, zlasti otrok, zaradi česar je postopek recikliranja interaktiven in koristen. EcoBuddy želi s svojim intuitivnim vmesnikom in razširljivim dizajnom opolnomočiti posameznike, da aktivno prispevajo k ravnanju z odpadki ter jih s tem spodbuditi k trajnostnemu načinu življenja. 
</p>

# Tehnologije

<table align="center">
  <tr>
    <td align="center">Oblikovanje</td>
    <td align="center">Podatkovna baza</td>
    <td align="center">Front-end</td>
    <td align="center">Back-end</td>
    <td align="center">Model strojnega učenja</td>
  </tr>
  <tr>
    <td align="center"><a href="https://www.figma.com/file/1r0TNJwrDj8MI69udwR6wL/Hackatons?type=design&node-id=0-1&t=4B1xzulJbqNcGLMo-0"><img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma"></a></td>
    <td align="center"><a href="https://mariadb.org/"><img src="https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white" alt="MariaDB"></a></td>
    <td align="center"><a href="https://reactnative.dev/"><img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Native"></a> <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"></a></td>
    <td align="center"><a href="https://nodejs.org/en"><img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"></a><a href="https://flask.palletsprojects.com/en/2.3.x/"><img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" alt="Flask"></a></td>
    <td align="center"><a href="https://www.python.org/"><img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python"></a></td>
  </tr>
</table>

# Izgled

<p align="center">
  <img src="https://github.com/BestHack-poggers/besthack-2023/blob/master/images/Selection.png" width="700" />
</p>
<div align="center">
  <table>
    <tr>
      <td><img src="https://github.com/BestHack-poggers/besthack-2023/blob/master/images/Sign-in.png" width="200" /></td>
      <td><img src="https://github.com/BestHack-poggers/besthack-2023/blob/master/images/Sign-in-2.png" width="200" /></td>
      <td><img src="https://github.com/BestHack-poggers/besthack-2023/blob/master/images/Sign-in-3.png" width="200" /></td>
    </tr>
  </table>
  <table>
    <tr>
      <td><img src="https://github.com/BestHack-poggers/besthack-2023/blob/master/images/Character-customization.png" width="200" /></td>
      <td><img src="https://github.com/BestHack-poggers/besthack-2023/blob/master/images/Home-screen-2.png" width="200" /></td>
    </tr>
  </table>
  <table>
    <tr>
      <td><img src="https://github.com/BestHack-poggers/besthack-2023/blob/master/images/Trash%20cans.png" width="200" /></td>
      <td><img src="https://github.com/BestHack-poggers/besthack-2023/blob/master/images/Trash%20cans-2.png" width="200" /></td>
    </tr>
  </table>
</div>

# Strojno učenje

- 6 razredov: papir, embalaža, steklo, biološki odpadki, zbirni center, ostalo
- Za treniranje (_train dataset_) in vrednotenje (_test dataset_) modela smo uporabili zbirko 22.596 slik, ki so bile
  pridobljene iz različnih odprto-kodnih zbirk.
- Razmerje med množico za treniranje in ovrednotenje modela je 70:30.
- Za razvrščanje slik smo testirali več različnih odprtokodnih modelov strojnega učenja:

<div align="center">

|                  | Klasifikacijska točnost | AUC  |
| ---------------- | ----------------------- | ---- |
| **ResNet50v2**   | 60.5 %                  | 0.52 |
| **VGG16**        | 62.3 %                  | 0.50 |
| **VGG19**        | 64.0 %                  | 0.59 |
| **MobileNet**    | 66.8 %                  | 0.59 |
| **EfficientNet** | 80.0 %                  | 0.71 |

</div>

# O nas

<p align="justify"> 
Smo usklajena štiričlanska ekipa, ki ima celovit nabor znanj in izkušenj s področja programiranja in izdelovanja aplikacij. Svoje spretnosti izpopolnjujemo s sodelovanjem na različnih tekmovanjih in hekatonih. Naše sposobnosti, veščine reševanja problemov in strast do trajnostnega razvoja nam dajejo samozavest pri uspešni izvedbi naše ideje.
</p>

<div align="center">
<table>
  <tr>
    <td><a href="https://www.linkedin.com/in/amadej-%C5%A1enk/"><img src="images/Amadej.png" width="400" /></a></td>
    <td><a href="https://www.linkedin.com/in/lukatomazic/"><img src="images/Luka.png" width="400"/></a></td>
  </tr>
</table>
<table>
  <tr>
    <td><a href="https://www.linkedin.com/in/vita-poto%C4%8Dnik-a4aaa01b8/"><img src="images/Vita.png" width="400"/></a></td>
    <td><a href="https://www.linkedin.com/in/martin-%C5%A1trekelj/"><img src="images/Martin.png" width="400"/></a></td>
  </tr>
</table>
</div>
