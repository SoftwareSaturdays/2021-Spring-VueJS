# Lesson 5, Demo 1
Demo 1 and Checkpoint 1 is a follow-along setup of Google Firebase and Realtime Database. If you were unable to follow along during the lesson or want to use some text instructions, this file will explain how to do so.

## What is Google Firebase and Realtime Database?
Google Firebase is a development platform run by Google with a variety of features and services. We
will only go over the absolute basics, but other services you may be interested are Google Analytics, Firebase Hosting, and Firebase Authentication.

Realtime Database is a NoSQL database where data is stored in an unstructured JSON object. That means that
all data must be key-value pairs or key-object pairs. It also means the data is easily processed by JavaScript
and the Web Browser.

## Setting up Google Firebase
To set up a Firebase account, you must first have a valid Google Account
1. Go to https://firebase.google.com and click "**Go to console**" in the upper right corner
2. In the center of the screen, press "**Add project**"
3. Give your project a name and press "**Continue**"
4. Deselect "*Enable Google Analytics*" and press "**Create Project**"

## Setting up Realtime Database
1. After project creation, on the left menu, go to "**Realtime Database**"
2. Click "**Create Database**" and then "**Next**"
3. Select "*Start in **Test mode***" and press "**Enable**"
4. On the left menue, press the Settings gear and scroll down
5. In the "*Your apps*" section, choose a new website
    * This will look like a blank closing tag, `</>`
6. Give your website a nickname and press "**Register app**"
7. Copy the code in the box labeled "Add Firebase SDK"
    * You will need it to add Firebase functionality to your site
    * Also, add this script tag under the TODO comment
    > `<script src="https://www.gstatic.com/firebasejs/8.2.3/firebase-database.js"></script>`
8. Import test data from the Realtime Database screen by pressing the 3 dots and "Import JSON"