importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging.js');

// Firebase 配置（與 index.html 一致）
const firebaseConfig = {
  apiKey: "AIzaSyD7VW3vOlGQUCzf4wJy24BtRR-tLxTnT7I",
  authDomain: "towing-d99da.firebaseapp.com",
  databaseURL: "https://towing-d99da-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "towing-d99da",
  storageBucket: "towing-d99da.appspot.com",
  messagingSenderId: "977746503781",
  appId: "1:977746503781:web:3d7acb3d08c8e71c13fe8c"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// 處理後台通知
messaging.onBackgroundMessage(payload => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    sound: '/notification.mp3' // 指定音效檔案
  };
  self.registration.showNotification(notificationTitle, notificationOptions);

  // 播放音效
  const audio = new Audio('/notification.mp3');
  audio.play();
});