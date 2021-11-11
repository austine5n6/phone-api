module.exports = (sequelize, Sequelize) => {
    const Phone = sequelize.define("phones", {
        name: {
            type: Sequelize.STRING
        },
        size: {
            type: Sequelize.STRING
        },
        yearProduced: {
            type: Sequelize.INTEGER
        },
        internalStorage: {
            type: Sequelize.STRING
        },
        ramSize: {
            type: Sequelize.STRING
        }

    })
    return Phone;
}