import GenericWork from './GenericWork'
import Subtask from './Subtask'

interface Project extends GenericWork {
    subtasks: Subtask[],
    //collaborators: ???
}

export default Project