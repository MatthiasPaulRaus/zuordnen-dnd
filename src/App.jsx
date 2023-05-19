
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import myData from './myData'
import { useState } from 'react'
import './App.css'

const App = () => {

    const [data, setData]=useState(myData)

    const [checkBtn, setCheckBtn]=useState(false)

    const [genus, setGenus]=useState(false)

    const check =()=>{    
        setGenus(true)
    }

    const [textBtn, setTextBtn]=useState(false)

    const [text, setText]=useState(false)

    const checkText =()=>{
        setText(true)
    }

    const[reloadBtn, setReloadBtn]=useState(false)

    const reload =()=>{
        window.location.reload()  
    }

   

    const onDragEnd = (result) => {
        
        const { source, destination } = result

        if (!result.destination) return

        if (source.droppableId !== destination.droppableId) {

            //If the user drags and drops within a new column//
            
            const sourceColIndex = data.findIndex(e => e.id === source.droppableId)
            const destinationColIndex = data.findIndex(e => e.id === destination.droppableId)

            const sourceCol = data[sourceColIndex]
            const destinationCol = data[destinationColIndex]

            const sourceTasks = [...sourceCol.tasks]
            const destinationTasks = [...destinationCol.tasks]

            const [removed] = sourceTasks.splice(source.index, 1)
            destinationTasks.splice(destination.index, 0, removed)

            data[sourceColIndex].tasks = sourceTasks
            data[destinationColIndex].tasks = destinationTasks

            
        }
        else{
            //If the user drags and drops within the same column but in a different position//

            const destinationColIndex = data.findIndex(e => e.id === destination.droppableId)
            const destinationCol = data[destinationColIndex]
            const destinationTasks = [...destinationCol.tasks]
            const [removed]= destinationTasks.splice(source.index,1)
            destinationTasks.splice(destination.index, 0, removed)
            data[destinationColIndex].tasks = destinationTasks

            
        }
        setData(data)
        
        if(data[0].tasks.length === 0){
            setTextBtn(true) 
            setCheckBtn(true)
            setReloadBtn(true)
            data.shift() 
        }   
    }

    
    
    
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="kanban">
                {
                    data.map(section => (
                        <Droppable 
                        
                            key={section.id}
                            droppableId={section.id}
                        >
                            {(provided) => (
                                <div
                                    {...provided.droppableProps}
                                    className="section"
                                    ref={provided.innerRef}
                                >


                                    <div className="title">
                                        {section.title}
                                    </div>
                                    
                                    <div className="content">
                                        {
                                            section.tasks.map((task, index) => (
                                                <Draggable 
                                                    key={task.id}
                                                    draggableId={task.id}
                                                    index={index}
                                                >
                                                    {(provided, snapshot) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            style={{
                                                                ...provided.draggableProps.style,
                                                                opacity: snapshot.isDragging ? '0.5' : '1'
                                                            }}
                                                        >
                                                            <div className="card">
                                                                {task.img}
                                                                <br></br>
                                                                {text && task.text}  
                                                                <br></br>
                                                                {genus && task.gen}          
                                                            </div>
                                                        </div>
                                                    )}
                                                </Draggable>
                                                
                                            ))
                                        }
                                        {provided.placeholder}
                                        
                                    </div>
                                </div>
                            )}
                            
                        </Droppable>
                    ))
                }
            </div>
            <br></br>
            {textBtn && <div className="control" onClick={checkText}>Text</div>}
            <br></br>
            {checkBtn && <div className="control" onClick={check}>Genus</div>}
            <br></br>
            {reloadBtn && <div className="control" onClick={reload}>reload</div>}

        </DragDropContext>
        
    ) 
              
}

export default App

