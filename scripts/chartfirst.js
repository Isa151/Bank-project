import { getData } from "../modules/helpers";

const ctx = document.getElementById('myChart');
const user_id = location.search.split('=').at(-1)

getData('/wallets/' + user_id)
    .then(res => {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: String(res.data.balance),
                datasets: [{
                    label: res.data.name,
                    data: String(res.data.balance),
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
                animations: {
                    tension: {
                        duration: 1000,
                        easing: 'linear',
                        from: 1,
                        to: 0,
                        loop: true
                    }
                },
            },
            scales: {
                y: {
                  min: 0,
                  max: 100
                }
            }
        });
    })
