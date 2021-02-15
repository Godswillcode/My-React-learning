import React from 'react'

function Filter() {
    const words = ['HTML', 'CSS', 'JAVASCRIPT', 'PYTHON', 'JAVA']
    const longWords = words.filter((word) => word.length > 4)
    // console.log(longWords);

    const students = [
        {name: 'jason', grade: 84},
        {name: 'sam', grade: 65},
        {name: 'kate', grade: 92},
        {name: 'joan', grade: 75},
    ]

    // Arrow function
    const graduatingStudent = students.filter((student) => student.grade >= 75)
    console.table(graduatingStudent);

    // Regular function
        function studentResult(student) {
            return student.grade >= 75
        } 
     const result =  students.filter(studentResult)
     console.table(result);
    
    return (
        <div className="text-center pt-3">
            <h3>Javascript method filter</h3>
        </div>
    )
}

export default Filter
