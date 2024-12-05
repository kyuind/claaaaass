const Sequelize = require("sequelize")


class User extends Sequelize.Model{
    static initiate(sequelize){ //sequelize 초기화 
        User.init({ // User 테이블의 초기값 설정  , 칼럼 정보 
            name:{
                type : Sequelize.STRING(20), // datatype 
                allowNull : false, // not null
                unique : false // Unqique 값
            },
            age:{
                type : Sequelize.INTEGER.UNSIGNED, // 양의 정수만 INTEGER (정수)
                allowNull : false,
                unique : false
            },
            married:{
                type : Sequelize.BOOLEAN, // true, false로 데이터사용
            },
            comment:{
                type: Sequelize.TEXT, // text type
                allowNull:true,
            },
            create_at:{
                type : Sequelize.DATE, // Date(시간포함), DATEONLY(날짜만)
                allowNull: false,
                defaultValue: Sequelize.now, // 현재 시간이 기본값 
            },
        },{
            sequelize, // 모델에 대한 정보 
            timestamps : false, // 자동으로 시간 기록(createAt,updateAt)필드 생성 하지 않음
            underscored : false, // 테이블, 컬럼명등의 명명을 스네이트 표기법 사용하지 않겠다.
            modelName: "User", // 모델 이름 
            tableName: "Users", // 실제 테이블의 이름 
            papranoid : false, // 삭제된 데이터 복구 가능
            charset : 'utf8', // utf8로 데이터 인코딩 
            collate: 'utf8_general_ci' //utf8로 데이터 인코딩

        }) 
    }
    static associate(db){
        db.User.hasMany(db.Comment, { foreignKey:'commenter', sourceKey: 'id'}) // hasMany 
    }
} //Sequelize.Model 에서 상속

module.exports = User;