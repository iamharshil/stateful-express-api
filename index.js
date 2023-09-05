import express from "express";
import session from "express-session";
// import RedisStore from "connect-redis";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 3000;

app.use(cookieParser());
const MemoryStore = session.MemoryStore;
app.use(
	session({
		name: "app.sid",
		secret: "1234567890QWERTY",
		resave: true,
		store: new MemoryStore(),
		saveUninitialized: true,
		cookie: {
			// This will set the expiration date to session cookie
			maxAge: 8000,
		},
	}),
);

app.get("/api/count", (req, res) => {
	// Check if a session variable exists; if not, initialize it
	console.log("session: ", req.session);
	if (req.session.count) {
		req.session.count += 1;
	} else {
		req.session.count = 1;
	}

	req.session.save();

	res.json({ count: req.session.count });
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
