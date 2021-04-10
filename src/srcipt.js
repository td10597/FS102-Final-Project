$(function()
{
    $('.carousel').carousel({
        interval: 3000
    })
    $(`#signAU`).click(function()
    {
        $(`#signAudience`).modal(`show`);
    })
    $(`#signJO`).click(function()
    {
        $(`#signJournalist`).modal(`show`);
    })
    $(`#signPUB`).click(function()
    {
        $(`#signPublisher`).modal(`show`);
    })
    $(`#code`).click(function()
    {
        $(`#areaCode`).modal(`show`);
    })
    $(`#summary`).click(function()
    {
        $(`#eventSummary`).modal(`show`);
    })

    $(`#showCreator`).click(function()
    {
        $(`#creator`).modal(`show`);
    })
    
    $(`#checkUserA`).click(function()
    {
        let userName = $(`#userUQName`).val();
        if(localStorage.getItem(userName) != null)
        {
            $(`#noticeA`).html(`User name is taken, please try again.`);
        }
        else if(localStorage.getItem(userName) == null)
        {
            $(`#noticeA`).html(`User name is available.`);
        }
        $(`#userUQName`).val(``);
    })

    $(`#submitA`).click(function()
    {
        let userName = $(`#userUQName`).val();
        let fullName = $(`#userName`).val();
        let Email = $(`#userEmail`).val();
        let phoneNumber = $(`#userPhoneNumber`).val();
        let ID = $(`#userSID`).val();
        let gender = $(`#userGender`).val();

        let userInfo = {
            userUQName: userName,
            userName: fullName,
            userEmail: Email,
            userPhoneNumber: phoneNumber,
            userSID: ID,
            userGender: gender
        };

        localStorage.setItem(`${userName}`, JSON.stringify(userInfo));
    })

    $(`#checkUserJ`).click(function()
    {
        let userName = $(`#userUQJName`).val();
        console.log(userName);
        if(localStorage.getItem(userName) != null)
        {
            $(`#noticeJ`).html(`User name is taken, please try again.`);
        }
        else if(localStorage.getItem(userName) == null)
        {
            $(`#noticeJ`).html(`User name is available.`);
        }
        $(`#userUQName`).val(``);
    })

    $(`#submitJ`).click(function()
    {
        let userName = $(`#userUQJName`).val();
        let fullName = $(`#userName`).val();
        let Email = $(`#userEmail`).val();
        let phoneNumber = $(`#userPhoneNumber`).val();
        let ID = $(`#userSID`).val();
        let gender = $(`#userGender`).val();
        let newsInfo = $(`#newsInfo`).val();

        let userInfo = {
            userUQName: userName,
            userName: fullName,
            userEmail: Email,
            userPhoneNumber: phoneNumber,
            userSID: ID,
            userGender: gender,
            userNews: newsInfo
        };

        localStorage.setItem(`${userName}`, JSON.stringify(userInfo));

    })

    $(`#checkUserP`).click(function()
    {
        let userName = $(`#userUQPName`).val();
        if(localStorage.getItem(userName) != null)
        {
            $(`#noticeP`).html(`User name is taken, please try again.`);
        }
        else if(localStorage.getItem(userName) == null)
        {
            $(`#noticeP`).html(`User name is available.`);
        }
        $(`#userUQName`).val(``);
    })

    $(`#submitP`).click(function()
    {
        let userName = $(`#userUQPName`).val();
        let fullName = $(`#userName`).val();
        let Email = $(`#userEmail`).val();
        let phoneNumber = $(`#userPhoneNumber`).val();
        let ID = $(`#userSID`).val();
        let gender = $(`#userGender`).val();
        let pubInfo= $(`#pubsInfo`).val();

        let userInfo = {
            userUQName: userName,
            userName: fullName,
            userEmail: Email,
            userPhoneNumber: phoneNumber,
            userSID: ID,
            userGender: gender,
            userPub: pubInfo,
        };

        localStorage.setItem(`${userName}`, JSON.stringify(userInfo));
    })

    $(`#showProfile`).click(function()
    {
        $(`#profile`).modal(`show`);
        let searchName = prompt(`Enter your user name:`);
        
        if(localStorage.getItem(searchName) != null)
        {
            let userStorage = localStorage.getItem(searchName);
            let Info = JSON.parse(userStorage);
           
            let name = Info.userName;
            let gender = Info.userGender;
            let email = Info.userEmail;
            let phoneNumber = Info.userPhoneNumber;
            let id = Info.userSID;
            let pubinfo = Info.userPub;
            let newsinfo = Info.userNews;
            if(pubinfo == null && newsinfo == null)
            {
                $(`#display`).html(`Full name: ${name} <br>
                Gender: ${gender} <br>
                EmaiL: ${email} <br>
                Phone Number: ${phoneNumber} <br>
                ID: ${id} <br>`);
            }
            else if(pubinfo != null)
            {
                $(`#display`).html(`Full name: ${name} <br>
                Gender: ${gender} <br>
                EmaiL: ${email} <br>
                Phone Number: ${phoneNumber} <br>
                ID: ${id} <br>
                Publisher Info: ${pubinfo}`);
            }
            else if(newsinfo != null)
            {
                $(`#display`).html(`Full name: ${name} <br>
                Gender: ${gender} <br>
                EmaiL: ${email} <br>
                Phone Number: ${phoneNumber} <br>
                ID: ${id} <br>
                News Info: ${newsinfo}`);
            }

        }
        else
        {
            $(`#display`).html(`User does not exist in the database.`)
        }
    })
})