const Users = require("../model/Users");

module.exports = {
    async createUsers(request, response) {
        const { name, email, password, confirm_password } = request.body

        const users = await Users.create({
            name,
            email,
            password,
            confirm_password
        });

        return response.json(users);
    },

    async findAllUsers(request, response) {
        const users = await Users.findAll({ raw: true });

        return response.json(users);
    },

    async findUser(request, response) {
        const { id } = request.params

        const users = await Users.findOne({ where: { id: id } });

        return response.json(users);
    },

    async updateUser(request, response) {
        const { id } = request.params

        const { name, email, password, confirm_password } = request.body

        const user = await Users.update(
            {
                name,
                email,
                password,
                confirm_password
            },
            {
                where: { id: id }
            }
        );

        return response.json(user);

    },

    async deleteUser(request, response) {
        const { id } = request.params

        const user = await Users.destroy({ where: { id: id } });

        return response.json({ message: "Usuário foi deletado com sucesso" });
    
    }
}