const { express, cors, colors, http, path, env } = require('./lib/lib')

env.config({ path: './config/config.env' })

const app = express()
app.use(express.json());
app.use(cors({
    origin: '*'
}))

app.all("*", (req, res) => {
    res.send({
        message: "The router or endpoint you entered was not found"
    });
});


const server = http.createServer(app);
server.listen(process.env.PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode, on port ${process.env.PORT}` . yellow.bold)
});