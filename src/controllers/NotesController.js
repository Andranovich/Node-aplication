const knex = require('../database/knex');

class NotesController {

    async create(request, response) {
        const { title, description, rating, tags} = request.body;
        const { user_id } = request.params;

        const [note_id] = await knex("notes").insert({
            title,
            description,
            rating,
            user_id
        });

        



        response.json();

    };
};

module.exports = NotesController;