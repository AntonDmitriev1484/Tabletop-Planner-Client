import GenericWork from './GenericWork'
import Subtask from './Subtask'

interface Exam extends GenericWork {
    room: string,
    subtasks: Subtask[], //Do I need to make an array type for Subtask?
    //I think thats only required if you want to do custom non numerical indices
}

export default Exam;