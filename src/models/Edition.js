import mongoose from "mongoose";

const EditionSchema = new mongoose.Schema({
    date: { type: String, require: true },
    category: [
        {
            name: {type: String, require: true},
            articles: [
                {
                    title: String,
                    description: String,
                    content: String,
                    url: String,
                    image: String,
                    author: String,
                    publishedAt: String,
                    source: {
                        name: String
                    }
                }
            ]
        }
    ]
}, {timestamps: true});

export default mongoose.model("Edition", EditionSchema);