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

13. Launch script a first time :
```
cd ~/<ChangeByWhereYouCloneTheProjectAtStep2>/AutoLikeInsta
node scripts/scriptLikePicture.js
```

14. They will ask you to authorize to write on spreadsheet in the terminal (--> Authorize this app by visiting this url:). Command + Click on the link.

15. Connect to your google account then click on 'Advance parameter' then 'Access to QuickStart' then 'Authorize' then 'Authorize'. At this step you will have a code like that : 4/sQHIDme7-GftkoZywRDw9gYhppq4y5X74WkoWLX_P9PWm4gCI. Copy it then paste it on the terminal then press enter.
(Sometimes, Instagram ask a code verification when you try to launch the script often. If it's the case, you will have to do the same again to authorize the script to access to read your mail and enter automatically for the futur the verification code)

16. Stop the script : Ctrl + C

17. Now the script working. Try it again :
```
node scripts/scriptLikePicture.js
```

18. Now we have to select pictures to scrap. Take Instagram's picture url then paste it in the SpreadSheet : Select 'picturesToScrap' sheet and insert in column A at the top (row 1 then 2 then 3...).

19. Now launch the script again and the magic potion will do the rest !

If you have any problem to set up, send me shoot me a mail at ugo.nicolai@gmail.com
