
const Sequelize = require('sequelize');
const User = require('./users') // User 모델 불러오기
const Comment = require('./comments')

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {}; // sequelize 기본 값 

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.User = User; // db에 테이블 정보 전달
db.Comment = Comment;

Comment.initiate(sequelize);
User.initiate(sequelize); //해당 user를 실행해서 초기화 시키는 작업

//데이터베이스 관겨 설정 
User.associate(db);
Comment.associate(db);
module.exports = db;