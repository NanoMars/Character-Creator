// db.js


const skinColours = [
    "#FFEDD8",
    "#F3D5B5",
    "#E7BC91",
    "#D4A276",
    "#BC8A5F",
    "#A47148",
    "#8B5E34",
    "#6F4518",
    "#603808",
    "#583101"
]

const hairBack = [
    "M0,330.3V34.96C0,15.66,15.71,0,35.09,0h289.82c19.38,0,35.09,15.65,35.09,34.96v312.82c0,18.24-14.01,33.21-31.9,34.82-1.75.16-3.51.12-5.26.02l-284.16-17.14c-3.73-.23-7.45-.75-11.05-1.75-16.64-4.64-27.63-16.53-27.63-33.42Z",
]

const hairFront = [
    "M0,118.38l115.75-50.38c40.96-17.83,87.54-17.83,128.5,0l115.75,50.38V34.96c0-19.31-15.71-34.96-35.09-34.96H35.09C15.71,0,0,15.65,0,34.96v83.42Z",
]

const eyes = [
    "M4.49,62.2c1.99,3.99,5.47,7.07,9.72,8.49,9.73,3.23,20.63,5.05,32.15,5.05,8.14,0,15.98-.91,23.3-2.58,4.39-1,8.2-3.74,10.55-7.57,4.34-7.05,6.72-15.43,6.32-24.4C85.54,18.92,67.27.85,44.91.03,20.26-.87,0,18.77,0,43.13c0,6.85,1.62,13.32,4.49,19.06h0ZM210.43,62.2c-1.99,3.99-5.47,7.07-9.72,8.49-9.73,3.23-20.63,5.05-32.15,5.05-8.14,0-15.98-.91-23.3-2.58-4.39-1-8.2-3.74-10.55-7.57-4.34-7.05-6.72-15.43-6.32-24.4C129.38,18.92,147.65.85,170.01.03c24.65-.9,44.91,18.74,44.91,43.1,0,6.85-1.62,13.32-4.49,19.06h0Z",
]
const hats = [
    "./hats/partyhat.svg",
]

const body = [
    {
        "name": "shirt",
        "path": "M152.36,2.51l35.22,88.03c1.05,2.62-.89,5.46-3.72,5.46h-33.67c-2.46,0-4.34,2.2-3.95,4.62l12.17,75.08c.39,2.42-1.48,4.62-3.95,4.62H33.41c-2.46,0-4.34-2.2-3.95-4.62l12.17-75.08c.39-2.42-1.48-4.62-3.95-4.62H4.01c-2.83,0-4.76-2.84-3.72-5.46L35.51,2.51c.61-1.52,2.08-2.51,3.72-2.51h109.4c1.64,0,3.11.99,3.72,2.51h0Z"
    },
    {
        "name": "head",
        "path": "M35,0h290c19.33,0,35,15.67,35,35v166.75c0,19.33-15.67,35-35,35l-143.21,3.65-146.79-3.65c-19.33,0-35-15.67-35-35V35C0,15.67,15.67,0,35,0Z"
    },
    {
        "name": "arms",
        "path": "M13.35,0l18.5,3.75L3.76,104.95c-.63,2.28-4.04,1.6-3.74-.75L13.35,0ZM176.9,104.2L163.57,0l-18.5,3.75,28.09,101.2c.63,2.28,4.04,1.6,3.74-.75Z"
    },
    {
        "name": "legs",
        "path": "M71.12,0h18.88l-7.27,104.75c-.17,2.35-3.64,2.36-3.82,0L71.12,0ZM7.79,104.75c.18,2.36,3.65,2.35,3.82,0L18.88,0H0l7.79,104.75Z"
    }
]

export { skinColours, body, hairBack, hairFront, eyes, hats}