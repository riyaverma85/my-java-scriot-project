function bookAppointment() {
    alert("Thank you! Our team will contact you to confirm your appointment.");
  }



  // ===================

  document.getElementById('signupForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Signup successful! (Functionality not implemented)");
});

document.getElementById('loginForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Login successful! (Functionality not implemented)");
});
// ===============================================


const specialtySelect = document.getElementById('specialty');
        const doctorSelect = document.getElementById('doctor');
        const timeSelect = document.getElementById('time');
        const dateInput = document.getElementById('date');
        
        // Doctor data (would typically come from a database)
        const doctors = {
            cardiology: ['Dr. Sarah Johnson', 'Dr. Robert Smith', 'Dr. Lisa Wang'],
            dermatology: ['Dr. Michael Chen', 'Dr. Jessica Brown', 'Dr. David Kim'],
            neurology: ['Dr. James Wilson', 'Dr. Amanda Lee', 'Dr. Thomas Moore'],
            orthopedics: ['Dr. Rachel Green', 'Dr. Mark Taylor', 'Dr. Nicole Adams'],
            pediatrics: ['Dr. Emily Rodriguez', 'Dr. John Davis', 'Dr. Michelle Park'],
            psychiatry: ['Dr. Richard Lopez', 'Dr. Susan Miller', 'Dr. Brian White']
        };
        
        // Time slots (would typically be dynamically generated based on availability)
        const timeSlots = ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', 
                          '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM'];
        
        // Update doctors dropdown when specialty changes
        specialtySelect.addEventListener('change', function() {
            const specialty = this.value;
            doctorSelect.innerHTML = '<option value="">Select Doctor</option>';
            
            if (specialty && doctors[specialty]) {
                doctors[specialty].forEach(doctor => {
                    const option = document.createElement('option');
                    option.value = doctor;
                    option.textContent = doctor;
                    doctorSelect.appendChild(option);
                });
            }
        });
        
        // Set minimum date to today
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        const todayStr = `${yyyy}-${mm}-${dd}`;
        dateInput.min = todayStr;
        
        // Update time slots when date is selected
        dateInput.addEventListener('change', function() {
            timeSelect.innerHTML = '<option value="">Select Time</option>';
            
            // Generate time slots (in a real app, this would check availability)
            timeSlots.forEach(time => {
                const option = document.createElement('option');
                option.value = time;
                option.textContent = time;
                timeSelect.appendChild(option);
            });
        });
        
        // Form submission
        document.querySelector('.booking-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const specialty = specialtySelect.value;
            const doctor = doctorSelect.value;
            const date = dateInput.value;
            const time = timeSelect.value;
            
            if (specialty && doctor && date && time) {
                alert(`Appointment booked successfully!\n\nDoctor: ${doctor}\nSpecialty: ${specialty}\nDate: ${date}\nTime: ${time}`);
                // In a real app, this would send data to a server
            } else {
                alert('Please fill all required fields');
            }
        });
    
