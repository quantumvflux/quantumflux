export const pfpData = [
    { imageUrl: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHN2YWliajFuY3AxMXJ4MGZod2FkYW9qcnR2Y2JzYjczamlqbnhjaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11tmhZRjavMMIE/giphy.webp" },
]

export const getRandomPfp = () => {
    return pfpData[Math.floor(Math.random() * pfpData.length)]
}