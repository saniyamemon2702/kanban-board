const  boards = [
    {
        id:    Date.now()+Math.random()*2 ,
        title: "TO DO",
        cards: [
            {
                id: Date.now()+Math.random()*2,
                title: "Card 1",
                tasks: [],
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                labels: [{ id: 1, text: "label 1", color: "green" }, { id: 2, text: "label 2", color: "red" }],
                

            },{
                id: Date.now()+Math.random()*2,
                title: "Card 2",
                tasks: [],
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                labels: [{ id: 1, text: "label 1", color: "orange" }, { id: 2, text: "label 2", color: "blue" }],
                date: "29 sept",
            }
        ]
    },
    {
        id: 2,
        title: "IN PROGRESS",
        cards: [
            {
                id: Date.now()+Math.random()*2,
                title: "Card 1",
                tasks: [],
                description: "Lorem ipsum dolor sit amet.",
                labels: [{ id: 1, text: "label 1", color: "green" }, { id: 2, text: "label 2", color: "yellow" }],
                date: "29 sept",
            }
        ]
    }];
    export default boards;
