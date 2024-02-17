module.exports = {
    paths:{
        "/create":{
            post:{
                tags:{
                    Tasks: "Create a new task",
                },
                decription:"Create Task",
                operationId:"createTask",
                parameters: [],
                requestBody:{
                    content:{
                        "application/json":{
                            schema:{
                                $ref: "#components/schemas/Task",
                            },
                        },
                    },
                },
            },
            Response: {
                201:{
                    description:"task created"
                },
                500:{
                    decription:"Server 500 error"
                }

            }
        },
        "/id/{_id}":{
            put:{
                tags:{
                    Tasks:"update a task"
                },
                description:"update task",
                operationId:"updateTask",
                parameters: [
                    {
                      name: "_id",
                      in: "path",
                      schema: {
                        $ref: "#/components/schemas/_id",
                      },
                      description: "Id of task to be updated",
                    },
                ],
                requestBody:{
                    content:{
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Task"},
                        },
                    },
                },
          Response:{
            200: { description: "User updated successfully" },
            500: { description: "Server error" },
          }
            }
        },
        "/":{
            post:{
                tags:{
                    Tasks: "Get all task",
                },
                decription:"Get all Task",
                operationId:"getAllTask",
                parameters: [],
                requestBody:{
                    content:{
                        "application/json":{
                            schema:{
                                $ref: "#components/schemas/Task",
                            },
                        },
                    },
                },
            },
            Response: {
                201:{
                    description:"tasks obtained"
                },
                500:{
                    decription:"Server 500 error"
                }

            }
        },
        "/id/:_id":{
            delete:{
                tags:{
                    Tasks: "Delete task",
                },
                decription:"Delete Task",
                operationId:"DeleteTask",
                parameters: [],
                requestBody:{
                    content:{
                        "application/json":{
                            schema:{
                                $ref: "#components/schemas/Task",
                            },
                        },
                    },
                },
            },
            Response: {
                201:{
                    description:"task eliminated"
                },
                500:{
                    decription:"Server 500 error"
                }

            }
        },
    }

}