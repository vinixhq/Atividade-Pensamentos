// Importando o model Thoughts.
const Thought = require("../model/Thought");    

module.exports = {
    // Função responsável por renderizar a página dashboard:
    async dashboard(request, response){
        const thoughts = await Thought.findAll({ raw: true });
        return response.render("thoughts/dashboard", { thoughts });
    },

    // Função responsável por redirecionar para a página de cadastrar o pensamento:
    async registerThought(request, response){
        return response.render("thoughts/register");
    },

    async createThought(request, response) {
        const { title, description } = request.body
        // A função create fica responsavel por criar ou inserir os dados:

        // Nesse cenário a função create() fica responsavel por cadastrar os pensamentos no banco de dados na tabela de thoughts(pensamentos):
        const thought = await Thought.create({ title, description });
        
        try{
            if(thought) {
                return response.redirect("/thougths/dashboard");
            }
        }catch(error) {
            console.error(error);
        }
    },
    
    async showPageEditThought(request, response) {
        const { id } = request.params;

        const thought = await Thought.findOne({ where: {id: id}, raw: true });

        return response.render("thoughts/edit", { thought });
    },

    // Função responsavel por buscar apenas um pensamento cadastrado:
        async findThought(request, response) {
            const { id } = request.params
            
            const thought = await Thought.findOne({ where: { id: id } });
            
            return response.json(thought);
        },

    // Função responsavel por atualizar um pensamento cadastrado:
    async updateThought(request, response) {
        const { id } = request.params

        const { title, description } = request.body

        const thought = await Thoughts.update(
            {
                title,
                description  
            },

            {
                where: { id: id }
            }
        );

            try{
                if(thought) {
                    return response.redirect("/thoughts/dashboard");
                }
            }catch(error) {
                console.error(error);
            }
    },
    
    // Função responsavel por deletar um pensamento cadastrado:
    async deleteThought(request, response) {
        const { id } = request.params
        
        const thought = await Thought.destroy({ where: { id: id } });
        
        try{
            if(thought) {
                return response.redirect("/thoughts/dashboard");
            }
        }catch(error) {
            console.error(error);
        }
    }
}