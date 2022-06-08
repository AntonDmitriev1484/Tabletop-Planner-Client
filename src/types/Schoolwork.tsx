
import Course from './Course'
import Homework from './schoolwork_types/Homework'
import Paper from './schoolwork_types/Paper'
import Exam from './schoolwork_types/Exam'
import Project from './schoolwork_types/Project'

interface Schoolwork {
    dt_created: Date,
    dt_assigned: Date,
    dt_archived: Date,

    description: string,
    note: string,

    course: Course,

    type: string,
    work: Homework | Paper | Exam | Project,
}

// Because of how the Mongoose models on the back end aren't
// strongly typed, it made more sense to have a 'work' object
// nested within a Schoolwork object. Otherwise, Schoolwork
// would be an interface and Homework, Exam, etc would all
// just extend it.

export default Schoolwork