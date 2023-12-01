const express = require('express');
const app = express();

const rooms = [
  {
    id: 1,
    seatsAvailable: 10,
    amenities: ['WiFi', 'Projector'],
    pricePerHour: 50.00,
  },
  {
    id: 2,
    seatsAvailable: 6,
    amenities: ['Coffee machine', 'Whiteboard'],
    pricePerHour: 40.00,
  },
  
];

const booking =[
    {
customerName: 'rocky',
date: '2.12.2022',
starttime:'3.00Pm',
endtime:'5.00am',
roomid:'2',
},
];

const roomwithdate = [
    {
      id: 1,
      name: 'Room 101',
      bookings: [
        {
          booked: true,
          customerName: 'John Doe',
          date: '2023-12-01',
          startTime: '10:00',
          endTime: '11:30'
        },
        
      ]
    },
    {
      id: 2,
      name: 'Room 202',
      bookings: [
        {
          booked: false,
          customerName: 'deepak',
          date: '1.12.2024',
          startTime: '1.00',
          endTime: '3.00'
        },
        
      ]
    },
  ];
  
  
app.get('/rooms', (req, res) => {
  res.json(booking);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const boooking date = [
    {
      id: 1,
      name: 'Room 101',
      bookings: [
        {
          booked: true,
          customerName: 'John Doe',
          date: '2023-12-01',
          startTime: '10:00',
          endTime: '11:30'
        },
        
      ]
    },
    {
      id: 2,
      name: 'Room 202',
      bookings: [
        {
          booked: true,
          customerName: 'Alice Smith',
          date: '2023-12-02',
          startTime: '09:00',
          endTime: '10:30'
        },
        
      ]
    },
    
  ];
  
  
  app.get('/booking date', (req, res) => {
    
    
    
          
    
    res.json(booking date) ;
  });
  
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
