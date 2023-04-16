export default () => ({
    database: {
        mongodbUri: process.env.MONGO_DB_URI,
    },
    ml: {
        accessToken: process.env.ACCESS_TOKEN,
        taskId: process.env.TASK_ID,
    }
})
  