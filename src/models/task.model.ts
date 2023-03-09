// @ts-ignore
import client from "../database"

export type task = {
    id?: number,
    title: string,
    description: string,
    completed: boolean,
    category: string,
    userId: string,
    createdAt?: string,
    updatedAt?: string
}

export class Task {

    async index(): Promise<task[]> {
        try {
            // @ts-ignore
            const dbConnect = await client.connect()
            const sql = "SELECT id, title, description, completed, category, user_id, createdAt FROM tasks"
            const result = dbConnect.query(sql);
            dbConnect.release();
            return result.rows
        } catch (error) {
            throw new Error(`No task found: ${error}`);
        }
    }

    async show(id: string): Promise<task> {
        try {
            // @ts-ignore
            const dbConnect = await client.connect()
            const sql = "SELECT id, title, description, completed, category, user_id, createdAt FROM tasks WHERE id = ($1)"
            const result = await dbConnect.query(sql);
            dbConnect.release();
            return result.rows[0]
        } catch (error) {
            throw new Error(`cannot get task with id ${id}: ${error}`);
        }
    }

    async updateTask(task: task): Promise<task> {
        try {
            // @ts-ignore
            const dbConnect = await client.connect()
            const sql = "UPDATE tasks SET (title, description, completed, category, updatedAt) = ($1, $2, $3, $4, $5) WHERE id = ($6)"
            const result = await dbConnect.query(sql, [task.title, task.description, task.completed, task.category, task.updatedAt]);
            dbConnect.release();
            return result.rows[0]
        } catch (error) {
            throw new Error(`could not update task ${error}`);
        }
    }

    
}
