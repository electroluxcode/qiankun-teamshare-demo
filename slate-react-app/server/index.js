var http = require("http");
var express = require("express");
var ShareDB = require("sharedb");
var WebSocket = require("ws");
var WebSocketJSONStream = require("@teamwork/websocket-json-stream");
let myType = {
	type: {
		name: "demo",
		uri: "demo",
		// 初始化 OT 编码器
		create: function (op) {
			console.log("create", op);
			return {
				state:op.state,
			}; 
		},
		// 将客户端提交的操作应用到服务器端数据,set的时候直接赋值了
		apply: function (snapshot, op) {
			console.log("apply");
			return op; // 直接返回操作，表示简单地应用操作
		},
		// 将服务器端数据转换为客户端可用的格式
		transform: function (ops, otherOps, side) {
			console.log("transform");
			return ops; // 简单地返回操作，不进行转换
		},
	},
};

ShareDB.types.register(myType.type);
var backend = new ShareDB();
createDoc(startServer);

// Create initial document then fire callback
function createDoc(callback) {
	var connection = backend.connect();
	var doc = connection.get("examples", "counter");
	doc.fetch(function (err) {
		if (err) throw err;
		// console.log(doc);
		doc.create({ state: 0 }, myType.type.uri, callback);
	});
}

function startServer() {
	// Create a web server to serve files and listen to WebSocket connections
	var app = express();
	var server = http.createServer(app);

	// Connect any incoming WebSocket connection to ShareDB
	var wss = new WebSocket.Server({ server: server });
	wss.on("connection", function (ws) {
		var stream = new WebSocketJSONStream(ws);
		backend.listen(stream);
	});

	server.listen(9210);
	console.log("Listening on http://localhost:9210");
}