// Firebase:

// 1. Firebase is an app development platform that provides a range of tools and services to help developers build and deploy their applications more efficiently. 
// 2. It was originally developed by Firebase Inc., which was acquired by Google in 2014.

// Here in this project we are using ''firebase' for authentication purpose.

// Here are some key components and features of Firebase:

// 1. Real-time Database: 
// Firebase's real-time database is a cloud-hosted NoSQL database that enables developers to store and sync data in real time across multiple clients. 
// It allows for real - time updates and synchronization, making it ideal for collaborative and real - time applications.

// 2. Authentication: 
// Firebase provides easy - to - use authentication services, allowing developers to add user authentication to their applications using various 
// authentication providers such as email / password, social logins(Google, Facebook, etc.), and more.

// 3. Cloud Storage: 
// Firebase offers cloud storage for user - generated content, such as images, videos, and other files.It provides a simple API for uploading and downloading 
// files, along with security rules to control access to stored files.

// 4. Hosting: 
// Firebase Hosting allows developers to deploy and host their web applications quickly and securely.It provides a content delivery network(CDN) 
// for fast content delivery, automatic SSL certificates, and easy deployment using Firebase CLI or continuous integration systems.

// 5. Cloud Functions: 
// Firebase Cloud Functions allows developers to run server - side code in response to events triggered by Firebase features or HTTP requests.
// It enables developers to build custom serverless backend logic without managing infrastructure.

// 6. Analytics: 
// Firebase Analytics provides insights into user behavior, app usage, and user demographics.
// It helps developers understand their audience, track key performance indicators, and make data - driven decisions to improve their applications.

// 7. Messaging: 
// Firebase Cloud Messaging(FCM) enables developers to send push notifications to users on both Android and iOS devices.
// It provides a reliable and scalable messaging solution to engage with users and deliver targeted notifications.

// These are just some of the many features offered by Firebase. 
// It provides a robust and scalable infrastructure that simplifies various aspects of app development, 
// allowing developers to focus more on building great user experiences.

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCLwxCqKrx370clSTBNLWLLdsMjAZkwTGo',
  authDomain: 'netflix-clone-d099a.firebaseapp.com',
  projectId: 'netflix-clone-d099a',
  storageBucket: 'netflix-clone-d099a.appspot.com',
  messagingSenderId: '843205196365',
  appId: '1:843205196365:web:f0e443cb831586db63ba04',
  measurementId: 'G-JBFC4CDZ2C'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const firebaseAuth = getAuth(app)
