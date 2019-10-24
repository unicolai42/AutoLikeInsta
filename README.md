# Script auto like for Instagram

Auto like the first picture of all public profile who have liked a picture chosen.

### Set up

1. Open a terminal : command + space then write 'Terminal'

2. Go where you want clone the project :
```
cd <ChangeByWhereYouWantCloneIt> (example : cd Desktop)
```

3. Clone the repository :
```
git clone https://github.com/unicolai42/auto-like-insta.git AutoLikeInsta
```

4. Go in folder and download packages :
```
cd AutoLikeInsta; npm install
```

5. Go on Google and create a new spreadsheet from your gmail account : https://docs.google.com/spreadsheets/

6. Create 4 Sheets and name them exactly like that : picturesToScrap - picturesAlreadyScrapped - usersAlreadyScrapped -notifications

7. Comeback in the terminal then open CryptedData.js :
```
open CryptedData.js
```

8. In CryptedData.js enter all informations as expected

9. Authorize Spreadsheet : Go to https://developers.google.com/sheets/api/quickstart/nodejs then click to 'Enable the Google Sheets API' then 'Download Client Configuration'

10. Go to Downloads folder then create json folder then move the file (credentials.json) into /scripts/functionsSpreadSheet/json :
```
cd ~/<ChangeByWhereYouCloneTheProjectAtStep2>/AutoLikeInsta/scripts/functionsSpreadSheet/
mkdir json
cd ~/Downloads; mv credentials.json ~/<ChangeByWhereYouCloneTheProjectAtStep2>/AutoLikeInsta/scripts/functionsSpreadSheet/json
```

11. Do the same for Gmail. Authorize : Go to https://developers.google.com/gmail/api/quickstart/nodejs then click to 'Enable the Gmail API' then 'Download Client Configuration'

12. Go to Downloads folder then create json folder then move the file (credentials.json) into /scripts/functionsGmail/json :
```
cd ~/<ChangeByWhereYouCloneTheProjectAtStep2>/AutoLikeInsta/scripts/functionsGmail/
mkdir json
cd ~/Downloads; mv credentials.json ~/<ChangeByWhereYouCloneTheProjectAtStep2>/AutoLikeInsta/scripts/functionsGmail/json
```
