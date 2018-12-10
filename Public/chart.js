<canvas id="myChart" width="400" height="300"></canvas>
    <script>/* chart.js chart examples */

        // chart colors
        var colors = ['#007bff', '#28a745', '#444444', '#c3e6cb', '#dc3545', '#6c757d'];

        var chBar = document.getElementById("chBar");
        var chartData = {
            labels: ["S", "M", "T", "W", "T", "F", "S"],
            datasets: [{
                data: [589, 445, 483, 503, 689, 692, 634],
                backgroundColor: colors[0]
            },
            {
                data: [209, 245, 383, 403, 589, 692, 580],
                backgroundColor: colors[1]
            },
            {
                data: [489, 135, 483, 290, 189, 603, 600],
                backgroundColor: colors[2]
            },
            {
                data: [639, 465, 493, 478, 589, 632, 674],
                backgroundColor: colors[4]
            }]
        };

        if (chBar) {
            new Chart(chBar, {
                type: 'bar',
                data: chartData,
                options: {
                    scales: {
                        xAxes: [{
                            barPercentage: 0.4,
                            categoryPercentage: 0.5
                        }],
                        yAxes: [{
                            ticks: {
                                beginAtZero: false
                            }
                        }]
                    },
                    legend: {
                        display: false
                    }
                }
            });
        }
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.bundle.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.bundle.min.js" integrity="sha384-pjaaA8dDz/5BgdFUPX6M/9SUZv4d12SUPF0axWc+VRZkx5xU3daN+lYb49+Ax+Tl"
        crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.quicksearch/2.3.1/jquery.quicksearch.js"></script>
    <script> $('input#txt_consulta').quicksearch('table#tabela tbody tr')</script>
    <script src="script/script.js"></script>