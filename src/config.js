var config = {}

config.host = process.env.HOST || "https://nodedbsample.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "CkCU60xrUXtBgABHawG6I0tbCNoWijxwZF3lmL6TcVSGyriITpGyothdsDEfx5ym0buo2yCcpDaSjrd1P2757A==";
config.databaseId = "ToDoList";
config.collectionId = "Items";

module.exports = config;
