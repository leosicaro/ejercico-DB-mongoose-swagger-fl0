module.exports = {
    components:{
        schemas:{
            Task:{
                type:'object',
                properties:{
                   // _id:{
                   //     type:'objectId',
                   //     description:"task id number",
                   //     example:"2im4yi99e"
                    },
                    taskname:{
                        type:'string',
                        description:"task to register",
                        example:"wash the dishes"
                    },
                    completed:{
                        type:'boolean',
                        description:"decribe the status of the task",
                        example:'true'
                    }

                },
            _id:{
                type:'objectId',
                description:"An id of a task",
                example:"32a3e5f1535sef3s51df351df3"

            }
            }
        }
    }

