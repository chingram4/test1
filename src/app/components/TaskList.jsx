import { connect } from "react-redux";
import React from "react";

export const TaskList = ({tasks, name}) =>(
    <div>
        <h3> {name} </h3>

        <div>
             {tasks.map (task =>
         (
            <div>
                {task.name}
            </div>    
        ))}

        </div>
    </div>
)

const mapStateToProps = (state, ownProps) => {
    let groupID = ownProps.id;
    return{
        name: ownProps.name,
        id:groupID,
        tasks: state.tasks.filter(task=> task.group === groupID)
    }
};

export const ConnectedTaskList = connect(mapStateToProps)(TaskList)