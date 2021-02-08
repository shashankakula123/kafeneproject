const apiUrl = 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders'


const settingContent = () => {

    const newValue = $("#new").prop('checked')
    const packValue = $("#packed").prop('checked')
    const transitValue = $("#intransit").prop('checked')
    const deliverValue = $("#delivered").prop('checked')


        if (apidata.length > 0) {
            selectedData = apidata.filter((value, key) => {
                if (newValue && value.orderStatus === 'New') return true
                if (packValue && value.orderStatus === 'Packed') return true
                if (transitValue && value.orderStatus === 'InTransit') return true
                if (deliverValue && value.orderStatus === 'Delivered') return true
                return false
            })
        }
}

            const accessingAPIData = () => {
                $.ajax({
                    url: apiUrl,
                    success: (apiData) => {
                        apidata = apiData
                        displayingTables()
                    }
                })
            }


            const creationofTableContent = () => {
                $('tbody').html('')
                $('#count').html(selectedData.length)
                if (selectedData.length > 0) {
                    for (let i = 0; i < selectedData.length; i++) {
                        $('tbody').append(`
                            <tr>
                                <td class="text-fade"> ${selectedData[i].id} </td>
                                <td> ${selectedData[i].customerName} </td>
                                <td>${selectedData[i].orderDate}<p class="text-fade text-fade-below">${selectedData[i].orderTime}</p>
                                </td>
                                <td class="text-fade">$${selectedData[i].amount}</td>
                                <td>${selectedData[i].orderStatus}</td>
                            </tr>
                        `)
                    }
                }
            }


            $(document).ready(function() {
                isLoggedIn()
                accessingAPIData()
                $('.checkbox').change(displayingTables)
            });

            
            const displayingTables = () => {
                settingContent()
                creationofTableContent()
            }
