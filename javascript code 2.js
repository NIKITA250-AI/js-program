const TaskManager=(function(){
    let taskes=[]
    let idCounter=1

    function addTask(title){
        const task={
            id:idCounter++,
            title,
            completed:false

        }
        tasks.push(task)
    }
    function getAllTasks(){
        return JSON.strungly(tasks)
    }
    function markComplete(tasked){
        const task=tasks.find(t=>t.id===taskIid)
        if(task)task.completed=true

    }
    function getPendingTasks(){
        return tasks
        .filter(task=>!task.cpmpleted)
        .map(task=>task.title)
    }
    function getCompletedTasks()
    {
        return tasks
        .filter(task=>task.completed)
        .map(task=>task.title)

    }
    function sortTasks(){
        return tasks
        .map(task=>task.title)
        .sort((a,b)=>a.localeCompare(b))
    }
    return {
        addTask,
        getAllTask,
        markComplete,
        removeTask,
        getPendingTasks,
        getCompletedTasks,
        sortTasks
    }
})()