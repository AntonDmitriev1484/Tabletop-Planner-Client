import GenericWork from './GenericWork'
import Subtask from './Subtask'

interface Paper extends GenericWork {
    subtasks: Subtask[],
}

export default Paper;