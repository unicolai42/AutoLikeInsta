const dataCrypted = {
    /// Enter your instagram login between ''
    login: '',
    /// Enter your instagram password between ''
    pwd: '',
    /// Go to your spreadsheet then take the part between the /d/ and the /edit --> Example : https://docs.google.com/spreadsheets/d/       1m8xLYp-qglocwlhW9xkTljRACCH5b3TU6gSq6_ftLi8      /edit#gid=1552748395
    spreadSheetId: '',
    /// Select your sheet picturesToScrap and put the gid number at the end --> Example : https://docs.google.com/spreadsheets/d/1m8xLYp-qglocwlhW9xkTljRACCH5b3TU6gSq6_ftLi8/edit#gid=        1552748395
    /// If the gid number = 0 then delete your sheet and re create it. Normally this time the gid number will appear
    gidPicturesToScrap: '',
    /// Don't touch the slack channel. All the bug report is link to my slack account to know if the script have some problems
    slackChannel: 'TJ98JFJAC/BLG9HSJMU/cvzF4oLLMBQVL0JVnkXOTofR',
    /// Don't touch the 4 next line. It's for connect the authorisation from spreadsheet and gmail you will need. Come back to the documentation to keep going the set up
    credentialsGmailPath: './scripts/functionsGmail/json/credentials.json',
    tokenGmailPath: './scripts/functionsGmail/json/token.json',
    credentialsSpreadSheetPath: './scripts/functionsSpreadSheet/json/credentials.json',
    tokenSpreadSheetPath: './scripts/functionsSpreadSheet/json/token.json',
    /// If you want use a proxy to run multiple account in the same time and not be detected by Instagram add a proxy. (For one account you will not have problem without proxy)
    proxy: ''  
}

/// If you use a proxy fill info here
const proxyIdCrypted = {
    login: '',
    pwd: '',
    slackChannel: 'TJ98JFJAC/BLE5U2QSH/Mx2eyml98aCjOtfvpaKeoE9k'
}

module.exports = {proxyIdCrypted, dataCrypted}
