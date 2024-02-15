import { getData } from "../modules/helpers";

const ctx = document.getElementById('myChart');
const walletID = location.search.split('=').at(-1)

getData('/transactions/?wallet_id=' + walletID)
    .then((res) => {
        let totals = []
        let dates = []

        const [...transactions] = res.data

        if(transactions.length === 0) return

        for(let item of transactions) {
            totals.push(item.total)
            dates.push(item.created_at)
        }

        console.log({totals});

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [{
                    label: transactions[0].wallet.name,
                    data: totals,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 3
                }]
            },
            options: {
                // animations: {
                //     tension: {
                //         duration: 1000,
                //         easing: 'linear',
                //         from: 1,
                //         to: 0,
                //         loop: true
                //     }
                // },
            },
            scales: {
                y: {
                  min: 0,
                  max: 100
                }
            }
        });
    })
