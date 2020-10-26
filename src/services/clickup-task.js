import client from './../client'

export default {
    getPrioritizedAssignedTasks() {

        const parameters = {
            archived: false,
            subtasks: true
        }

        return client.get('task', parameters)
    }
}
