apiUrl = 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products';

const creationofTableContent = () => {
    $('tbody').html('')
    $('#count').html(selectedData.length)
    if (selectedData.length > 0) {
        for (let i = 0; i < selectedData.length; i++) {
            $('tbody').append(`
                <tr>
                    <td class="text-fade w5"> ${selectedData[i].id} </td>
                    <td> ${selectedData[i].medicineName} </td>
                    <td class="text-fade">${selectedData[i].medicineBrand}</td>
                    <td class="date-sie">${selectedData[i].expireDate}</td>
                    <td class="text-fade">$${selectedData[i].unitPrice}</td>
                    <td>${selectedData[i].stock}</td>
                </tr>
            `)
        }
    }
}
$(document).ready(function() {
    isLoggedIn()
    accessingAPIData()
    $('.checkBox').change(displayingTables)
    expired()
});
const displayingTables = () => {
    settingContent()
    creationofTableContent()
}
const settingContent = () => {
    const expireValue = $("#expired").prop('checked')
    const lowStockId = $("#lowStock").prop('checked')
    if (respText.length > 0) {
        selectedData = respText.filter((value) => {
            if (expireValue) return expired(value.expireDate)
            return true
        })
        selectedData = selectedData.filter((value) => {
            if (lowStockId) return value.stock < 100
            return true
        })
    }
}
const accessingAPIData = () => {
    $.ajax({
        url: apiUrl,
        success: (apiData) => {
            respText = apiData
            displayingTables()
        }
    })
}
const expired = thatDay => (new Date()) > (new Date(thatDay))