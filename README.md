# Script auto like for Instagram

Auto like the first picture of all public profile who have liked a picture chosen.

### Set up

1. Open a terminal : command + space then write 'Terminal'

2. Go where you want clone the project (don't forget to remove <>) :
```
cd <ChangeByWhereYouWantCloneIt> (example : cd Desktop)
```

3. Clone the repository :
```
git clone https://github.com/unicolai42/autolikeinsta.git AutoLikeInsta
```

4. Install node npm : Go on https://www.npmjs.com/get-npm and download it.

5. Go in folder and download packages :
```
cd AutoLikeInsta; npm install
```

6. Go on Google and create a new spreadsheet from your gmail account : https://docs.google.com/spreadsheets/

7. Create 4 Sheets and name them exactly like that : picturesToScrap - picturesAlreadyScrapped - usersAlreadyScrapped -notifications

8. Comeback in the terminal then open CryptedData.js :
```
open CryptedData.js
```

9. In CryptedData.js enter all informations as expected

10. Authorize Spreadsheet : Go to https://developers.google.com/sheets/api/quickstart/nodejs then click to 'Enable the Google Sheets API' then 'Download Client Configuration'

11. Go to Downloads folder then create json folder then move the file (credentials.json) into /scripts/functionsSpreadSheet/json :
```
cd ~/<ChangeByWhereYouCloneTheProjectAtStep2>/AutoLikeInsta/scripts/functionsSpreadSheet/
mkdir json
cd ~/Downloads; mv credentials.json ~/<ChangeByWhereYouCloneTheProjectAtStep2>/AutoLikeInsta/scripts/functionsSpreadSheet/json
```

12. Do the same for Gmail. Authorize : Go to https://developers.google.com/gmail/api/quickstart/nodejs then click to 'Enable the Gmail API' then 'Download Client Configuration'

13. Go to Downloads folder then create json folder then move the file (credentials.json) into /scripts/functionsGmail/json :
```
cd ~/<ChangeByWhereYouCloneTheProjectAtStep2>/AutoLikeInsta/scripts/functionsGmail/
mkdir json
cd ~/Downloads; mv credentials.json ~/<ChangeByWhereYouCloneTheProjectAtStep2>/AutoLikeInsta/scripts/functionsGmail/json
```

14. Launch script a first time :
```
cd ~/<ChangeByWhereYouCloneTheProjectAtStep2>/AutoLikeInsta
node scripts/scriptLikePicture.js
```

15. They will ask you to authorize to write on spreadsheet in the terminal (--> Authorize this app by visiting this url:). Command + Click on the link.

16. Connect to your google account then click on 'Advance parameter' then 'Access to QuickStart' then 'Authorize' then 'Authorize'. At this step you will have a code like that : 4/sQHIDme7-GftkoZywRDw9gYhppq4y5X74WkoWLX_P9PWm4gCI. Copy it then paste it on the terminal then press enter.
(Sometimes, Instagram ask a code verification when you try to launch the script often. If it's the case, you will have to do the same again to authorize the script to access to read your mail and enter automatically for the futur the verification code)

17. Stop the script : Ctrl + C

18. Now the script working. Try it again :
```
node scripts/scriptLikePicture.js
```

19. Now we have to select pictures to scrap. Take Instagram's picture url then paste it in the SpreadSheet : Select 'picturesToScrap' sheet and insert in column A at the top (row 1 then 2 then 3...).

20. Now launch the script again and the magic potion will do the rest !

If you have any problem to set up, send me shoot me a mail at ugo.nicolai@gmail.com
