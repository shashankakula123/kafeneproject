apiUrl = 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users';


userApiUrl = 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users?fullName=';

const accessingAPIData = () => {
    $.ajax({
        url: apiUrl,
        success: (apiData) => {
            apidata = apiData
            creationofTableContent(apidata)
        }
    })
}


const creationofTableContent = (data) => {
    $('tbody').html('')
    if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
            $('tbody').append(`
                <tr>
                    <td class="text-fade">${data[i].id}</td>
                    <td> <img src=${data[i].profilePic} alt="User Avatar"> </td>
                    <td class="text-fade">${data[i].fullName}</td>
                    <td>${data[i].dob}</td>
                    <td class="text-fade">${data[i].gender}</td>
                    <td class="text-fade">${data[i].currentCity} , ${data[i].currentCountry}</td>
                </tr>
            `)
        }
    }
}

$(document).ready(function() {

    isLoggedIn()
    accessingAPIData()
        $('#search-box').submit((e) => {
            e.preventDefault()
            const searchingValue = $('#search-by-name').val()


                if (!searchingValue.trim()) {
                    creationofTableContent(apidata)
                    return
                }

                if (searchingValue.length > 1) {
                    $('#search-by-name').val('')
                    const result = userApiUrl + searchingValue
                    usersDataResponse(result)
                } 
                
                else {
                    alert('Please Enter a Phrase to Search...!!!')
                }
    })
});
const usersDataResponse = (urlData) => {
    $.ajax({
        url: urlData,
        success: (apiData) => {
            selectedData = apiData
            creationofTableContent(selectedData)
        }
    })
}











num1 = 10;

console.log(num1);

var num1;