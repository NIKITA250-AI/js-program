function createStudentManager(){
    let students=[]

    function findStudents(name){
        return students.find(student =>student.name === name)

    }
    return{
        addStudent(student){
            students.push({name:student.name,scores:{...student.scores}})
        }
        updateScore(name,subject,score){
            const student=findStudent(name);
            if(student){
                student.scores[subject]=score
            }
        },
        getStudentDetails(name)
        {
            const student=findStudent(name)
            return student?student:"Student Not Found"
        },
        addSubject(name,subject,score){
            const student=findStudent(name)
            if(student){
                student.score[subject]=score
            }
        },
        getAverageScores(){
            return student.map(student=>{
                const student=Object.values(student.scores)
                const average=scores.reduce((a,b)=>a+b,0)/scores.length
                return{name:student.name,average}
            })
        },
        getTopPerformance(){
            return this.getAverageScores().filter(s=>s.average>85)


        },
        getFailedStudents(){
            return students.filter(student =>Object.values(student.scores).some(score=>score<35)
        );
        },
        getDifficultSubjects(){
            const subjectMap={}
            students.forEach(student=>{
                Object.entries(student.scores).forEach(([subject,score])=>{
                    if(!subjectMap[subject])subjectMap[subject]=[]
                    subjectMap[subject].push(score)
                })
            })
            const difficultSubjects=[]
            for(let [subject,scores] Of  
                Object.entries(subjectMap)){
                    const failed =scores.filter(score=>score<40).length
                    if(failed/scores.length>0.5){
                        difficultSubjects.push(subject)
                    }
                }
                return difficultSubjects
            

    },
    getSubjectFrequency(){
        const freqMap={}
        students.forEach(student=>{
            Object.keys(student.scores).forEach(subject=>{
                freqMap[subject]=(freqMap[subject]||0)+1
            })
        })
        return freqMap
    },
    getSortedStudents(sortBy)
    {
        const avgScores=this.getAverageScores()
        return[...students].sort((a,b)=>{
            if(sortBy===`name`){
                return a.name.localeCompare(b.name)
            }
            else if(sortBy===`average`){
                const aAvg=avgScores.find(s=>s.name===a.name)?.average||0
                const nAvg=avgScores.find(s=>s.name===b.name)?.average||0
                return bAvg-aAvg
            }
            return 0
        })
    }
}

