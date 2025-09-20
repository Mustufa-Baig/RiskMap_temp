/**
 * For usage, visit Chart.js docs https://www.chartjs.org/docs/latest/
 */
const barConfig = {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'English',
        backgroundColor: '#0694a2',
        // borderColor: window.chartColors.red,
        borderWidth: 1,
        data: [30, 20, 35, 40, 45, 20, 70],
      },
      {
        label: 'Physics',
        backgroundColor: '#7e3af2',
        // borderColor: window.chartColors.blue,
        borderWidth: 1,
        data: [66, 33, 43, 12, 54, 62, 84],
      },
      {
        label: 'Chemistry',
        backgroundColor: '#FDDA0D',
        // borderColor: window.chartColors.blue,
        borderWidth: 1,
        data: [20, 30, 53, 42, 34, 42, 74],
      },
      {
        label: 'Maths',
        backgroundColor: '#008000',
        // borderColor: window.chartColors.blue,
        borderWidth: 1,
        data: [40, 50, 30, 40, 10, 55, 60],
      },
    ],
  },
  options: {
    responsive: true,
    legend: {
      display: false,
    },
  },
}

const barsCtx = document.getElementById('bars')
window.myBar = new Chart(barsCtx, barConfig)
