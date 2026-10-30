// routes.js - GSRTC Highway Routes & Station Dataset
const GSRTC_ROUTES_DB = [
  {
    id: "RT-01",
    from: "Vijapur",
    to: "Surat",
    busNo: "GJ-18-Z-7899",
    type: "Express",
    departure: "01:00 PM",
    arrival: "07:15 PM",
    duration: "06h 15m",
    distanceKm: "343.82",
    status: "Running",
    stops: [
      { name: "Vijapur ST Stand", time: "01:00 PM", passed: true, lat: 23.5623, lng: 72.7533 },
      { name: "Himmatnagar Cross", time: "01:45 PM", passed: true, lat: 23.5979, lng: 72.9698 },
      { name: "Gandhinagar CH Road", time: "02:40 PM", passed: true, lat: 23.2156, lng: 72.6369 },
      { name: "Ahmedabad Geeta Mandir", time: "03:30 PM", passed: true, lat: 23.0125, lng: 72.5910 },
      { name: "Nadiad Express Highway", time: "04:22 PM", passed: true, lat: 22.6916, lng: 72.8634 },
      { name: "Vadodara Central", time: "05:15 PM", passed: true, lat: 22.3107, lng: 73.1812 },
      { name: "Bharuch Toll Plaza", time: "06:10 PM", passed: false, lat: 21.7051, lng: 72.9959 },
      { name: "Surat Central (GSRTC)", time: "07:15 PM", passed: false, lat: 21.2054, lng: 72.8398 }
    ]
  },
  {
    id: "RT-02",
    from: "Ahmedabad",
    to: "Navsari",
    busNo: "GJ-18-Z-6066",
    type: "Express",
    departure: "02:15 PM",
    arrival: "07:45 PM",
    duration: "05h 30m",
    distanceKm: "285.40",
    status: "Running",
    stops: [
      { name: "Ahmedabad Geeta Mandir", time: "02:15 PM", passed: true, lat: 23.0125, lng: 72.5910 },
      { name: "Anand Bypass", time: "03:20 PM", passed: true, lat: 22.5645, lng: 72.9289 },
      { name: "Vadodara Central", time: "04:05 PM", passed: true, lat: 22.3107, lng: 73.1812 },
      { name: "Bharuch Narmada Bridge", time: "05:10 PM", passed: true, lat: 21.7051, lng: 72.9959 },
      { name: "Surat Central", time: "06:35 PM", passed: false, lat: 21.2054, lng: 72.8398 },
      { name: "Navsari ST Depot", time: "07:45 PM", passed: false, lat: 20.9467, lng: 72.9279 }
    ]
  },
  {
    id: "RT-03",
    from: "Valsad",
    to: "Ahmedabad",
    busNo: "GJ-18-AZ-9146",
    type: "Volvo 2x2",
    departure: "06:30 AM",
    arrival: "01:15 PM",
    duration: "06h 45m",
    distanceKm: "336.50",
    status: "Scheduled",
    stops: [
      { name: "Valsad ST Depot", time: "06:30 AM", passed: false, lat: 20.6100, lng: 72.9342 },
      { name: "Chikhli Cross Road", time: "07:10 AM", passed: false, lat: 20.7570, lng: 73.0645 },
      { name: "Navsari Bypass", time: "07:45 AM", passed: false, lat: 20.9467, lng: 72.9279 },
      { name: "Surat Central", time: "08:40 AM", passed: false, lat: 21.2054, lng: 72.8398 },
      { name: "Ankleshwar GIDC", time: "09:45 AM", passed: false, lat: 21.6264, lng: 73.0033 },
      { name: "Vadodara Central", time: "11:00 AM", passed: false, lat: 22.3107, lng: 73.1812 },
      { name: "Nadiad Expressway", time: "11:55 AM", passed: false, lat: 22.6916, lng: 72.8634 },
      { name: "Ahmedabad Ranip", time: "01:15 PM", passed: false, lat: 23.0768, lng: 72.5830 }
    ]
  },
  {
    id: "RT-04",
    from: "Sachivalay",
    to: "Bavla",
    busNo: "GJ-18-Z-6066",
    type: "Express",
    departure: "06:12 PM",
    arrival: "07:37 PM",
    duration: "01h 25m",
    distanceKm: "56.88",
    status: "Running",
    stops: [
      { name: "Sachivalay - Gandhinagar", time: "06:12 PM", passed: true, lat: 23.2156, lng: 72.6369 },
      { name: "CH Road Vidhansabha", time: "06:22 PM", passed: true, lat: 23.2100, lng: 72.6450 },
      { name: "Adalaj Chowkadi", time: "06:49 PM", passed: true, lat: 23.1670, lng: 72.5815 },
      { name: "Iscon Cross Road", time: "07:10 PM", passed: false, lat: 23.0275, lng: 72.5074 },
      { name: "Sanand Circle", time: "07:22 PM", passed: false, lat: 22.9920, lng: 72.3810 },
      { name: "Bavla ST Stand", time: "07:37 PM", passed: false, lat: 22.8322, lng: 72.3615 }
    ]
  },
  {
    id: "RT-05",
    from: "Ahmedabad",
    to: "Rajkot",
    busNo: "GJ-18-AZ-8080",
    type: "Volvo 2x2",
    departure: "04:30 PM",
    arrival: "08:15 PM",
    duration: "03h 45m",
    distanceKm: "215.30",
    status: "Running",
    stops: [
      { name: "Ahmedabad Geeta Mandir", time: "04:30 PM", passed: true, lat: 23.0125, lng: 72.5910 },
      { name: "Bavla Cross Road", time: "05:15 PM", passed: true, lat: 22.8322, lng: 72.3615 },
      { name: "Bagodara Junction", time: "05:50 PM", passed: true, lat: 22.6828, lng: 72.2356 },
      { name: "Limbdi Highway Stop", time: "06:40 PM", passed: false, lat: 22.5654, lng: 71.8080 },
      { name: "Chotila Temple Stop", time: "07:25 PM", passed: false, lat: 22.4239, lng: 71.1969 },
      { name: "Rajkot Shastri Maidan", time: "08:15 PM", passed: false, lat: 22.3039, lng: 70.8022 }
    ]
  },
  {
    id: "RT-06",
    from: "Surat",
    to: "Dwarka",
    busNo: "GJ-18-Z-9912",
    type: "Luxury",
    departure: "05:00 PM",
    arrival: "07:30 AM",
    duration: "14h 30m",
    distanceKm: "680.00",
    status: "Scheduled",
    stops: [
      { name: "Surat Central Depot", time: "05:00 PM", passed: false, lat: 21.2054, lng: 72.8398 },
      { name: "Bharuch Junction", time: "06:15 PM", passed: false, lat: 21.7051, lng: 72.9959 },
      { name: "Vadodara Central", time: "07:30 PM", passed: false, lat: 22.3107, lng: 73.1812 },
      { name: "Ahmedabad Ranip", time: "09:45 PM", passed: false, lat: 23.0768, lng: 72.5830 },
      { name: "Rajkot ST Depot", time: "01:30 AM", passed: false, lat: 22.3039, lng: 70.8022 },
      { name: "Jamnagar ST Stand", time: "03:45 AM", passed: false, lat: 22.4707, lng: 70.0577 },
      { name: "Dwarka Bus Station", time: "07:30 AM", passed: false, lat: 22.2442, lng: 68.9685 }
    ]
  }
];
