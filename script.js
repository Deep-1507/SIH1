document.addEventListener('DOMContentLoaded', () => {
    const locationInfo = document.getElementById('location-info');
    const nearestFacilityInfo = document.getElementById('nearest-facility-info');
    const facilityName = document.getElementById('facility-name');
    const facilityAddress = document.getElementById('facility-address');
  
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          locationInfo.innerHTML = `Your current location: ${latitude}, ${longitude}`;
  
          // Fetch nearest facility based on location
          fetchNearestFacilityOops! Looks like I accidentally cut off the JavaScript code. Here's the complete JavaScript code:
  
  ```javascript
          fetchNearestFacility(latitude, longitude);
        },
        (error) => {
          console.error(error);
          locationInfo.innerHTML = 'Failed to retrieve your location.';
        }
      );
    } else {
      locationInfo.innerHTML = 'Geolocation is not supported by this browser.';
    }
  
    // Fetch nearest facility data from API
    const fetchNearestFacility = async (latitude, longitude) => {
      try {
        const response = await fetch(
          `https://api.example.com/e-waste/facilities?latitude=${latitude}&longitude=${longitude}`
        );
        if (response.ok) {
          const data = await response.json();
          if (data) {
            facilityName.innerHTML = data.name;
            facilityAddress.innerHTML = data.address;
            nearestFacilityInfo.style.display = 'block';
          } else {
            nearestFacilityInfo.innerHTML = 'No facility found.';
          }
        } else {
          console.error('Failed to fetch nearest facility data.');
          nearestFacilityInfo.innerHTML = 'Failed to fetch nearest facility data.';
        }
      } catch (error) {
        console.error('Error:', error);
        nearestFacilityInfo.innerHTML = 'An error occurred while fetching data.';
      }
    };
  
    // Educational pop-up functionality
    const popupContainer = document.getElementById('popup-container');
    const popups = popupContainer.getElementsByClassName('popup');
    for (let i = 0; i < popups.length; i++) {
      const popup = popups[i];
      popup.addEventListener('click', () => {
        popup.classList.toggle('active');
      });
    }
  
    // Device recycling form functionality
    const deviceForm = document.getElementById('device-form');
    const creditPoints = document.getElementById('credit-points');
    const points = document.getElementById('points');
  
    deviceForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const deviceModel = document.getElementById('device-model').value;
      const recoveredPoints = calculatePoints(deviceModel);
      points.innerHTML = recoveredPoints;
      creditPoints.style.display = 'block';
    });
  
    // Function to calculate credit points based on device model
    const calculatePoints = (deviceModel) => {
      // Perform calculations based on the device model
      // You can customize this function according to your requirements
      // and include the logic to calculate the credit points
      // based on the amount of precious metals recovered from the device.
      // Return the calculated credit points.
      return 50; // Placeholder value
    };
  });