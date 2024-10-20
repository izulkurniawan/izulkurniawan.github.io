window.onload = function () {
  // ScrollReveal animations
  ScrollReveal().reveal('#navbar', {
      origin: 'top',
      distance: '100px',
      duration: 1000,
      easing: 'ease-in-out',
      opacity: 0,
      reset: false,
      delay: 0
  });

  ScrollReveal().reveal('#about_img', {
      origin: 'right',
      distance: '200px',
      duration: 1000,
      easing: 'ease-in-out',
      opacity: 0,
      reset: false,
      delay: 1000
  });

  ScrollReveal().reveal('#about_txt', {
      origin: 'left',
      distance: '200px',
      duration: 1000,
      easing: 'ease-in-out',
      opacity: 0,
      reset: false,
      delay: 1000
  });

  ScrollReveal().reveal('#fact_txt', {
      origin: 'right',
      distance: '200px',
      duration: 1000,
      easing: 'ease-in-out',
      opacity: 0,
      reset: false,
      delay: 3000
  });

  ScrollReveal().reveal('#fact_img', {
      origin: 'left',
      distance: '200px',
      duration: 1000,
      easing: 'ease-in-out',
      opacity: 0,
      reset: false,
      delay: 2000
  });


ScrollReveal().reveal('#story_img', {
    origin: 'right',
    distance: '200px',
    duration: 750,
    easing: 'ease-in-out',
    opacity: 0,
    reset: false,
    delay: 200
});

  // Setup Chart.js
  var ctx = document.getElementById('myChart').getContext('2d');

  // Initialize the chart but do not update it yet
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Gaming', 'Data Processing', 'Coding', 'Cooking', 'Sports'],
          datasets: [{
              label: 'Experiences',
              data: [90, 70, 80, 50, 25],
              backgroundColor: [
                  'rgba(75, 192, 192, 0.8)', // Light teal
                  'rgba(255, 159, 64, 0.8)', // Soft orange
                  'rgba(255, 206, 86, 0.8)', // Yellow
                  'rgba(153, 102, 255, 0.8)', // Purple
                  'rgba(255, 99, 132, 0.8)', // Red
              ],
              borderColor: [
                  'rgba(75, 192, 192, 1)', 
                  'rgba(255, 159, 64, 1)', 
                  'rgba(255, 206, 86, 1)', 
                  'rgba(153, 102, 255, 1)', 
                  'rgba(255, 99, 132, 1)', 
              ],
              borderWidth: 0.4,
              borderRadius: 15,
              barPercentage: 1,
              categoryPercentage: 0.9
          }]
      },
      options: {
          maintainAspectRatio: false, // Allow chart to resize freely
          responsive: true, // Make the chart responsive
          animation: {
              duration: 1000, // Animation duration per bar
              easing: 'easeOutQuad', // Smooth animation
              // Delay per bar animation
              delay: (context) => {
                  const datasetLength = context.chart.data.datasets[0].data.length;
                  return (datasetLength - context.dataIndex - 1) * 300; // Adjust this multiplier for delay
              },
          },
          scales: {
              x: {
                  display: true,
                  grid: {
                      display: false
                  },
                  ticks: {
                      font: {
                          size: 14
                      }
                  }
              },
              y: {
                  display: true,
                  beginAtZero: true,
                  ticks: {
                      stepSize: 20, // Set step size to 20%
                      callback: function(value) {
                          switch (value) {
                              case 0: return 'Peasant';
                              case 20: return 'Novice';
                              case 40: return 'Apprentice';
                              case 60: return 'Master';
                              case 80: return 'Champion';
                              case 100: return 'Legend'; // You can adjust or remove this if not needed
                              default: return '';
                          }
                      }
                  }
              }
          },
          plugins: {
              legend: {
                  display: false
              },
              datalabels: {
                  color: '#fff',
                  anchor: 'center',
                  align: 'center',
                  font: {
                      weight: 'bold',
                      size: 30
                  },
                  formatter: function(value) {
                      return value + '%'; 
                  }
              }
          }
      },
      plugins: [ChartDataLabels]
  });

  // Intersection Observer to trigger the chart animation
  const chartCanvas = document.getElementById('myChart');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              myChart.update(); // Trigger the chart animation
              observer.unobserve(chartCanvas); // Stop observing after animation
          }
      });
  }, { threshold: 0.1 }); // Use threshold 1.0 to trigger only when fully visible

  observer.observe(chartCanvas); // Start observing the chart canvas
}
