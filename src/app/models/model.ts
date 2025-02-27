
export interface Task {
    id: number;
    title: string;
    description: string;
    done: boolean;
};

export interface TaskFormState {
    task: Task;
    isEditing: boolean;
}