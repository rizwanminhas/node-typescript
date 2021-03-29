import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express()

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello from rizwan minhas :)')
})

const PORT = 9000
app.listen(PORT, () => console.log(`listening on port ${PORT}...`))
